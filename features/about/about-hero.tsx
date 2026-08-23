export default function AboutHero() {
  return (
    <>
      <section className="section u-padding-bottom-0 u-xsmall-paddin-top-3em">
        <div className="container">
          <h1 className="h1 u-margin-0">About Us</h1>
        </div>
      </section>
      <section className="section u-padding-top-3em">
        <div className="container">
          <div className="row row-align-center row-justify-between">
            <div className="column col-large-6 col-medium-12">
              <h2>
                Elevating journalism
                <span className="h2-span">through integrity</span>
              </h2>
              <p className="paragraph-1em u-margin-top-1em">
                We uphold unwavering integrity, maintaining the highest
                standards of accuracy, impartiality, and transparency in our
                journalism. Our commitment to reliable, unbiased reporting
                ensures that our readers can trust the news we provide, backed
                by thorough research and devoid of bias or sensationalism.
              </p>
            </div>
            <div className="column col-large-5 col-medium-12">
              <div className="u-aspect-1x1 u-radius-medium">
                <img
                  src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469f63f033546e8f7608dd_mp-about-compressed.webp"
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  srcSet="
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469f63f033546e8f7608dd_mp-about-compressed-p-500.webp  500w,
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469f63f033546e8f7608dd_mp-about-compressed-p-800.webp  800w,
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469f63f033546e8f7608dd_mp-about-compressed.webp       1024w
                  "
                  alt="3 coworkers in a brick office with books in the background "
                  className="u-image-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
