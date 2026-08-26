import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen max-h-full w-screen max-w-full items-center justify-center">
      <div className="flex w-[260px] flex-col items-start">
        <div className="relative aspect-square w-full overflow-hidden">
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <h1 className="mb-[10px] mt-5 font-serif text-8xl font-normal leading-none tracking-[-0.075em]">Oops! Page Not Found</h1>
        <div className="mb-8 text-base leading-6 tracking-[0.0125em]">
          The page you are looking for doesn &#x27;t exist or has been moved
        </div>
        <Link href="/" className="inline-block cursor-pointer rounded-full border-0 bg-ink px-4 py-[0.66em] font-mono text-base leading-none text-paper no-underline transition-opacity hover:opacity-50">
          Home Page
        </Link>
      </div>
    </div>
  );
}
