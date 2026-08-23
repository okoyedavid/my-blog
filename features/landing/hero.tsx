export default function Hero() {
  return (
    <section className="section cc-home-hero">
      <div className="container cc-home-hero">
        <div className="row cc-section-top">
          <div className="column col-large-7 col-medium-12">
            <h1 className="h1 cc-home">ThePost</h1>
            <div className="h2 cc-home-hero-subhead">
              Your gateway to the heart of the city
            </div>
          </div>
          <div className="column col-large-5 col-medium-12">
            <div className="u-display-flex cc-tag-wrap">
              <a href="/all-blogs" className="w-inline-block">
                <div className="h3 cc-tag-separator u-margin-right-0-5em u-xsmall-only">
                  /
                </div>
                <div className="h4 cc-tag">All Blogs</div>
              </a>
              <div className="h4 cc-tag">/</div>
              <a href="/about-us" className="w-inline-block">
                <div className="h4 cc-tag">About Us</div>
              </a>
              <div className="h4 cc-tag">/</div>
              <a href="/contact-us" className="w-inline-block">
                <div className="h4 cc-tag">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
