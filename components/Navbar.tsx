"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CategoryPill } from "@/components/blog/category-pill";
import { categories } from "@/data/blogs";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen || pathname.startsWith("/dashboard")) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen, pathname]);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <div
      data-animation="over-left"
      className="site-navbar sticky top-0 z-[999] bg-paper/90 py-3 backdrop-blur-xl"
      data-easing2="ease"
      data-easing="ease-out-cubic"
      data-collapse="all"
      data-w-id="68568e00-6dcb-05ac-e8a6-519083c34240"
      role="banner"
      data-no-scroll="1"
      data-duration="600"
      data-doc-height="1"
    >
      <div className="relative z-[2] mx-auto block w-[96%] max-w-[68rem]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-current="page"
            className="relative z-[99] block p-0 font-serif text-2xl font-bold leading-none tracking-[-0.025em]"
          >
            Okoye’s Log
          </Link>
          <div className="relative z-[99] flex min-w-0 items-center justify-end gap-2">
            <nav aria-label="Featured collections" className="max-lg:hidden">
              <ul className="m-0 flex list-none flex-row items-center gap-1 p-0">
                <li>
                  <Link
                    href="/all-blogs"
                    className="rounded-full px-3 py-2 font-mono text-xs font-medium tracking-[-0.02em] hover:bg-control-bg hover:opacity-100"
                  >
                    All Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tag/featured-blogs"
                    className="rounded-full px-3 py-2 font-mono text-xs font-medium tracking-[-0.02em] hover:bg-control-bg hover:opacity-100"
                  >
                    Featured Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tag/most-popular"
                    className="rounded-full px-3 py-2 font-mono text-xs font-medium tracking-[-0.02em] hover:bg-control-bg hover:opacity-100"
                  >
                    Most Popular
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex min-w-0 items-center justify-end gap-2">
              <form
                action="/search"
                role="search"
                className="relative mb-0 w-28 sm:w-52 xl:w-60"
              >
                <input
                  className="block h-10 w-full rounded-full border border-control-border-soft bg-control-bg py-0 pl-4 pr-10 text-sm font-medium text-ink outline-none transition-[border-color,background-color,box-shadow] placeholder:text-control-muted hover:border-control-border focus:border-control-border focus:bg-paper focus:ring-2 focus:ring-control-border-soft"
                  maxLength={256}
                  name="query"
                  placeholder="Search blogs"
                  type="search"
                  id="search"
                  required
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-ink p-0 text-paper transition-opacity hover:opacity-75"
                >
                  <div className="size-3.5 origin-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2382 18.1267L10.9382 11.8267C10.4382 12.2267 9.86318 12.5434 9.21318 12.7767C8.56318 13.01 7.87152 13.1267 7.13818 13.1267C5.32152 13.1267 3.78402 12.4975 2.52568 11.2392C1.26735 9.98088 0.638184 8.44338 0.638184 6.62671C0.638184 4.81004 1.26735 3.27254 2.52568 2.01421C3.78402 0.755876 5.32152 0.126709 7.13818 0.126709C8.95485 0.126709 10.4924 0.755876 11.7507 2.01421C13.009 3.27254 13.6382 4.81004 13.6382 6.62671C13.6382 7.36004 13.5215 8.05171 13.2882 8.70171C13.0549 9.35171 12.7382 9.92671 12.3382 10.4267L18.6382 16.7267L17.2382 18.1267ZM7.13818 11.1267C8.38818 11.1267 9.45068 10.6892 10.3257 9.81421C11.2007 8.93921 11.6382 7.87671 11.6382 6.62671C11.6382 5.37671 11.2007 4.31421 10.3257 3.43921C9.45068 2.56421 8.38818 2.12671 7.13818 2.12671C5.88818 2.12671 4.82568 2.56421 3.95068 3.43921C3.07568 4.31421 2.63818 5.37671 2.63818 6.62671C2.63818 7.87671 3.07568 8.93921 3.95068 9.81421C4.82568 10.6892 5.88818 11.1267 7.13818 11.1267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </form>

              <button
                type="button"
                aria-controls="site-navigation"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="relative z-[2] flex size-10 flex-none cursor-pointer items-center justify-center rounded-full border border-control-border bg-transparent p-0 transition-opacity hover:opacity-75"
              >
                <div className="relative size-full">
                  <div
                    className={`absolute inset-0 flex size-full items-center justify-center gap-0.5 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                  >
                    <div className="size-1 rounded-full bg-ink"></div>
                    <div className="size-1 rounded-full bg-ink"></div>
                    <div className="size-1 rounded-full bg-ink"></div>
                  </div>
                  <div
                    className={`absolute inset-0 flex size-full items-center justify-center transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="absolute h-[0.6em] w-0.5 -rotate-45 bg-ink"></div>
                    <div className="absolute h-[0.6em] w-0.5 rotate-45 bg-ink"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <nav
            id="site-navigation"
            aria-hidden={!isMenuOpen}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a"))
                setIsMenuOpen(false);
            }}
            className={`fixed inset-0 z-40 flex h-dvh items-stretch overflow-y-auto bg-paper transition-[opacity,visibility] duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}
          >
            <div className="relative flex size-full flex-col justify-between pt-24">
              <div className="relative mx-auto flex w-[96%] max-w-[68rem] flex-col justify-between">
                <div>
                  <div className="flex items-start gap-12">
                    <ul
                      role="list"
                      className="mr-[2vw] flex list-none flex-col items-start gap-3 p-0"
                    >
                      <li className="flex items-center gap-1 text-lg leading-none lg:text-[1.33vw]">
                        <Link
                          href="/"
                          aria-current="page"
                          className="font-mono"
                        >
                          Home
                        </Link>
                        <div className="text-sm">→</div>
                      </li>
                      <li className="flex items-center gap-1 text-lg leading-none lg:text-[1.33vw]">
                        <Link href="/about-us" className="font-mono">
                          About Us
                        </Link>
                        <div className="text-sm">→</div>
                      </li>
                      <li className="flex items-center gap-1 text-lg leading-none lg:text-[1.33vw]">
                        <Link href="/contact" className="font-mono">
                          Contact
                        </Link>
                        <div className="text-sm">→</div>
                      </li>
                    </ul>
                    <div className="flex list-none flex-col items-start gap-3 p-0 max-sm:hidden">
                      <div className="flex items-center gap-1 text-lg leading-none lg:text-[1.33vw]">
                        <Link href="/all-blogs" className="font-mono">
                          All Blogs
                        </Link>
                        <div className="text-sm">→</div>
                      </div>
                      <div>
                        <div
                          role="list"
                          className="flex list-none flex-col items-start gap-3 p-0"
                        >
                          <div
                            role="listitem"
                            className="flex items-center gap-1"
                          >
                            <Link
                              href="/tag/featured-blogs"
                              className="flex max-w-full items-center gap-1 text-lg leading-none lg:text-[1.33vw]"
                            >
                              <div className="font-mono">Featured Blogs</div>
                              <div className="text-sm">→</div>
                            </Link>
                          </div>
                          <div
                            role="listitem"
                            className="flex items-center gap-1"
                          >
                            <Link
                              href="/tag/most-popular"
                              className="flex max-w-full items-center gap-1 text-lg leading-none lg:text-[1.33vw]"
                            >
                              <div className="font-mono">Most Popular</div>
                              <div className="text-sm">→</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[2.5vw]">
                    <div role="list" className="flex flex-wrap gap-x-2 gap-y-4">
                      {categories.map((category) => (
                        <div role="listitem" key={category.slug}>
                          <CategoryPill category={category.slug} large linked />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto block w-[96%] max-w-[68rem] py-4">
                <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-center justify-between">
                  <div className="mb-8 max-w-[83.3333%] flex-[1_1_83.33%] px-2">
                    <div className="inline-flex w-full flex-wrap items-center">
                      <a
                        href="https://okoyedavid.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mr-4 inline-block max-w-full text-left text-sm font-semibold tracking-[-0.025em]"
                      >
                        <div>David Okoye</div>
                      </a>
                      <a
                        href="/about-us"
                        className="flex max-w-full gap-4 text-base transition-opacity hover:opacity-65"
                      >
                        <div className="font-mono text-sm leading-[1.4] tracking-[-0.005em]">
                          About
                        </div>
                      </a>
                      <div className="mx-[0.2em] inline font-mono text-[1.1rem] leading-none tracking-[-0.05em]">
                        /
                      </div>
                      <a href="/all-blogs" className="inline-block max-w-full">
                        <div className="font-mono text-sm leading-[1.4] tracking-[-0.005em]">
                          Articles
                        </div>
                      </a>
                      <div className="mx-[0.2em] inline font-mono text-[1.1rem] leading-none tracking-[-0.05em]">
                        /
                      </div>
                      <a
                        href="https://github.com/okoyedavid"
                        target="_blank"
                        rel="noreferrer"
                        className="flex max-w-full gap-4 text-base transition-opacity hover:opacity-65"
                      >
                        <div className="font-mono text-sm leading-[1.4] tracking-[-0.005em]">
                          GitHub
                        </div>
                      </a>
                      <div className="mx-[0.2em] inline font-mono text-[1.1rem] leading-none tracking-[-0.05em]">
                        /
                      </div>
                      <a
                        href="https://www.linkedin.com/in/okoyedavid7"
                        target="_blank"
                        rel="noreferrer"
                        className="flex max-w-full gap-4 text-base transition-opacity hover:opacity-65"
                      >
                        <div className="font-mono text-sm leading-[1.4] tracking-[-0.005em]">
                          LinkedIn
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="mb-8 flex-[0_auto] px-2">
                    <div className="flex items-center justify-end">
                      <a
                        href="https://okoyedavid.com"
                        target="_blank"
                        className="hidden"
                      >
                        <div className="inline-block size-full max-h-8 max-w-8 origin-center scale-[0.85]">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="sr-only">David Okoye portfolio</div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/okoyedavid7"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block max-w-full"
                      >
                        <div className="inline-block size-full max-h-8 max-w-8 origin-center scale-[0.85]">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.89999 12.3V23H12.3V12.3H8.89999ZM8.7 8.9C8.7 10 9.5 10.8 10.6 10.8C11.7 10.8 12.5 10 12.5 8.9C12.5 7.8 11.7 7 10.6 7C9.6 7 8.7 7.8 8.7 8.9ZM21.3 23H24.5V16.4C24.5 13.1 22.5 12 20.6 12C18.9 12 17.7 13.1 17.4 13.8V12.3H14.2V23H17.6V17.3C17.6 15.8 18.6 15 19.6 15C20.6 15 21.3 15.5 21.3 17.2V23Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="sr-only">Linkedin icon</div>
                      </a>
                      <a
                        href="https://github.com/okoyedavid"
                        target="_blank"
                        className="hidden"
                      >
                        <div className="inline-block size-full max-h-8 max-w-8 origin-center scale-[0.85]">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM19.67 16H17.27V24.47H13.73V16H12.07V13H13.73V11.07C13.73 9.73 14.33 7.53 17.27 7.53H19.87V10.47H18C17.73 10.47 17.27 10.6 17.27 11.27V13H19.93L19.67 16Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="sr-only">David Okoye on GitHub</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="absolute inset-0 z-[1] size-full bg-transparent opacity-[0.98] backdrop-blur-[3px]"></div>
    </div>
  );
}
