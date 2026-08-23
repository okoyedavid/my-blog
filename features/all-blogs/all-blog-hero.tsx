export default function AllBlogHero() {
  return (
    <section className="section u-padding-bottom-0">
      <div className="container">
        <div className="row cc-section-top">
          <div className="column col-large-7 col-medium-12">
            <h1 className="h1 u-margin-0">All blogs</h1>
          </div>
          <div className="column">
            <div className="u-display-flex cc-tag-wrap">
              <div className="u-display-flex">
                <a
                  href="/all-blogs"
                  aria-current="page"
                  className="h4 cc-tag w--current"
                >
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
                    <a href="/tag/most-popular" className="h4 cc-tag">
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
  );
}
