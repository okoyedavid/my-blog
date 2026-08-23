import Link from "next/link";

export default function Page() {
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content">
        <div className="u-aspect-1x1">
          <img
            src="https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/653cac856e7429d323abe837_mp-404.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, 260px"
            srcSet="
              https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/653cac856e7429d323abe837_mp-404-p-500.webp  500w,
              https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/653cac856e7429d323abe837_mp-404-p-800.webp  800w,
              https://cdn.prod.website-files.com/6524458df9ed19d52963b63d/653cac856e7429d323abe837_mp-404.webp       1024w
            "
            alt="404 image"
            className="u-image-cover"
          />
        </div>
        <h1 className="h1">Oops! Page Not Found</h1>
        <div className="paragraph-1em u-margin-bottom-2em">
          The page you are looking for doesn &#x27;t exist or has been moved
        </div>
        <Link href="/" className="button w-button">
          Home Page
        </Link>
      </div>
    </div>
  );
}
