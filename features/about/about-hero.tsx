import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <section className="relative pb-0 pt-24 max-sm:pt-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <h1 className="m-0 font-serif text-[clamp(4rem,10vw,7rem)] font-bold leading-[1.04] tracking-[-0.025em]">
            About David
          </h1>
        </div>
      </section>
      <section className="relative pb-24 pt-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-center justify-between">
            <div className="mb-8 w-full px-2 lg:max-w-[50%] lg:basis-1/2">
              <h2>
                I build secure products and
                <span className="block font-serif font-normal italic tracking-[-0.02em]">
                  dependable business systems.
                </span>
              </h2>
              <p className="mt-4 text-base leading-7">
                I’m a full-stack TypeScript developer working across React, Next.js,
                Node.js, authentication, multi-tenant permissions, APIs, and the
                workflows that keep software useful after launch.
              </p>
            </div>
            <div className="mb-8 w-full px-2 lg:max-w-[41.6667%] lg:basis-[41.67%]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  fill
                  priority
                  src="https://okoyedavid.com/images/engineering-mindset.jpg"
                  alt="David Okoye working on software engineering projects"
                  sizes="(max-width: 1024px) 96vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
