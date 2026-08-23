import Link from "next/link";

export default function Footer() {
  return (
    <section className="section cc-footer">
      <div className="container">
        <div className="row cc-footer-top">
          <div className="column">
            <div className="u-display-flex cc-footer-left-wrap">
              <div className="u-display-flex u-vertical">
                <Link
                  href="/"
                  aria-current="page"
                  className="logo-wrap cc-footer w-nav-brand w--current"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/6549aa4c8294cf1406cfc23f_The%20Post.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                  <div className="u-screen-reader-only">Home page</div>
                </Link>
                <a
                  href="https://www.emicorneau.com/"
                  target="_blank"
                  className="text-link w-inline-block"
                >
                  <div className="paragraph-0-9rem cc-emicorneau-link">
                    by emicorneau
                  </div>
                </a>
              </div>
              <div className="u-display-flex cc-footer-link-list-wrap">
                <ul role="list" className="nav-list">
                  <li className="nav-list-item">
                    <Link
                      href="/"
                      aria-current="page"
                      className="u-font-cutive w--current"
                    >
                      Home
                    </Link>
                    <div className="text-link-arrow">→</div>
                  </li>
                  <li className="nav-list-item">
                    <Link href="/about-us" className="u-font-cutive">
                      About Us
                    </Link>
                    <div className="text-link-arrow">→</div>
                  </li>
                  <li className="nav-list-item">
                    <Link href="/contact-us" className="u-font-cutive">
                      Contact
                    </Link>
                    <div className="text-link-arrow">→</div>
                  </li>
                </ul>
                <div className="nav-list u-xsmall-hide">
                  <div className="nav-list-item">
                    <Link href="/all-blogs" className="u-font-cutive">
                      All Blogs
                    </Link>
                    <div className="text-link-arrow">→</div>
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="nav-list w-dyn-items">
                      <div role="listitem" className="nav-list-item w-dyn-item">
                        <Link
                          href="/tag/most-popular"
                          className="nav-list-item w-inline-block"
                        >
                          <div className="u-font-cutive">Most Popular</div>
                          <div className="text-link-arrow">→</div>
                        </Link>
                      </div>
                      <div role="listitem" className="nav-list-item w-dyn-item">
                        <Link
                          href="/tag/featured-blogs"
                          className="nav-list-item w-inline-block"
                        >
                          <div className="u-font-cutive">Featured Blogs</div>
                          <div className="text-link-arrow">→</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column col-large-4 col-medium-12 u-medium-last">
            <div className="newsletter-footer-wrap">
              <div className="h2 cc-footer-newsletter">
                Subscribe to our weekly newsletter today
              </div>
              <div className="u-margin-top-1em u-margin-bottom-0 w-form">
                <form
                  id="wf-form-Newsletter-Form"
                  name="wf-form-Newsletter-Form"
                  data-name="Newsletter Form"
                  method="get"
                  className="footer-newsletter-wrap"
                  data-wf-page-id="6524458df9ed19d52963b640"
                  data-wf-element-id="01be6d1d-102d-b0c8-3d0d-69ad6264842a"
                >
                  <div className="u-width-100">
                    <label htmlFor="newsletter_email" className="h4 cc-label">
                      Email Address
                    </label>
                    <input
                      className="text-field u-margin-bottom-1em w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="Your email address..."
                      type="email"
                      id="newsletter_email"
                      required
                    />
                  </div>
                  <div className="u-width-100">
                    <label htmlFor="name" className="h4 cc-label">
                      Full Name
                    </label>
                    <div className="u-display-flex cc-form-submit-wrap">
                      <input
                        className="text-field u-margin-bottom-0 w-input"
                        maxLength={256}
                        name="Full-name"
                        data-name="Full name"
                        placeholder="Your full name..."
                        type="text"
                        id="newsletter_full-name"
                        required
                      />
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        className="button cc-form w-button"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div className="paragraph-1-25rem">
                    Thank you! <br />
                  </div>
                  <div className="paragraph-0-9rem">
                    Your submission has been received!
                  </div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column col-large-4 col-medium-12">
            <div className="footer-category-pill-wrap w-dyn-list">
              <div role="list" className="pill-grid cc-footer w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="u-display-inline-block">
                    <Link
                      //   style="background-color: #c3c0d8"
                      href="/category/business"
                      className="pill cc-footer"
                    >
                      Business
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="u-display-inline-block">
                    <Link
                      //   style="background-color: #ece9d7"
                      href="/category/politics"
                      className="pill cc-footer"
                    >
                      Politics
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="u-display-inline-block">
                    <Link
                      //   style="background-color: #dfcccc"
                      href="/category/sports"
                      className="pill cc-footer"
                    >
                      Sports
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="u-display-inline-block">
                    <Link
                      //   style="background-color: #c0d2d8"
                      href="/category/technology"
                      className="pill cc-footer"
                    >
                      Technology
                    </Link>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="u-display-inline-block">
                    <Link
                      //   style="background-color: #d0d8c0"
                      href="/category/world"
                      className="pill cc-footer"
                    >
                      World
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container cc-nav-footer">
        <div className="row row-justify-between row-align-center">
          <div className="column col-large-10 col-medium-12">
            <div className="u-display-flex cc-footer-template-link-wrap">
              <a
                href="https://webflow.com"
                target="_blank"
                className="webflow-link w-inline-block"
              >
                <div>Powered by Webflow</div>
              </a>
              <a
                href="/template/style-guide"
                className="text-link w-inline-block"
              >
                <div className="paragraph-0-9rem u-font-cutive">
                  Style Guide
                </div>
              </a>
              <div className="h4 cc-tag-separator">/</div>
              <a href="/template/licenses" className="w-inline-block">
                <div className="paragraph-0-9rem u-font-cutive">Licenses</div>
              </a>
              <div className="h4 cc-tag-separator">/</div>
              <a
                href="/template/changelog"
                className="text-link w-inline-block"
              >
                <div className="paragraph-0-9rem u-font-cutive">Changelog</div>
              </a>
              <div className="h4 cc-tag-separator">/</div>
              <a
                href="/template/instructions"
                className="text-link w-inline-block"
              >
                <div className="paragraph-0-9rem u-font-cutive">
                  Instructions
                </div>
              </a>
            </div>
          </div>
          <div className="column col-shrink">
            <div className="u-display-flex cc-footer-social-wrap">
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-inline-block"
              >
                <div className="icon cc-social-media w-embed">
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
                <div className="u-screen-reader-only">Instagram icon</div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-inline-block"
              >
                <div className="icon cc-social-media w-embed">
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
                <div className="u-screen-reader-only">Linkedin icon</div>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-inline-block"
              >
                <div className="icon cc-social-media w-embed">
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
                <div className="u-screen-reader-only">Facebook icon</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
