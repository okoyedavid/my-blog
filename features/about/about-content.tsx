export default function AboutContent() {
  return (
    <div>
      <section className="section u-padding-top-3em">
        <div className="container">
          <div className="row row-justify-between">
            <div className="column col-large-4 col-medium-8 col-small-12">
              <h3 className="h2 u-margin-0">
                A value driven <span className="h2-span">creative house</span>
              </h3>
            </div>
            <div className="column col-large-4 col-medium-6 col-small-12">
              <h4 className="paragraph-1-5rem u-margin-top-0">Our mission</h4>
              <p className="paragraph-0-9rem">
                Your trendy source for all things urban in Montreal. Stay in the
                know with the city &#x27;s latest news and trends, and be part
                of our dynamic community celebrating Montreal.
              </p>
            </div>
            <div className="column col-large-4 col-medium-6 col-small-12">
              <h4 className="paragraph-1-5rem u-margin-top-0">Our vision</h4>
              <p className="paragraph-0-9rem">
                Our journalism is guided by unwavering integrity, upholding the
                highest standards of accuracy, impartiality, and fairness.We
                prioritize accuracy, impartiality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section u-padding-top-3em">
        <div className="container">
          <div className="row row-justify-between row-align-center">
            <div className="column col-large-5 col-medium-12">
              <div className="u-aspect-1x1 u-radius-medium">
                <img
                  src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469fb24278e4f6d5583a39_mp-about-2-compressed.webp"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  srcSet="
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469fb24278e4f6d5583a39_mp-about-2-compressed-p-500.webp  500w,
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469fb24278e4f6d5583a39_mp-about-2-compressed-p-800.webp  800w,
                    https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/65469fb24278e4f6d5583a39_mp-about-2-compressed.webp       1024w
                  "
                  alt="a lady with blonde curly hair using a computer in a office, we can see her coworkers in the background"
                  className="u-image-cover"
                />
              </div>
            </div>
            <div className="column col-large-6 col-medium-12 u-medium-first">
              <h2 className="h2">
                Meet a team of
                <span className="h2-span">passionate professionals</span>
              </h2>
              <p className="paragraph-1em u-margin-top-1em">
                At ThePost, we take pride in our journey towards excellence, and
                it &#x27;s our dedicated team of award-winning professionals
                that makes all the difference. Committed to delivering
                insightful, engaging, and well-researched content, our
                passionate writers, designers, and strategists bring their
                unique skills and experiences to the table.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
