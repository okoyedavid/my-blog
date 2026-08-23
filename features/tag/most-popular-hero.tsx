export default function MostPopularHero() {
  return (
    <div>
      <section className="section u-padding-bottom-0">
        <div className="container">
          <div className="row cc-section-top">
            <div className="column col-large-6 col-medium-12">
              <h1 className="h1 u-margin-0">Most Popular</h1>
            </div>
            <div className="column col-large-6 col-medium-12">
              <div className="u-display-flex cc-tag-wrap">
                <div className="u-display-flex">
                  <a href="/all-blogs" className="h4 cc-tag">
                    All
                  </a>
                </div>
                <div className="home-category-wrap w-dyn-list">
                  <div
                    role="list"
                    className="u-display-flex cc-cms-tags-wrap w-dyn-items"
                  >
                    <div role="listitem" className="w-dyn-item">
                      <div className="h4 cc-tag-separator cc-in-cms-collection">
                        /
                      </div>
                      <a href="/tag/featured-blogs" className="h4 cc-tag">
                        Featured Blogs
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <div className="h4 cc-tag-separator cc-in-cms-collection">
                        /
                      </div>
                      <a
                        href="/tag/most-popular"
                        aria-current="page"
                        className="h4 cc-tag w--current"
                      >
                        Most Popular
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
