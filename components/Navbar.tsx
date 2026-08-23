import Link from "next/link";

export default function Navbar() {
  return (
    <div
      data-animation="over-left"
      className="nav w-nav"
      data-easing2="ease"
      data-easing="ease-out-cubic"
      data-collapse="all"
      data-w-id="68568e00-6dcb-05ac-e8a6-519083c34240"
      role="banner"
      data-no-scroll="1"
      data-duration="600"
      data-doc-height="1"
    >
      <div className="container cc-navbar w-container">
        <div className="nav-wrap">
          <Link
            href="/"
            aria-current="page"
            className="logo-wrap w-nav-brand w--current"
          >
            <img
              src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/6549aa4c8294cf1406cfc23f_The%20Post.svg"
              loading="lazy"
              alt=""
              className="logo"
            />
            <div className="u-screen-reader-only">Home page</div>
          </Link>
          <div className="u-display-flex cc-nav-wrap">
            <div className="u-medium-hide w-dyn-list">
              <div role="list" className="u-display-flex u-gap-6px w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a
                    // style="background-color: #c3c0d8"
                    href="/category/business"
                    className="pill w-inline-block"
                  >
                    <div>Business</div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    // style="background-color: #ece9d7"
                    href="/category/politics"
                    className="pill w-inline-block"
                  >
                    <div>Politics</div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    // style="background-color: #dfcccc"
                    href="/category/sports"
                    className="pill w-inline-block"
                  >
                    <div>Sports</div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    // style="background-color: #c0d2d8"
                    href="/category/technology"
                    className="pill w-inline-block"
                  >
                    <div>Technology</div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    // style="background-color: #d0d8c0"
                    href="/category/world"
                    className="pill w-inline-block"
                  >
                    <div>World</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="u-display-flex cc-search-and-menu-wrap">
              <form action="/search" className="search w-form">
                <input
                  className="text-field cc-search-input w-input"
                  autoFocus
                  maxLength={256}
                  name="query"
                  placeholder="Search…"
                  type="search"
                  id="search"
                  required
                />
                <div
                  data-w-id="e06e12e1-546d-ae9f-c220-4310850bf62a"
                  className="menu-button cc-search"
                >
                  <div className="search-icon w-embed">
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
                </div>
              </form>
              <div className="menu-button cc-black w-nav-button">
                <div>
                  <div className="menu-icon cc-dot">
                    <div className="menu-dot cc-first cc-black"></div>
                    <div className="menu-dot cc-black"></div>
                    <div className="menu-dot cc-last cc-black"></div>
                  </div>
                  <div className="menu-icon cc-x">
                    <div className="bar cc-left cc-black"></div>
                    <div className="bar cc-right cc-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="nav-menu-content">
              <div className="container cc-nav-wrap">
                <div>
                  <div className="u-display-flex cc-nav-link-list-wrap">
                    <ul role="list" className="nav-list cc-menu-first">
                      <li className="nav-list-item cc-in-menu">
                        <Link
                          href="/"
                          aria-current="page"
                          className="u-font-cutive w--current"
                        >
                          Home
                        </Link>
                        <div className="text-link-arrow">→</div>
                      </li>
                      <li className="nav-list-item cc-in-menu">
                        <Link href="/about-us" className="u-font-cutive">
                          About Us
                        </Link>
                        <div className="text-link-arrow">→</div>
                      </li>
                      <li className="nav-list-item cc-in-menu">
                        <Link href="/contact-us" className="u-font-cutive">
                          Contact
                        </Link>
                        <div className="text-link-arrow">→</div>
                      </li>
                    </ul>
                    <div className="nav-list u-xsmall-hide">
                      <div className="nav-list-item cc-in-menu">
                        <Link href="/all-blogs" className="u-font-cutive">
                          All Blogs
                        </Link>
                        <div className="text-link-arrow">→</div>
                      </div>
                      <div className="w-dyn-list">
                        <div role="list" className="nav-list w-dyn-items">
                          <div
                            role="listitem"
                            className="nav-list-item w-dyn-item"
                          >
                            <Link
                              href="/tag/featured-blogs"
                              className="nav-list-item cc-in-menu w-inline-block"
                            >
                              <div className="u-font-cutive">
                                Featured Blogs
                              </div>
                              <div className="text-link-arrow">→</div>
                            </Link>
                          </div>
                          <div
                            role="listitem"
                            className="nav-list-item w-dyn-item"
                          >
                            <Link
                              href="/tag/most-popular"
                              className="nav-list-item cc-in-menu w-inline-block"
                            >
                              <div className="u-font-cutive">Most Popular</div>
                              <div className="text-link-arrow">→</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-pill-wrap w-dyn-list">
                    <div role="list" className="pill-grid cc-huge w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          //   style="background-color: #c0d2d8"
                          href="/category/technology"
                          className="pill cc-huge w-inline-block"
                        >
                          <div>Technology</div>
                        </Link>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          //   style="background-color: #d0d8c0"
                          href="/category/world"
                          className="pill cc-huge w-inline-block"
                        >
                          <div>World</div>
                        </Link>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          //   style="background-color: #dfcccc"
                          href="/category/sports"
                          className="pill cc-huge w-inline-block"
                        >
                          <div>Sports</div>
                        </Link>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          //   style="background-color: #c3c0d8"
                          href="/category/business"
                          className="pill cc-huge w-inline-block"
                        >
                          <div>Business</div>
                        </Link>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <Link
                          //   style="background-color: #ece9d7"
                          href="/category/politics"
                          className="pill cc-huge w-inline-block"
                        >
                          <div>Politics</div>
                        </Link>
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
                        <div className="paragraph-0-9rem u-font-cutive">
                          Licenses
                        </div>
                      </a>
                      <div className="h4 cc-tag-separator">/</div>
                      <a
                        href="/template/changelog"
                        className="text-link w-inline-block"
                      >
                        <div className="paragraph-0-9rem u-font-cutive">
                          Changelog
                        </div>
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
                        <div className="u-screen-reader-only">
                          Instagram icon
                        </div>
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
                        <div className="u-screen-reader-only">
                          Linkedin icon
                        </div>
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
                        <div className="u-screen-reader-only">
                          Facebook icon
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="nav-blur-backdrop"></div>
    </div>
  );
}
