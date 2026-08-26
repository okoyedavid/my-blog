import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide",
  description:
    "Okoye’s Log internal reference for typography, colors, components, utilities and layouts.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div>
      <section className="relative py-24 pb-0">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-end">
            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[58.3333%] lg:max-w-[58.3333%] md:flex-none md:basis-[100%] md:max-w-[100%]">
              <h1 className="my-[10px] font-serif text-[clamp(3.5rem,8vw,6rem)] font-normal leading-none tracking-[-0.075em] m-0">Style Guide</h1>
            </div>
            <div className="mb-8 min-w-0 flex-1 px-2">
              <div className="flex flex-wrap gap-2">
                <div>Last updated: Apr 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="rounded-3xl bg-[var(--black-5)] p-12">
            <p className="text-xl leading-[1.3] tracking-[-0.01em]">
              Introducing <em>Okoye’s Log</em>, a home for technical writing and project stories.
              Crafted with precision using
              <a
                href="https://nocodesupply.co/mast/docs"
                target="_blank"
                className="font-medium"
              >
                Mast CSS framework ↗️
              </a>
              , this Webflow template offers an efficient solution for creating
              a functional and visually captivating blog website. Designed with
              adaptability in mind, Okoye’s Log has a versatile and
              easy-to-edit category color system, allowing you to effortlessly
              align your digital identity with your brand. Elevate your online
              reach and enhance your storytelling capabilities with this
              user-friendly template, tailor-made for the modern publishing
              landscape.
            </p>
          </div>
        </div>
      </section>
      <main id="main">
        <div className="relative py-24 pb-0 pt-12">
          <div className="mx-auto block w-[96%] max-w-[68rem]">
            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[0.25fr_1.25fr]">
              <div className="relative flex flex-col pb-32 pr-2.5 col-span-1 row-span-1">
                <div className="sticky top-32 flex flex-col">
                  <a href="#typography" className="bg-transparent px-3 py-4 font-mono text-[1.1em] leading-none text-[var(--black)] no-underline transition-colors hover:text-[var(--ink-muted)] border-l border-[var(--control-border-soft)] pl-4 pr-0 !text-base text-[var(--ink-muted)]">
                    Typography
                  </a>
                  <a href="#color" className="bg-transparent px-3 py-4 font-mono text-[1.1em] leading-none text-[var(--black)] no-underline transition-colors hover:text-[var(--ink-muted)] border-l border-[var(--control-border-soft)] pl-4 pr-0 !text-base text-[var(--ink-muted)]">
                    Color
                  </a>
                  <a href="#components" className="bg-transparent px-3 py-4 font-mono text-[1.1em] leading-none text-[var(--black)] no-underline transition-colors hover:text-[var(--ink-muted)] border-l border-[var(--control-border-soft)] pl-4 pr-0 !text-base text-[var(--ink-muted)]">
                    Components
                  </a>
                  <a href="#utilities" className="bg-transparent px-3 py-4 font-mono text-[1.1em] leading-none text-[var(--black)] no-underline transition-colors hover:text-[var(--ink-muted)] border-l border-[var(--control-border-soft)] pl-4 pr-0 !text-base text-[var(--ink-muted)]">
                    Utilities
                  </a>
                  <a href="#layout" className="bg-transparent px-3 py-4 font-mono text-[1.1em] leading-none text-[var(--black)] no-underline transition-colors hover:text-[var(--ink-muted)] border-l border-[var(--control-border-soft)] pl-4 pr-0 !text-base text-[var(--ink-muted)]">
                    Layout
                  </a>
                </div>
              </div>
              <div className="col-span-1 row-span-1">
                <section id="typography" className="relative py-24 pt-0">
                  <h2 className="mb-2 mt-3 font-serif text-[2.5rem] font-medium leading-[1.1] tracking-[-0.035em] mt-0">Typography</h2>
                  <div className="mb-12 mt-24 flex items-center gap-4">
                    <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Fonts</h3>
                    <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                  </div>
                  <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                    <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                      <div className="overflow-hidden">
                        <div>
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                            <p className="text-xl leading-[1.3] tracking-[-0.01em] font-serif tracking-[-0.05em]">
                              Playfair Display
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4>Headlines &amp;Buttons</h4>
                          <div className="opacity-50">
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Type:</strong>
                              Sans Serif
                            </div>
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Weights:</strong>
                              400, 500
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                      <div className="overflow-hidden">
                        <div>
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                            <p className="text-xl leading-[1.3] tracking-[-0.01em] font-sans tracking-normal">
                              Manrope
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4>Paragraph &amp;Text</h4>
                          <div className="opacity-50">
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Type:</strong>
                              Sans Serif
                            </div>
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Weights:</strong>
                              400
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                      <div className="overflow-hidden">
                        <div>
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                            <p className="text-xl leading-[1.3] tracking-[-0.01em] font-mono">
                              Cutive Mono
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4>Headlines &amp;Links</h4>
                          <div className="opacity-50">
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Type:</strong>
                              Mono
                            </div>
                            <div className="text-sm leading-[1.4] tracking-[-0.005em] font-mono">
                              <strong>Weights:</strong>
                              400
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 mt-24 flex items-center gap-4">
                    <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Headings</h3>
                    <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                  </div>
                  <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                    <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%]">
                      <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              H1 Headings
                            </div>
                          </div>
                          <h1>
                            Htlm
                            <br />
                          </h1>
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              H2 Headings
                            </div>
                          </div>
                          <h2>Htlm</h2>
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              H3 Headings
                            </div>
                          </div>
                          <h3>Htlm</h3>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              H4 Headings
                            </div>
                          </div>
                          <h4>Htlm</h4>
                        </div>
                      </div>
                      <div>
                        <h4>HTML Headings Tags</h4>
                        <p className="text-sm leading-[1.4] tracking-[-0.005em] opacity-50">
                          HTML tags define default Heading styles.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%]">
                      <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">h1</div>
                          </div>
                          <div className="my-[10px] font-serif text-[clamp(3.5rem,8vw,6rem)] font-normal leading-none tracking-[-0.075em]">Class</div>
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">h2</div>
                          </div>
                          <div className="mb-2 mt-3 font-serif text-[2.5rem] font-medium leading-[1.1] tracking-[-0.035em]">Class</div>
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">h3</div>
                          </div>
                          <div className="mb-2 mt-4 font-mono text-2xl leading-none tracking-[-0.066em] transition-colors">Class</div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">h4</div>
                          </div>
                          <div className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em]">Class</div>
                        </div>
                      </div>
                      <div>
                        <h4>Heading Classes</h4>
                        <p className="text-sm leading-[1.4] tracking-[-0.005em] opacity-50">
                          Heading classes when typography style doesn &#x27;t
                          match the default HTML tag.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 mt-24 flex items-center gap-4">
                    <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Body</h3>
                    <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                  </div>
                  <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                    <div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-0">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              paragraph
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-0">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              All Unordered Lists
                            </div>
                          </div>
                          <ul role="list">
                            <li>Example Unordered List</li>
                            <li>Example Unordered List</li>
                          </ul>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-0">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              All Ordered Lists
                            </div>
                          </div>
                          <ol role="list">
                            <li>Example Ordered List</li>
                            <li>Example Ordered List</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>Text HTML Tags</h4>
                    <p className="text-sm leading-[1.4] tracking-[-0.005em] text-[var(--ink-muted)] mb-12">
                      HTML tags define default text styles.
                    </p>
                  </div>
                  <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                    <div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-4">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Paragraph 1.5rem
                            </div>
                          </div>
                          <p className="text-2xl leading-[1.35] tracking-[-0.01em]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-4">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Paragraph 1.25rem
                            </div>
                          </div>
                          <p className="text-xl leading-[1.3] tracking-[-0.01em]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-0">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Paragraph 0.9rem
                            </div>
                          </div>
                          <p className="text-sm leading-[1.4] tracking-[-0.005em]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] md:flex-none md:basis-[100%] md:max-w-[100%] mb-0">
                          <div className="mb-4">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Eyebrow
                            </div>
                          </div>
                          <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">Lorem Ipsum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                      <div className="mb-4">
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                          Blog Rich Text
                        </div>
                      </div>
                      <div className="space-y-4 [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--control-border-soft)] [&_blockquote]:pl-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <blockquote>Block quote</blockquote>
                        <p>Ordered list</p>
                        <ol role="list">
                          <li>Item 1</li>
                          <li>Item 2</li>
                          <li>Item 3</li>
                        </ol>
                        <p>Unordered list</p>
                        <ul role="list">
                          <li>Item A</li>
                          <li>Item B</li>
                          <li>Item C</li>
                        </ul>
                        <p>
                          <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">
                            Text link
                          </a>
                        </p>
                        <p>
                          <strong>Bold text</strong>
                        </p>
                        <p>
                          <em>Emphasis</em>
                        </p>
                        <p>
                          <sup>Superscript</sup>
                        </p>
                        <p>
                          <sub>Subscript</sub>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>Text Styles</h4>
                    <p className="text-sm leading-[1.4] tracking-[-0.005em] text-[var(--ink-muted)]">
                      Text sizes classes when typography size doesn &#x27;t
                      match the default HTML tag.
                    </p>
                  </div>
                  <h4>Rich Text</h4>
                </section>
                <section id="color" className="relative py-24">
                  <div>
                    <h2 className="mt-0">Colors</h2>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                        Color backgrounds
                      </h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#dfcccc]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Red</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#972E1d</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Red
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#d0d8c0]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Green</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#565A56</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Green
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#ebe9d7]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Yellow</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#929692</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Yellow
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#c3c0d8]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Purple</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#F5F6F5</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Purple
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#c0d2d8]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Blue</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#F5F6F5</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Blue
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-[#262626] text-white"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">Black</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#050501</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG Black
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[100%] lg:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 min-h-60 bg-white border border-[var(--control-border-soft)]"></div>
                          </div>
                          <div>
                            <h4 className="mb-0">White</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">white</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U BG White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[100%] lg:max-w-[100%]">
                        <div>
                          <h4>Color Swatches</h4>
                          <p className="text-sm leading-[1.4] tracking-[-0.005em] text-[var(--ink-muted)]">
                            Easily customize colors using variables. To change a
                            container &#x27;s background color, simply apply the
                            class u-bg-&#x27;yourcolor &#x27;.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Text</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[100%] md:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="font-serif text-[clamp(6rem,16vw,12rem)] leading-none">Aa</div>
                          <div>
                            <h4 className="mb-0">Text Black</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">#1d1c1a</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U Text Black
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[100%] md:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="bg-[#262626] text-white rounded-2xl">
                            <div className="font-serif text-[clamp(6rem,16vw,12rem)] leading-none text-white">
                              Aa
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-0">Text White</h4>
                            <div className="mb-2 font-mono text-[0.8rem] font-extralight leading-normal tracking-[-0.015em]">white</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U Text White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[100%] lg:max-w-[100%]">
                        <div>
                          <h4>Text Color</h4>
                          <p className="text-sm leading-[1.4] tracking-[-0.005em] text-[var(--ink-muted)]">
                            To change text color, simply apply the class
                            u-bg-&#x27;yourcolor &#x27;to a container or text
                            element.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="components" className="relative py-24">
                  <div>
                    <h2 className="mt-0">Components</h2>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Button</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 items-center">
                            <a href="#">Text</a>
                          </div>
                          <div>
                            <h4>Text Link</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white bg-[#d13591]">
                              All Links
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%] mb-16">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 items-center">
                            <a href="#" className="inline-block cursor-pointer rounded-full bg-[var(--black)] px-4 py-[0.66em] font-mono text-base leading-none text-[var(--white)] transition-opacity hover:opacity-50">
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Default</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Button
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 items-center">
                            <a
                              href="#"
                              className="inline-flex items-center gap-4 rounded-none bg-transparent px-0 py-[0.33em] font-mono text-base leading-none transition-opacity hover:opacity-50 text-[var(--black)]"
                            >
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Secondary</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Button
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              CC Secondary
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 bg-[#262626] text-white items-center">
                            <a href="#" className="text-white">
                              Text
                            </a>
                          </div>
                          <div>
                            <h4>Text Link Light</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              U Text White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 bg-[#262626] text-white items-center">
                            <a href="#" className="inline-block cursor-pointer rounded-full px-4 py-[0.66em] font-mono text-base leading-none transition-opacity hover:opacity-50 bg-[#fbf7f1] text-[#313e34]">
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Default White</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Button
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              CC White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="overflow-hidden">
                          <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10 bg-[#262626] text-white items-center">
                            <a
                              href="#"
                              className="inline-flex items-center gap-4 rounded-none bg-transparent px-0 py-[0.33em] font-mono text-base leading-none transition-opacity hover:opacity-50 text-white"
                            >
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Secondary White</h4>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Button
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              CC Secondary
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Form</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[100%] lg:max-w-[100%]">
                        <div>
                          <div
                            // bind="8ae90247-07e5-d85d-2645-c6069f11508a"
                            className="mb-[15px]"
                          >
                            <form
                              id="styles_form-block"
                              name="wf-form-Message"
                              data-name="Message"
                              method="get"
                              className="grid grid-cols-1 gap-10 md:grid-cols-2"
                              data-wf-page-id="65244602a353a877a56ae2c9"
                              data-wf-element-id="fff66d97-123c-e63d-a8ee-f13ae77a8ec8"
                            >
                              <div>
                                <div className="flex justify-between gap-x-10 gap-y-0 mb-4">
                                  <div className="w-full max-sm:mb-0">
                                    <label
                                      htmlFor="styles_contact_name"
                                      className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                    >
                                      First Name:
                                    </label>
                                    <input
                                      className="mb-1 block min-h-10 w-full rounded-full border border-transparent bg-[var(--black-5)] px-4 py-5 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                      maxLength={256}
                                      name="First-name"
                                      data-name="First Name"
                                      placeholder="What is your name ?"
                                      type="text"
                                      id="styles_contact_name"
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label
                                      htmlFor="styles_contact_last-name"
                                      className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                    >
                                      Last Name:
                                    </label>
                                    <input
                                      className="mb-1 block min-h-10 w-full rounded-full border border-transparent bg-[var(--black-5)] px-4 py-5 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                      maxLength={256}
                                      name="Last-Name"
                                      data-name="Last Name"
                                      placeholder="What is your last name ?"
                                      type="email"
                                      id="styles_contact_last-name"
                                    />
                                  </div>
                                </div>
                                <div className="flex justify-between gap-x-10 gap-y-0 mb-4 max-sm:flex-col">
                                  <div className="w-full max-sm:mb-0">
                                    <label
                                      htmlFor="styles_contact_phone"
                                      className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                    >
                                      Phone Number:
                                    </label>
                                    <input
                                      className="mb-1 block min-h-10 w-full rounded-full border border-transparent bg-[var(--black-5)] px-4 py-5 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                      maxLength={256}
                                      name="Phone-Number"
                                      data-name="Phone Number"
                                      placeholder="What is your phone number ?"
                                      type="number"
                                      id="styles_contact_phone"
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label
                                      htmlFor="styles_contact_email"
                                      className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                    >
                                      Email Address:
                                    </label>
                                    <input
                                      className="mb-1 block min-h-10 w-full rounded-full border border-transparent bg-[var(--black-5)] px-4 py-5 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                      maxLength={256}
                                      name="Email"
                                      data-name="Email"
                                      placeholder="What is your email address ?"
                                      type="email"
                                      id="styles_contact_email"
                                    />
                                  </div>
                                </div>
                                <div className="flex justify-between gap-x-10 gap-y-0">
                                  <div className="w-full">
                                    <label
                                      htmlFor="styles_contact_subject"
                                      className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                    >
                                      Subject:
                                    </label>
                                    <input
                                      className="mb-1 block min-h-10 w-full rounded-full border border-transparent bg-[var(--black-5)] px-4 py-5 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                      maxLength={256}
                                      name="Subject"
                                      data-name="Subject"
                                      placeholder="What is the nature of your inquiry ?"
                                      type="text"
                                      id="styles_contact_subject"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-between">
                                <label
                                  htmlFor="styles_contact_message"
                                  className="my-2.5 block font-mono text-[1.1rem] leading-none tracking-[-0.05em] !mb-1.5 !mt-0 !text-sm !tracking-[-0.025em] text-[var(--ink-muted)]"
                                >
                                  Message:
                                </label>
                                <textarea
                                  id="styles_contact_message"
                                  name="Message"
                                  maxLength={5000}
                                  data-name="Message"
                                  placeholder="Your message ..."
                                  className="mb-4 block min-h-36 w-full rounded-2xl border border-transparent bg-[var(--black-5)] p-4 text-base font-medium text-[var(--black)] transition placeholder:text-[var(--control-muted)] hover:border-[var(--control-border-soft)] focus:border-[var(--control-border-soft)] focus:bg-[var(--control-focus)] focus:outline-none"
                                ></textarea>
                                <input
                                  type="submit"
                                  data-wait="Please wait..."
                                  className="inline-block cursor-pointer rounded-full bg-[var(--black)] px-4 py-[0.66em] font-mono text-base leading-none text-[var(--white)] transition-opacity hover:opacity-50"
                                  value="Submit"
                                />
                              </div>
                            </form>
                            <div className="hidden bg-[var(--success-bg)] p-5 text-center text-[var(--success-foreground)]">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="mt-2.5 hidden bg-[var(--danger-bg)] p-2.5 text-[var(--danger-foreground)]">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Card</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="relative mb-4 flex flex-1 flex-col justify-start overflow-hidden rounded-2xl bg-[var(--black-5)] p-6">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                              <img
                                src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg"
                                loading="lazy"
                                sizes="100vw"
                                srcSet="
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-500.jpeg   500w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-800.jpeg   800w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1080.jpeg 1080w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1600.jpeg 1600w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg         2000w
                                "
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3>Default</h3>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] md:flex-none md:basis-[50%] md:max-w-[50%] sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                        <div className="relative mb-4 flex flex-1 flex-col justify-start overflow-hidden rounded-2xl bg-[var(--black-5)] p-6 text-white bg-[#262626]">
                          <div>
                            <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                              <img
                                src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg"
                                loading="lazy"
                                sizes="100vw"
                                srcSet="
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-500.jpeg   500w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-800.jpeg   800w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1080.jpeg 1080w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1600.jpeg 1600w,
                                  https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg         2000w
                                "
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3>Default</h3>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="utilities" className="relative py-24">
                  <div>
                    <h2 className="mt-0">Utilities</h2>
                    <p>
                      Utilities classes use a &#x27;U &#x27;prefix so they are
                      quickly identifiable.
                    </p>
                    <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                      {/* U {Class Name} */}
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Margin</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Top</h4>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mt-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Top 0
                                  </div>
                                  <div className="mt-4">
                                    margin-top: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mt-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Top 1em
                                  </div>
                                  <div className="mt-4">
                                    margin-top: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mt-8">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Top 2em
                                  </div>
                                  <div className="mt-4">
                                    margin-top: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mt-12">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Top 3em
                                  </div>
                                  <div className="mt-4">
                                    margin-top: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mt-auto">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Top Auto
                                  </div>
                                  <div className="mt-4">
                                    margin-top: auto;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Bottom</h4>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mb-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Bottom 0
                                  </div>
                                  <div className="mt-4">
                                    margin-bottom: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mb-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Bottom 1em
                                  </div>
                                  <div className="mt-4">
                                    margin-bottom: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mb-8">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Bottom 2em
                                  </div>
                                  <div className="mt-4">
                                    margin-bottom: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mb-12">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Bottom 3em
                                  </div>
                                  <div className="mt-4">
                                    margin-bottom: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Other</h4>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="m-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin 0
                                  </div>
                                  <div className="mt-4">
                                    margin: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-center mb-0">
                              <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[83.3333%] lg:max-w-[83.3333%] mb-0">
                                <div className="mx-auto">
                                  <div className="">
                                    <div className="rounded-2xl bg-[#0073e61a] p-5">
                                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                        U Margin Lateral Auto
                                      </div>
                                      <div className="mt-4">
                                        margin: 0 auto; (centers element))
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="mr-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Right 1em
                                  </div>
                                  <div className="mt-4">
                                    margin-right: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px rounded-2xl bg-[url('/images/bg-margin.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="ml-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Margin Left 1em
                                  </div>
                                  <div className="mt-4">
                                    margin-left: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Padding</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Top</h4>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pt-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Top 0
                                  </div>
                                  <div className="mt-4">
                                    padding-top: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pt-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Top 1em
                                  </div>
                                  <div className="mt-4">
                                    padding-top: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pt-8">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Top 2em
                                  </div>
                                  <div className="mt-4">
                                    padding-top: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pt-12">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Top 3em
                                  </div>
                                  <div className="mt-4">
                                    padding-top: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Bottom</h4>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pb-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Bottom 0
                                  </div>
                                  <div className="mt-4">
                                    padding-bottom: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pb-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Bottom 1em
                                  </div>
                                  <div className="mt-4">
                                    padding-bottom: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pb-8">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Bottom 2em
                                  </div>
                                  <div className="mt-4">
                                    padding-bottom: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="pb-12">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding Bottom 3em
                                  </div>
                                  <div className="mt-4">
                                    padding-bottom: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div>
                          <h4>Other</h4>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="p-0">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding 0
                                  </div>
                                  <div className="mt-4">
                                    padding: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-10 p-px bg-[url('/images/bg-padding.svg')] bg-[length:4px_4px] bg-repeat">
                            <div className="p-4">
                              <div className="">
                                <div className="rounded-2xl bg-[#0073e61a] p-5">
                                  <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                    U Padding 1em
                                  </div>
                                  <div className="mt-4">
                                    padding: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Alignment</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Text Center
                          </div>
                          <div>
                            <div className="text-center">
                              text-align: center;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Text Right
                          </div>
                          <div>
                            <div className="text-right">
                              text-align: right;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Overflow</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Overflow Hidden
                          </div>
                          <div>
                            <div className="overflow-hidden">
                              overflow: hidden;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Overflow Visible
                          </div>
                          <div>
                            <div className="overflow-visible">
                              overflow: visible;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                        Display + position
                      </h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Display None
                          </div>
                          <div>
                            <div className="hidden block">
                              display: none;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Display Block
                          </div>
                          <div>
                            <div className="block">
                              display: block;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Display Flex
                          </div>
                          <div>
                            <div className="flex">display: flex;</div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Position Relative
                          </div>
                          <div>
                            <div className="relative">
                              position: relative;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Size</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Width 100
                          </div>
                          <div>
                            <div className="w-full">width: 100%;</div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Height 100
                          </div>
                          <div>
                            <div className="h-full">height: 100%;</div>
                            <div className="h-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Helpers</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Image Cover
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <img
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-500.jpeg   500w,
                                https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-800.jpeg   800w,
                                https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1080.jpeg 1080w,
                                https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash-p-1600.jpeg 1600w,
                                https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg         2000w
                              "
                              src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65244626e53f951c5fd36270_hassaan-qaiser-bKfkhVRAJTQ-unsplash.jpg"
                              loading="lazy"
                              alt=""
                              className="absolute inset-0 size-full object-cover hidden"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Link Cover
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <a
                              href="#"
                              className="absolute inset-0 block size-full hidden inline-block max-w-full"
                            >
                              <div className="sr-only">
                                Open link
                              </div>
                            </a>
                            <div className="h-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Aspect 1x1
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="relative aspect-square w-full overflow-hidden hidden"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Z-Index 1
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="relative z-[1] hidden"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Screen Reader Only
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="sr-only">
                              Screen Reader Only
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%] sm:flex-none sm:basis-[50%] sm:max-w-[50%] flex-none basis-[100%] max-w-[100%]">
                        <div className="relative mb-6 flex min-h-[120px] w-full flex-col items-start justify-center gap-1 rounded-2xl bg-[var(--black-5)] p-10">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            U Border
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="h-px w-full hidden"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="layout" className="relative py-24">
                  <div>
                    <h2 className="mt-0">Layout</h2>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Section</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                      <div className="relative py-24">
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Section</div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Container</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="mx-auto block w-[96%] max-w-[68rem]">
                      <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                        <div className="relative py-24">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                            Container
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 mt-24 flex items-center gap-4">
                      <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">12 Columns Grid</h3>
                      <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                      <div className="mb-8 min-w-0 flex-1 px-2">
                        <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                          <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Column</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          12 Columns Grid - Desktop
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[8.3333%] lg:max-w-[8.3333%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white text-left">
                              Col Large 1
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[91.6667%] lg:max-w-[91.6667%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 11
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[16.6667%] lg:max-w-[16.6667%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 2
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[83.3333%] lg:max-w-[83.3333%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 10
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[25%] lg:max-w-[25%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 3
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[75%] lg:max-w-[75%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 9
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[33.3333%] lg:max-w-[33.3333%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 4
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[66.6667%] lg:max-w-[66.6667%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 8
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[41.6667%] lg:max-w-[41.6667%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 5
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[58.3333%] lg:max-w-[58.3333%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 7
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">col</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 6
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">col</div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 6
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[100%] lg:max-w-[100%]">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large 12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          12 Columns Grid - Tablet
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[8.3333%] md:max-w-[8.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 1
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[91.6667%] md:max-w-[91.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[16.6667%] md:max-w-[16.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 2
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[83.3333%] md:max-w-[83.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[25%] md:max-w-[25%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 3
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[75%] md:max-w-[75%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[33.3333%] md:max-w-[33.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 4
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[66.6667%] md:max-w-[66.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[41.6667%] md:max-w-[41.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 5
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[58.3333%] md:max-w-[58.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[50%] md:max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 6
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[50%] md:max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                          <div className="mb-8 min-w-0 flex-1 px-2 md:flex-none md:basis-[100%] md:max-w-[100%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Medium 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          12 Columns Grid - Mobile Landscape
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[8.3333%] sm:max-w-[8.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 1
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[91.6667%] sm:max-w-[91.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[16.6667%] sm:max-w-[16.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 2
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[83.3333%] sm:max-w-[83.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[25%] sm:max-w-[25%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 3
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[75%] sm:max-w-[75%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[33.3333%] sm:max-w-[33.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 4
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[66.6667%] sm:max-w-[66.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[41.6667%] sm:max-w-[41.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 5
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[58.3333%] sm:max-w-[58.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[50%] sm:max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 6
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[50%] sm:max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                          <div className="mb-8 min-w-0 flex-1 px-2 sm:flex-none sm:basis-[100%] sm:max-w-[100%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col Small 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          12 Columns Grid - Mobile Portrait
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[8.3333%] max-w-[8.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 1
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[91.6667%] max-w-[91.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[16.6667%] max-w-[16.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 2
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[83.3333%] max-w-[83.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[25%] max-w-[25%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 3
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[75%] max-w-[75%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[33.3333%] max-w-[33.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 4
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[66.6667%] max-w-[66.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[41.6667%] max-w-[41.6667%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 5
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[58.3333%] max-w-[58.3333%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[50%] max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 6
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[50%] max-w-[50%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                          <div className="mb-8 min-w-0 flex-1 px-2 flex-none basis-[100%] max-w-[100%]">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Col XSmall 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">Align columns</h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                        Row Align Center
                      </div>
                      <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-center h-full">
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12">
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                        Row Align End
                      </div>
                      <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                        <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-end h-full">
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="mb-8 min-w-0 flex-1 px-2 mb-0">
                            <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                              <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                Column
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          Justify columns
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div>
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                          Row Justify End
                        </div>
                        <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-end">
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[25%] lg:max-w-[25%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                          Row Justify Center
                        </div>
                        <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-center">
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[25%] lg:max-w-[25%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                          Row Justify Around
                        </div>
                        <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-around">
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[25%] lg:max-w-[25%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12">
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                        <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                          Row Justify Between
                        </div>
                        <div className="mt-1 h-[200px] rounded-2xl bg-[var(--black-5)] p-5">
                          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-between">
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[25%] lg:max-w-[25%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="mb-8 min-w-0 flex-1 px-2 lg:flex-none lg:basis-[50%] lg:max-w-[50%]">
                              <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                                <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          Reorder columns
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:order-first">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large First
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 md:order-first">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Medium First
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 sm:order-first">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Small First
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 order-first">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col XSmall First
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch">
                        <div className="mb-8 min-w-0 flex-1 px-2 lg:order-last">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Large Last
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 md:order-last">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Medium Last
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 sm:order-last">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Small Last
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 order-last">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col XSmall Last
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-12 mt-24 flex items-center gap-4">
                        <h3 className="m-0 whitespace-nowrap pr-2 font-mono text-[0.8rem] font-normal uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                          Other columns modifiers
                        </h3>
                        <div className="h-px w-full bg-[var(--control-border-soft)]"></div>
                      </div>
                      <h4>Shrink Column</h4>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mb-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 flex-none">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col Shrink
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4>Gutterless Column</h4>
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">Row</div>
                      <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                        Row No Gutters
                      </div>
                      <div className="-mx-2 -mb-8 flex flex-wrap content-stretch mx-0">
                        <div className="mb-8 min-w-0 flex-1 px-2 px-0">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 px-0">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 px-0">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="mb-8 min-w-0 flex-1 px-2 px-0">
                          <div className="relative rounded-2xl border border-[#0073e6] bg-[#0073e61a] p-4 text-center">
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Column
                            </div>
                            <div className="relative -top-px my-[0.1em] mr-[0.2em] inline-block rounded-[3px] bg-[#0073e6] px-[0.6em] py-[0.08em] font-mono text-xs leading-[1.7] tracking-[-0.025em] text-white">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
