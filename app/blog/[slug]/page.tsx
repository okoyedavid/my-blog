import type { Metadata } from "next";
import { getPublishedPostBySlug } from "@/lib/posts/repository";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  const title = post?.title || titleFromSlug(slug) || "Montreal Story";
  const description =
    post?.excerpt || `Read ${title}, a Montreal story from ThePost.`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post?.publishedAt ?? undefined,
      modifiedTime: post?.updatedAt,
      authors: ["ThePost Team"],
      images: post?.coverImage ? [{ url: post.coverImage, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post?.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default function BlogDetails() {
  return (
    <div
      // style="background-color: #c3c0d8"
      className="page-wrapper"
    >
      <section className="section u-padding-bottom-3em">
        <div className="container">
          <div className="row">
            <div className="column col-large-12">
              <div className="blog-article-breadcrumb">
                <a
                  href="/category/business"
                  className="back-to-category w-inline-block"
                >
                  <div className="text-link-arrow cc-back">→</div>
                  <div className="paragraph-0-9rem cc-back-to-category">
                    Business
                  </div>
                </a>
              </div>
              <h1 className="h1 cc-blog-article">
                Montreal &#x27;s Retail Renaissance: Brick-and-Mortar Stores
                Adapt to the Digital Age
              </h1>
              <div className="paragraph-1-25rem">April 10, 2025</div>
              <div className="u-display-flex blog-article-authorwrap">
                <div className="paragraph-0-9rem">By</div>
                <div className="paragraph-0-9rem">ThePost Team</div>
              </div>
            </div>
          </div>
          <div className="paragraph-1-5rem cc-blog-excerpt">
            Amidst the digital age, Montreal &#x27;s brick-and-mortar retailers
            are adapting and thriving. Learn how these businesses are blending
            technology and traditional retail to create unique shopping
            experiences.
          </div>
        </div>
      </section>
      <section className="section u-padding-0">
        <div className="container">
          <div className="u-aspect-16x9 cc-blog-cover">
            <img
              loading="lazy"
              alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
              src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail.webp"
              sizes="100vw"
              srcSet="
                https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-500.webp   500w,
                https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-800.webp   800w,
                https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail.webp        1456w
              "
              className="u-image-cover"
            />
          </div>
        </div>
      </section>
      <section className="section u-padding-top-1em u-padding-bottom-0">
        <div className="container">
          <div className="row row-justify-center">
            <div className="column col-large-10 col-small-12">
              <div className="blog-rich-text w-richtext">
                <h2>Introduction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam varius justo ac arcu laoreet, eget tincidunt metus
                  hendrerit. Curabitur vel augue vel metus ultrices tincidunt.
                  Aliquam erat volutpat. Fusce nec hendrerit ipsum. Nullam sit
                  amet ex ac sapien mattis hendrerit.
                </p>
                <h3>The Power of Filling Space</h3>
                <p>In this blog post, we &#x27;ll explore:</p>
                <ol role="list">
                  <li>The origins of Lorem Ipsum.</li>
                  <li>Its uses in design and typesetting.</li>
                  <li>Alternatives to Lorem Ipsum.</li>
                  <li>The future of text in design.</li>
                </ol>
                <h2>The Origins of Lorem Ipsum</h2>
                <p>
                  Sed vehicula, libero eu lacinia finibus, urna orci tempus
                  felis, nec volutpat odio metus in ligula. In hac habitasse
                  platea dictumst. Sed efficitur luctus odio, eu tincidunt elit
                  cursus nec. Sed volutpat ut urna sed tincidunt. Donec ultrices
                  quam at libero fringilla bibendum.
                </p>
                <figure
                  //   style="max-width: 1456pxpx"
                  className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                >
                  <div>
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7dce5f41885fe33dd430c_placeholder%20image%20thepost.webp"
                    />
                  </div>
                  <figcaption>
                    Pellentesque aliquet a nunc eu vestibulum. Phasellus lacinia
                    lectus et mattis blandit. Maecenas ut lacus sit amet enim
                    semper hendrerit vel a libero.
                  </figcaption>
                </figure>
                <h3>Lorem Ipsum in Design</h3>
                <p>
                  Cras vulputate eleifend libero, eget hendrerit metus congue
                  ut. Phasellus rhoncus ipsum nec neque sollicitudin, eget
                  blandit nisi mattis. Integer congue risus sit amet vestibulum
                  vulputate. Duis feugiat eleifend malesuada. Aenean tincidunt
                  risus urna, ut scelerisque arcu malesuada id.
                </p>
                <h3>Alternatives to Lorem Ipsum</h3>
                <p>
                  Vivamus interdum lacinia turpis, in fermentum urna dictum id.
                  Pellentesque aliquet a nunc eu vestibulum. Phasellus lacinia
                  lectus et mattis blandit. Maecenas ut lacus sit amet enim
                  semper hendrerit vel a libero.
                </p>
                <h4>Notable Alternatives</h4>
                <ul role="list">
                  <li>
                    <strong>Bacon Ipsum</strong>: A meaty alternative.
                  </li>
                  <li>
                    <strong>Hipster Ipsum</strong>: For the trendy designer.
                  </li>
                  <li>
                    <strong>Cupcake Ipsum</strong>: A sweet twist on placeholder
                    text.
                  </li>
                </ul>
                <h3>The Future of Text in Design</h3>
                <p>
                  Fusce dapibus vestibulum purus, sit amet scelerisque elit
                  venenatis nec. Nulla facilisi. Sed et vehicula tortor. Proin
                  vehicula, justo at cursus sodales, metus nunc gravida lectus,
                  ac fringilla odio quam vel ex.
                </p>
                <ol role="list">
                  <li>
                    <strong>Machine Learning Text</strong>: The role of AI in
                    generating content.
                  </li>
                  <li>
                    <strong>Interactive Typography</strong>: Typography as a
                    design element.
                  </li>
                  <li>
                    <strong>Content-First Design</strong>: A shift towards
                    content-centric design.
                  </li>
                  <li>
                    <strong>Personalization</strong>: Tailoring content for
                    individual users.
                  </li>
                </ol>
                <h2>Conclusion</h2>
                <p>
                  Vivamus vehicula velit nec ante lobortis, eu rhoncus purus
                  dictum. Ut a velit et orci tincidunt feugiat. Vivamus a varius
                  nunc, sit amet vehicula justo. Fusce consectetur, leo quis
                  cursus volutpat, metus tellus tincidunt purus, id congue felis
                  nunc in arcu.
                </p>
                <blockquote>
                  In sagittis, justo in ultrices vehicula, odio tellus cursus
                  velit, sed tristique arcu est a quam. Etiam in sem eget est
                  hendrerit sollicitudin. Nullam interdum leo ac nisi congue,
                  eget fermentum odio dapibus. Cras rhoncus libero quis leo
                  ultricies, at eleifend tortor vehicula.
                </blockquote>
                <p>
                  Suspendisse potenti. Morbi sed massa neque. Donec et fermentum
                  dui. Pellentesque auctor fringilla nulla, ac varius justo
                  vehicula ut.
                </p>
                <ul role="list">
                  <li>Sed quis tincidunt quam, eget mattis ante.</li>
                  <li>Phasellus laoreet sem eget venenatis ullamcorper.</li>
                  <li>
                    Suspendisse tristique, libero ut sodales scelerisque, nisi
                    nulla vulputate ligula, nec blandit est elit at purus.
                  </li>
                </ul>
                <ol role="list">
                  <li>Sed in hac habitasse platea dictumst.</li>
                  <li>
                    In euismod sapien vel risus ultrices, vel bibendum sem
                    tincidunt.
                  </li>
                  <li>Cras iaculis efficitur elit, a vehicula libero.</li>
                </ol>
              </div>
              <div className="u-margin-top-2em">
                <h2 className="h4">Credits</h2>
                <div className="w-dyn-list">
                  <div role="list" className="credits-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/our-team/youssef-mahmoud"
                        className="credits-item w-inline-block"
                      >
                        <div className="nav-list-item">
                          <div className="paragraph-1em">Youssef Mahmoud</div>
                          <div className="text-link-arrow">→</div>
                        </div>
                        <div className="h4 u-margin-0">Art Director</div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/our-team/eric-costa"
                        className="credits-item w-inline-block"
                      >
                        <div className="nav-list-item">
                          <div className="paragraph-1em">Eric Costa</div>
                          <div className="text-link-arrow">→</div>
                        </div>
                        <div className="h4 u-margin-0">Content Writer</div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/our-team/malik-ahmed"
                        className="credits-item w-inline-block"
                      >
                        <div className="nav-list-item">
                          <div className="paragraph-1em">Malik Ahmed</div>
                          <div className="text-link-arrow">→</div>
                        </div>
                        <div className="h4 u-margin-0">Co-Founder</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section u-padding-bottom-3em">
        <div className="container">
          <div className="row cc-section-top">
            <div className="column col-medium-12 u-medium-last">
              <h2 className="h3 u-margin-0">In the same category</h2>
            </div>
            <div className="column">
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
                      <a href="/tag/most-popular" className="h4 cc-tag">
                        Most Popular
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="w-dyn-list">
                <div role="list" className="_3-column-blog-grid w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/montreals-retail-renaissance-brick-and-mortar-stores-adapt-to-the-digital-age"
                      aria-current="page"
                      className="blog-link w-inline-block w--current"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee5042c8198fb8eccc95_Retail.webp        1456w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Montreal &#x27;s Retail Renaissance: Brick-and-Mortar
                        Stores Adapt to the Digital Age
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/investing-in-montreal-why-businesses-are-flocking-to-the-city"
                      className="blog-link w-inline-block"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7e1b78a60f628c4f9df81_Investing%20in%20Montreal.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7e1b78a60f628c4f9df81_Investing%20in%20Montreal-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7e1b78a60f628c4f9df81_Investing%20in%20Montreal-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7e1b78a60f628c4f9df81_Investing%20in%20Montreal-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7e1b78a60f628c4f9df81_Investing%20in%20Montreal.webp        1210w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Investing in Montreal: Why Businesses Are Flocking to
                        the City
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/montreals-startup-ecosystem-fertile-ground-for-entrepreneurial-success"
                      className="blog-link w-inline-block"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee64947b3c8f06497af5_Startup%20Ecosystem.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee64947b3c8f06497af5_Startup%20Ecosystem-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee64947b3c8f06497af5_Startup%20Ecosystem-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee64947b3c8f06497af5_Startup%20Ecosystem-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee64947b3c8f06497af5_Startup%20Ecosystem.webp        1456w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Montreal &#x27;s Startup Ecosystem: Fertile Ground for
                        Entrepreneurial Success
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/green-business-initiatives-flourish-in-montreal-a-sustainable-future-beckons"
                      className="blog-link w-inline-block"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee70363eb9dc4609fae1_Green%20Business.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee70363eb9dc4609fae1_Green%20Business-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee70363eb9dc4609fae1_Green%20Business-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee70363eb9dc4609fae1_Green%20Business-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee70363eb9dc4609fae1_Green%20Business.webp        1210w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Green Business Initiatives Flourish in Montreal: A
                        Sustainable Future Beckons
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/montreals-economic-renaissance-businesses-thrive-amidst-innovation-hub"
                      className="blog-link w-inline-block"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee7c13ed78bf6fdf76d6_Economy.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee7c13ed78bf6fdf76d6_Economy-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee7c13ed78bf6fdf76d6_Economy-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee7c13ed78bf6fdf76d6_Economy-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7ee7c13ed78bf6fdf76d6_Economy.webp        1210w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Montreal &#x27;s Economic Renaissance: Businesses Thrive
                        Amidst Innovation Hub
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <a
                      href="/blog/montreals-tech-startups-thrive-record-investments-pour-in"
                      className="blog-link w-inline-block"
                    >
                      <div className="u-aspect-16x9 cc-small-cover">
                        <img
                          loading="lazy"
                          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat varius risus, a consectetur nulla eleifend nec."
                          src="https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7eeb8f76b6b3b8be32b90_Tech%20Invest.webp"
                          sizes="100vw"
                          srcSet="
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7eeb8f76b6b3b8be32b90_Tech%20Invest-p-500.webp   500w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7eeb8f76b6b3b8be32b90_Tech%20Invest-p-800.webp   800w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7eeb8f76b6b3b8be32b90_Tech%20Invest-p-1080.webp 1080w,
                            https://cdn.prod.website-files.com/6524951dd4146ddef210e903/67f7eeb8f76b6b3b8be32b90_Tech%20Invest.webp        1210w
                          "
                          className="u-image-cover u-blend-luminosity"
                        />
                      </div>
                      <div className="u-display-flex cc-blog-card-info">
                        <div className="u-display-inline-block">
                          <div
                            // style="background-color: #c3c0d8"
                            className="pill cc-current"
                          >
                            Business
                          </div>
                        </div>
                        <div className="paragraph-1em u-font-cutive">
                          April 10, 2025
                        </div>
                      </div>
                      <div className="h3 cc-blog-title">
                        Montreal &#x27;s Tech Startups Thrive: Record
                        Investments Pour In
                      </div>
                      <div className="u-screen-reader-only">
                        Blog article link
                      </div>
                    </a>
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
