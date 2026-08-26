import { writeFile } from "node:fs/promises";

const pages = await fetch("http://127.0.0.1:9224/json").then((response) => response.json());
const target = pages.find((page) => page.type === "page");
if (!target) throw new Error("No Chrome page target found.");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  const requestId = ++id;
  socket.send(JSON.stringify({ id: requestId, method, params }));
  return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }));
}

await send("Page.enable");
await send("Runtime.enable");

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.name === "mobile",
  });
  await send("Page.navigate", { url: "http://127.0.0.1:3000/login?next=%2Feditor" });
  await new Promise((resolve) => setTimeout(resolve, 1800));
  await send("Runtime.evaluate", {
    expression: `localStorage.removeItem("waaxaa-user"); window.dispatchEvent(new Event("waaxaa-auth-change"))`,
  });
  await new Promise((resolve) => setTimeout(resolve, 250));
  if (viewport.name === "desktop") {
    await send("Runtime.evaluate", {
      expression: `localStorage.setItem("okoye-theme", "dark"); document.documentElement.dataset.theme = "dark"`,
    });
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  const result = await send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const form = document.querySelector('[aria-label="Sign in to the writing desk"] form');
      const main = document.querySelector("main");
      const overflows = [...document.querySelectorAll("body *")]
        .filter((element) => element.scrollWidth > element.clientWidth + 1)
        .map((element) => ({ tag: element.tagName, className: String(element.className).slice(0, 100), clientWidth: element.clientWidth, scrollWidth: element.scrollWidth }));
      return {
        title: document.title,
        heading: document.querySelector("h1")?.textContent,
        formWidth: Math.round(form?.getBoundingClientRect().width || 0),
        submitDisabled: form?.querySelector('button[type="submit"]')?.disabled,
        mainWidth: main?.clientWidth,
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        footerVisible: [...document.body.children].some((element) => element.tagName === "SECTION" && getComputedStyle(element).display !== "none"),
        overflows,
      };
    })()`,
  });
  const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile(`.codex-login-${viewport.name}.png`, Buffer.from(screenshot.data, "base64"));
  console.log(JSON.stringify({ viewport, ...result.result.value }, null, 2));
}

socket.close();
