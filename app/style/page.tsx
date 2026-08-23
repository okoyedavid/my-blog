import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide",
  description:
    "ThePost's internal reference for typography, colors, components, utilities and layouts.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <section className="section u-padding-bottom-0">
        <div className="container">
          <div className="row row-align-end">
            <div className="column col-large-7 col-medium-12">
              <h1 className="h1 u-margin-0">Style Guide</h1>
            </div>
            <div className="column">
              <div className="u-display-flex cc-tag-wrap">
                <div>Last updated: Apr 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="style-guide-intro-wrap">
            <p className="paragraph-1-25rem">
              Introducing <em>ThePost</em> , for small publishing businesses.
              Crafted with precision using
              <a
                href="https://nocodesupply.co/mast/docs"
                target="_blank"
                className="text-medium"
              >
                Mast CSS framework ↗️
              </a>
              , this Webflow template offers an efficient solution for creating
              a functional and visually captivating blog website. Designed with
              adaptability in mind, &#x27;ThePost &#x27;boasts a versatile and
              easy-to-edit category color system, allowing you to effortlessly
              align your digital identity with your brand. Elevate your online
              reach and enhance your storytelling capabilities with this
              user-friendly template, tailor-made for the modern publishing
              landscape.
            </p>
          </div>
        </div>
      </section>
      <main id="main" className="page-main">
        <div className="section u-padding-bottom-0 u-padding-top-3em">
          <div className="container">
            <div className="styles__grid">
              <div
                id="w-node-fff66d97-123c-e63d-a8ee-f13ae77a8d20-a56ae2c9"
                className="styles__grid-left"
              >
                <div className="styles__navlink-wrap">
                  <a href="#typography" className="nav-link cc-style-guide">
                    Typography
                  </a>
                  <a href="#color" className="nav-link cc-style-guide">
                    Color
                  </a>
                  <a href="#components" className="nav-link cc-style-guide">
                    Components
                  </a>
                  <a href="#utilities" className="nav-link cc-style-guide">
                    Utilities
                  </a>
                  <a href="#layout" className="nav-link cc-style-guide">
                    Layout
                  </a>
                </div>
              </div>
              <div
                id="w-node-fff66d97-123c-e63d-a8ee-f13ae77a8d30-a56ae2c9"
                className="styles__grid-right"
              >
                <section id="typography" className="section u-padding-top-0">
                  <h2 className="h2 u-margin-top-0">Typography</h2>
                  <div className="styles__subhead-wrap">
                    <h3 className="styles__section-label">Fonts</h3>
                    <div className="u-border u-bg-medium-gray-50"></div>
                  </div>
                  <div className="row">
                    <div className="column col-large-4 col-small-12">
                      <div className="styles__card">
                        <div>
                          <div className="styles__card-preview">
                            <p className="paragraph-1-25rem u-font-playfair">
                              Playfair Display
                            </p>
                          </div>
                        </div>
                        <div className="u-margin-top-1em">
                          <h4>Headlines &amp;Buttons</h4>
                          <div className="u-opacity-50">
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Type:</strong>
                              Sans Serif
                            </div>
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Weights:</strong>
                              400, 500
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column col-large-4 col-small-12">
                      <div className="styles__card">
                        <div>
                          <div className="styles__card-preview">
                            <p className="paragraph-1-25rem u-font-manrope">
                              Manrope
                            </p>
                          </div>
                        </div>
                        <div className="u-margin-top-1em">
                          <h4>Paragraph &amp;Text</h4>
                          <div className="u-opacity-50">
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Type:</strong>
                              Sans Serif
                            </div>
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Weights:</strong>
                              400
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column col-large-4 col-small-12">
                      <div className="styles__card">
                        <div>
                          <div className="styles__card-preview">
                            <p className="paragraph-1-25rem u-font-cutive">
                              Cutive Mono
                            </p>
                          </div>
                        </div>
                        <div className="u-margin-top-1em">
                          <h4>Headlines &amp;Links</h4>
                          <div className="u-opacity-50">
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Type:</strong>
                              Mono
                            </div>
                            <div className="paragraph-0-9rem u-font-cutive">
                              <strong>Weights:</strong>
                              400
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="styles__subhead-wrap">
                    <h3 className="styles__section-label">Headings</h3>
                    <div className="u-border u-bg-medium-gray-50"></div>
                  </div>
                  <div className="row">
                    <div className="column col-large-6 col-medium-12">
                      <div className="styles__card-preview">
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout cc-element">
                              H1 Headings
                            </div>
                          </div>
                          <h1>
                            Htlm
                            <br />
                          </h1>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout cc-element">
                              H2 Headings
                            </div>
                          </div>
                          <h2>Htlm</h2>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout cc-element">
                              H3 Headings
                            </div>
                          </div>
                          <h3>Htlm</h3>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center">
                          <div>
                            <div className="styles__selector-callout cc-element">
                              H4 Headings
                            </div>
                          </div>
                          <h4>Htlm</h4>
                        </div>
                      </div>
                      <div>
                        <h4>HTML Headings Tags</h4>
                        <p className="paragraph-0-9rem u-opacity-50">
                          HTML tags define default Heading styles.
                        </p>
                      </div>
                    </div>
                    <div className="column col-large-6 col-medium-12">
                      <div className="styles__card-preview">
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout">h1</div>
                          </div>
                          <div className="h1">Class</div>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout">h2</div>
                          </div>
                          <div className="h2">Class</div>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center u-margin-bottom-1em">
                          <div>
                            <div className="styles__selector-callout">h3</div>
                          </div>
                          <div className="h3">Class</div>
                        </div>
                        <div className="u-display-flex u-gap-1em u-align-center">
                          <div>
                            <div className="styles__selector-callout">h4</div>
                          </div>
                          <div className="h4">Class</div>
                        </div>
                      </div>
                      <div>
                        <h4>Heading Classes</h4>
                        <p className="paragraph-0-9rem u-opacity-50">
                          Heading classes when typography style doesn &#x27;t
                          match the default HTML tag.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="styles__subhead-wrap">
                    <h3 className="styles__section-label">Body</h3>
                    <div className="u-border u-bg-medium-gray-50"></div>
                  </div>
                  <div className="styles__card-preview">
                    <div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-4 col-medium-12 u-margin-bottom-0">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout cc-element">
                              paragraph
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                        <div className="column col-large-4 col-medium-12 u-margin-bottom-0">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout cc-element">
                              All Unordered Lists
                            </div>
                          </div>
                          <ul role="list">
                            <li>Example Unordered List</li>
                            <li>Example Unordered List</li>
                          </ul>
                        </div>
                        <div className="column col-large-4 col-medium-12 u-margin-bottom-0">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout cc-element">
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
                    <p className="paragraph-0-9rem u-text-medium-gray u-margin-bottom-3em">
                      HTML tags define default text styles.
                    </p>
                  </div>
                  <div className="styles__card-preview">
                    <div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-6 col-medium-12 u-margin-bottom-1em">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout">
                              Paragraph 1.5rem
                            </div>
                          </div>
                          <p className="paragraph-1-5rem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="column col-large-6 col-medium-12 u-margin-bottom-1em">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout">
                              Paragraph 1.25rem
                            </div>
                          </div>
                          <p className="paragraph-1-25rem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="column col-large-6 col-medium-12 u-margin-bottom-0">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout">
                              Paragraph 0.9rem
                            </div>
                          </div>
                          <p className="paragraph-0-9rem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </p>
                        </div>
                        <div className="column col-large-6 col-medium-12 u-margin-bottom-0">
                          <div className="u-margin-bottom-1em">
                            <div className="styles__selector-callout">
                              Eyebrow
                            </div>
                          </div>
                          <div className="eyebrow">Lorem Ipsum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="styles__card-preview">
                      <div className="u-margin-bottom-1em">
                        <div className="styles__selector-callout">
                          Blog Rich Text
                        </div>
                      </div>
                      <div className="blog-rich-text w-richtext">
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
                    <p className="paragraph-0-9rem u-text-medium-gray">
                      Text sizes classes when typography size doesn &#x27;t
                      match the default HTML tag.
                    </p>
                  </div>
                  <h4>Rich Text</h4>
                </section>
                <section id="color" className="section">
                  <div>
                    <h2 className="u-margin-top-0">Colors</h2>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">
                        Color backgrounds
                      </h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-red"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Red</h4>
                            <div className="eyebrow">#972E1d</div>
                            <div className="styles__selector-callout">
                              U BG Red
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-green"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Green</h4>
                            <div className="eyebrow">#565A56</div>
                            <div className="styles__selector-callout">
                              U BG Green
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-yellow"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Yellow</h4>
                            <div className="eyebrow">#929692</div>
                            <div className="styles__selector-callout">
                              U BG Yellow
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-purple"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Purple</h4>
                            <div className="eyebrow">#F5F6F5</div>
                            <div className="styles__selector-callout">
                              U BG Purple
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-blue"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Blue</h4>
                            <div className="eyebrow">#F5F6F5</div>
                            <div className="styles__selector-callout">
                              U BG Blue
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-black"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Black</h4>
                            <div className="eyebrow">#050501</div>
                            <div className="styles__selector-callout">
                              U BG Black
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-12">
                        <div className="styles__card">
                          <div>
                            <div className="styles__card-preview color-card u-bg-white u-border"></div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">White</h4>
                            <div className="eyebrow">white</div>
                            <div className="styles__selector-callout">
                              U BG White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-12">
                        <div>
                          <h4>Color Swatches</h4>
                          <p className="paragraph-0-9rem u-text-medium-gray">
                            Easily customize colors using variables. To change a
                            container &#x27;s background color, simply apply the
                            class u-bg-&#x27;yourcolor &#x27;.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Text</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-medium-12">
                        <div className="styles__card">
                          <div className="styles__huge-text">Aa</div>
                          <div>
                            <h4 className="u-margin-bottom-0">Text Black</h4>
                            <div className="eyebrow">#1d1c1a</div>
                            <div className="styles__selector-callout">
                              U Text Black
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-12">
                        <div className="styles__card">
                          <div className="u-bg-black u-radius-16">
                            <div className="styles__huge-text u-text-white">
                              Aa
                            </div>
                          </div>
                          <div>
                            <h4 className="u-margin-bottom-0">Text White</h4>
                            <div className="eyebrow">white</div>
                            <div className="styles__selector-callout">
                              U Text White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-12">
                        <div>
                          <h4>Text Color</h4>
                          <p className="paragraph-0-9rem u-text-medium-gray">
                            To change text color, simply apply the class
                            u-bg-&#x27;yourcolor &#x27;to a container or text
                            element.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="components" className="section">
                  <div>
                    <h2 className="u-margin-top-0">Components</h2>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Button</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="styles__card">
                          <div className="styles__card-preview u-align-center">
                            <a href="#">Text</a>
                          </div>
                          <div>
                            <h4>Text Link</h4>
                            <div className="styles__selector-callout cc-element">
                              All Links
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12 u-margin-bottom-4em">
                        <div className="styles__card">
                          <div className="styles__card-preview u-align-center">
                            <a href="#" className="button w-button">
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Default</h4>
                            <div className="styles__selector-callout">
                              Button
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="styles__card">
                          <div className="styles__card-preview u-align-center">
                            <a
                              href="#"
                              className="button cc-secondary w-button"
                            >
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Secondary</h4>
                            <div className="styles__selector-callout">
                              Button
                            </div>
                            <div className="styles__selector-callout">
                              CC Secondary
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="styles__card">
                          <div className="styles__card-preview u-bg-black u-align-center">
                            <a href="#" className="u-text-white">
                              Text
                            </a>
                          </div>
                          <div>
                            <h4>Text Link Light</h4>
                            <div className="styles__selector-callout">
                              U Text White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="styles__card">
                          <div className="styles__card-preview u-bg-black u-align-center">
                            <a href="#" className="button cc-white w-button">
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Default White</h4>
                            <div className="styles__selector-callout">
                              Button
                            </div>
                            <div className="styles__selector-callout">
                              CC White
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="styles__card">
                          <div className="styles__card-preview u-bg-black u-align-center">
                            <a
                              href="#"
                              className="button cc-secondary cc-white w-button"
                            >
                              Button
                            </a>
                          </div>
                          <div>
                            <h4>Secondary White</h4>
                            <div className="styles__selector-callout">
                              Button
                            </div>
                            <div className="styles__selector-callout">
                              CC Secondary
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Form</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-12">
                        <div>
                          <div
                            // bind="8ae90247-07e5-d85d-2645-c6069f11508a"
                            className="w-form"
                          >
                            <form
                              id="styles_form-block"
                              name="wf-form-Message"
                              data-name="Message"
                              method="get"
                              className="form-contact"
                              data-wf-page-id="65244602a353a877a56ae2c9"
                              data-wf-element-id="fff66d97-123c-e63d-a8ee-f13ae77a8ec8"
                            >
                              <div>
                                <div className="u-display-flex cc-space-between u-gap-40px u-margin-bottom-1em">
                                  <div className="u-width-100 u-xsmall-margin-bottom-0">
                                    <label
                                      htmlFor="styles_contact_name"
                                      className="h4 cc-label"
                                    >
                                      First Name:
                                    </label>
                                    <input
                                      className="text-field w-input"
                                      maxLength={256}
                                      name="First-name"
                                      data-name="First Name"
                                      placeholder="What is your name ?"
                                      type="text"
                                      id="styles_contact_name"
                                    />
                                  </div>
                                  <div className="u-width-100">
                                    <label
                                      htmlFor="styles_contact_last-name"
                                      className="h4 cc-label"
                                    >
                                      Last Name:
                                    </label>
                                    <input
                                      className="text-field w-input"
                                      maxLength={256}
                                      name="Last-Name"
                                      data-name="Last Name"
                                      placeholder="What is your last name ?"
                                      type="email"
                                      id="styles_contact_last-name"
                                    />
                                  </div>
                                </div>
                                <div className="u-display-flex cc-space-between u-gap-40px u-margin-bottom-1em u-xsmall-vertical">
                                  <div className="u-width-100 u-xsmall-margin-bottom-0">
                                    <label
                                      htmlFor="styles_contact_phone"
                                      className="h4 cc-label"
                                    >
                                      Phone Number:
                                    </label>
                                    <input
                                      className="text-field w-input"
                                      maxLength={256}
                                      name="Phone-Number"
                                      data-name="Phone Number"
                                      placeholder="What is your phone number ?"
                                      type="number"
                                      id="styles_contact_phone"
                                    />
                                  </div>
                                  <div className="u-width-100">
                                    <label
                                      htmlFor="styles_contact_email"
                                      className="h4 cc-label"
                                    >
                                      Email Address:
                                    </label>
                                    <input
                                      className="text-field w-input"
                                      maxLength={256}
                                      name="Email"
                                      data-name="Email"
                                      placeholder="What is your email address ?"
                                      type="email"
                                      id="styles_contact_email"
                                    />
                                  </div>
                                </div>
                                <div className="u-display-flex cc-space-between u-gap-40px">
                                  <div className="u-width-100">
                                    <label
                                      htmlFor="styles_contact_subject"
                                      className="h4 cc-label"
                                    >
                                      Subject:
                                    </label>
                                    <input
                                      className="text-field w-input"
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
                              <div className="u-display-flex u-vertical u-align-left u-space-between">
                                <label
                                  htmlFor="styles_contact_message"
                                  className="h4 cc-label"
                                >
                                  Message:
                                </label>
                                <textarea
                                  id="styles_contact_message"
                                  name="Message"
                                  maxLength={5000}
                                  data-name="Message"
                                  placeholder="Your message ..."
                                  className="text-area w-input"
                                ></textarea>
                                <input
                                  type="submit"
                                  data-wait="Please wait..."
                                  className="button w-button"
                                  value="Submit"
                                />
                              </div>
                            </form>
                            <div className="w-form-done">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Card</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="card">
                          <div>
                            <div className="styles__card-preview">
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
                                className="u-image-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3>Default</h3>
                            <p className="u-margin-bottom-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros elementum
                              tristique.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-medium-6 col-small-12">
                        <div className="card u-text-white u-bg-black">
                          <div>
                            <div className="styles__card-preview">
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
                                className="u-image-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3>Default</h3>
                            <p className="u-margin-bottom-0">
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
                <section id="utilities" className="section">
                  <div>
                    <h2 className="u-margin-top-0">Utilities</h2>
                    <p>
                      Utilities classes use a &#x27;U &#x27;prefix so they are
                      quickly identifiable.
                    </p>
                    <div className="styles__selector-callout">
                      {/* U {Class Name} */}
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Margin</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Top</h4>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-top-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Top 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-top: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-top-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Top 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-top: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-top-2em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Top 2em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-top: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-top-3em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Top 3em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-top: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-top-auto">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Top Auto
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-top: auto;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Bottom</h4>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-bottom-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Bottom 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-bottom: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-bottom-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Bottom 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-bottom: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-bottom-2em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Bottom 2em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-bottom: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-bottom-3em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Bottom 3em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-bottom: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Other</h4>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="row row-justify-center u-margin-bottom-0">
                              <div className="column col-large-10 u-margin-bottom-0">
                                <div className="u-margin-lateral-auto">
                                  <div className="page-wrapper">
                                    <div className="styles_utility-card">
                                      <div className="styles__selector-callout">
                                        U Margin Lateral Auto
                                      </div>
                                      <div className="u-margin-top-1em">
                                        margin: 0 auto; (centers element))
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-right-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Right 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-right: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-margin">
                            <div className="u-margin-left-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Margin Left 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    margin-left: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Padding</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Top</h4>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-top-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Top 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-top: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-top-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Top 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-top: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-top-2em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Top 2em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-top: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-top-3em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Top 3em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-top: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Bottom</h4>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-bottom-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Bottom 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-bottom: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-bottom-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Bottom 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-bottom: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-bottom-2em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Bottom 2em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-bottom: 2em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-bottom-3em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding Bottom 3em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding-bottom: 3em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div>
                          <h4>Other</h4>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-0">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding 0
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding: 0;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles__utility-wrap cc-padding">
                            <div className="u-padding-1em">
                              <div className="page-wrapper">
                                <div className="styles_utility-card">
                                  <div className="styles__selector-callout">
                                    U Padding 1em
                                  </div>
                                  <div className="u-margin-top-1em">
                                    padding: 1em;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Alignment</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Text Center
                          </div>
                          <div>
                            <div className="u-text-center">
                              text-align: center;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Text Right
                          </div>
                          <div>
                            <div className="u-text-right">
                              text-align: right;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Overflow</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Overflow Hidden
                          </div>
                          <div>
                            <div className="u-overflow-hidden">
                              overflow: hidden;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Overflow Visible
                          </div>
                          <div>
                            <div className="u-overflow-visible">
                              overflow: visible;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">
                        Display + position
                      </h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Display None
                          </div>
                          <div>
                            <div className="u-display-none u-display-block">
                              display: none;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Display Block
                          </div>
                          <div>
                            <div className="u-display-block">
                              display: block;
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Display Flex
                          </div>
                          <div>
                            <div className="u-display-flex">display: flex;</div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Position Relative
                          </div>
                          <div>
                            <div className="u-position-relative">
                              position: relative;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Size</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Width 100
                          </div>
                          <div>
                            <div className="u-width-100">width: 100%;</div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Height 100
                          </div>
                          <div>
                            <div className="u-height-100">height: 100%;</div>
                            <div className="u-height-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Helpers</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row">
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
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
                              className="u-image-cover u-display-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Link Cover
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <a
                              href="#"
                              className="u-link-cover u-display-none w-inline-block"
                            >
                              <div className="u-screen-reader-only">
                                Open link
                              </div>
                            </a>
                            <div className="u-height-100"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Aspect 1x1
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="u-aspect-1x1 u-display-none"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Z-Index 1
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="u-z-index-1 u-display-none"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Screen Reader Only
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="u-screen-reader-only">
                              Screen Reader Only
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column col-large-4 col-small-6 col-xsmall-12">
                        <div className="styles__card-preview">
                          <div className="styles__selector-callout">
                            U Border
                          </div>
                          <div>
                            <div>
                              <em>Multiple properties</em>
                              <br />
                            </div>
                            <div className="u-border u-display-none"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="layout" className="section">
                  <div>
                    <h2 className="u-margin-top-0">Layout</h2>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Section</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="styles__visual-div">
                      <div className="section">
                        <div className="styles__selector-callout">Section</div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">Container</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="container">
                      <div className="styles__visual-div">
                        <div className="section">
                          <div className="styles__selector-callout">
                            Container
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__subhead-wrap">
                      <h3 className="styles__section-label">12 Columns Grid</h3>
                      <div className="u-border u-bg-medium-gray-50"></div>
                    </div>
                    <div className="row u-margin-bottom-0">
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="row u-margin-bottom-0">
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="row u-margin-bottom-0">
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column">
                        <div className="styles__visual-div">
                          <div className="styles__selector-callout">Column</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          12 Columns Grid - Desktop
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-1">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout u-text-left">
                              Col Large 1
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-11">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 11
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-2">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 2
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-10">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 10
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-3">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 3
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-9">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 9
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-4">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 4
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-8">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 8
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-5">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 5
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-7">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 7
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-6">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">col</div>
                            <div className="styles__selector-callout">
                              Col Large 6
                            </div>
                          </div>
                        </div>
                        <div className="column col-large-6">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">col</div>
                            <div className="styles__selector-callout">
                              Col Large 6
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="column col-large-12">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large 12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          12 Columns Grid - Tablet
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-1">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 1
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-11">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-2">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 2
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-10">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-3">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 3
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-9">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-4">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 4
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-8">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-5">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 5
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-7">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-medium-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 6
                              </div>
                            </div>
                          </div>
                          <div className="column col-medium-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column col-medium-12">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Medium 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          12 Columns Grid - Mobile Landscape
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-1">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 1
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-11">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-2">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 2
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-10">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-3">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 3
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-9">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-4">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 4
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-8">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-5">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 5
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-7">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-small-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 6
                              </div>
                            </div>
                          </div>
                          <div className="column col-small-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column col-small-12">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col Small 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          12 Columns Grid - Mobile Portrait
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-1">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 1
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-11">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-2">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 2
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-10">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 10
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-3">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 3
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-9">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 9
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-4">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 4
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-8">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 8
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-5">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 5
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-7">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 7
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row u-margin-bottom-0">
                          <div className="column col-xsmall-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 6
                              </div>
                            </div>
                          </div>
                          <div className="column col-xsmall-6">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 6
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="column col-xsmall-12">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                              <div className="styles__selector-callout">
                                Col XSmall 12
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">Align columns</h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div className="styles__selector-callout">Row</div>
                      <div className="styles__selector-callout">
                        Row Align Center
                      </div>
                      <div className="styles__row-example">
                        <div className="row row-align-center u-height-100">
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-margin-top-3em">
                      <div className="styles__selector-callout">Row</div>
                      <div className="styles__selector-callout">
                        Row Align End
                      </div>
                      <div className="styles__row-example">
                        <div className="row row-align-end u-height-100">
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                          <div className="column u-margin-bottom-0">
                            <div className="styles__visual-div">
                              <div className="styles__selector-callout">
                                Column
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          Justify columns
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div>
                        <div className="styles__selector-callout">Row</div>
                        <div className="styles__selector-callout">
                          Row Justify End
                        </div>
                        <div className="styles__row-example">
                          <div className="row row-justify-end">
                            <div className="column col-large-3">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="column col-large-6">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-margin-top-3em">
                        <div className="styles__selector-callout">Row</div>
                        <div className="styles__selector-callout">
                          Row Justify Center
                        </div>
                        <div className="styles__row-example">
                          <div className="row row-justify-center">
                            <div className="column col-large-3">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="column col-large-6">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-margin-top-3em">
                        <div className="styles__selector-callout">Row</div>
                        <div className="styles__selector-callout">
                          Row Justify Around
                        </div>
                        <div className="styles__row-example">
                          <div className="row row-justify-around">
                            <div className="column col-large-3">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="column col-large-6">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="u-margin-top-3em">
                        <div className="styles__selector-callout">Row</div>
                        <div className="styles__selector-callout">
                          Row Justify Between
                        </div>
                        <div className="styles__row-example">
                          <div className="row row-justify-between">
                            <div className="column col-large-3">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                            <div className="column col-large-6">
                              <div className="styles__visual-div">
                                <div className="styles__selector-callout">
                                  Column
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          Reorder columns
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-large-first">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large First
                            </div>
                          </div>
                        </div>
                        <div className="column col-medium-first">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Medium First
                            </div>
                          </div>
                        </div>
                        <div className="column col-small-first">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Small First
                            </div>
                          </div>
                        </div>
                        <div className="column col-xsmall-first">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col XSmall First
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="column col-large-last">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Large Last
                            </div>
                          </div>
                        </div>
                        <div className="column col-medium-last">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Medium Last
                            </div>
                          </div>
                        </div>
                        <div className="column col-small-last">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Small Last
                            </div>
                          </div>
                        </div>
                        <div className="column col-xsmall-last">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col XSmall Last
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="styles__subhead-wrap">
                        <h3 className="styles__section-label">
                          Other columns modifiers
                        </h3>
                        <div className="u-border u-bg-medium-gray-50"></div>
                      </div>
                      <h4>Shrink Column</h4>
                      <div className="row u-margin-bottom-0">
                        <div className="column col-shrink">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col Shrink
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4>Gutterless Column</h4>
                      <div className="styles__selector-callout">Row</div>
                      <div className="styles__selector-callout">
                        Row No Gutters
                      </div>
                      <div className="row row-no-gutters">
                        <div className="column col-no-gutters">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="column col-no-gutters">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="column col-no-gutters">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
                              Col No Gutters
                            </div>
                          </div>
                        </div>
                        <div className="column col-no-gutters">
                          <div className="styles__visual-div">
                            <div className="styles__selector-callout">
                              Column
                            </div>
                            <div className="styles__selector-callout">
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
