export default function Categories() {
  return (
    <section className="section u-padding-bottom-0">
      <div className="container">
        <div className="row u-margin-bottom-1em">
          <div className="column col-large-12 u-margin-bottom-0">
            <h2 className="h2">
              <span className="h3 u-display-block">
                Categories
                <br />
              </span>
            </h2>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="pill-grid cc-huge w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div className="u-display-inline-block">
                <a href="/category/business" className="w-inline-block">
                  <div
                    // style="background-color: #c3c0d8"
                    className="pill cc-huge"
                  >
                    Business
                  </div>
                  <div className="u-screen-reader-only">Category link</div>
                </a>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="u-display-inline-block">
                <a href="/category/politics" className="w-inline-block">
                  <div
                    // style="background-color: #ece9d7"
                    className="pill cc-huge"
                  >
                    Politics
                  </div>
                  <div className="u-screen-reader-only">Category link</div>
                </a>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="u-display-inline-block">
                <a href="/category/sports" className="w-inline-block">
                  <div
                    // style="background-color: #dfcccc"
                    className="pill cc-huge"
                  >
                    Sports
                  </div>
                  <div className="u-screen-reader-only">Category link</div>
                </a>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="u-display-inline-block">
                <a href="/category/technology" className="w-inline-block">
                  <div
                    // style="background-color: #c0d2d8"
                    className="pill cc-huge"
                  >
                    Technology
                  </div>
                  <div className="u-screen-reader-only">Category link</div>
                </a>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div className="u-display-inline-block">
                <a href="/category/world" className="w-inline-block">
                  <div
                    // style="background-color: #d0d8c0"
                    className="pill cc-huge"
                  >
                    World
                  </div>
                  <div className="u-screen-reader-only">Category link</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
