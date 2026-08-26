import Image from "next/image";

export default function AboutContent() {
  return (
    <div>
      <section className="relative pb-24 pt-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch justify-between">
            <div className="mb-8 w-full px-2 lg:max-w-[33.3333%] lg:basis-1/3">
              <h2 className="m-0 text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em]">
                A software engineer
                <span className="block font-serif font-normal italic">first.</span>
              </h2>
            </div>
            <div className="mb-8 w-full px-2 md:max-w-[50%] md:basis-1/2 lg:max-w-[33.3333%] lg:basis-1/3">
              <h3 className="mt-0 text-2xl leading-[1.35] tracking-[-0.01em]">What I write</h3>
              <p className="text-sm leading-[1.7]">
                Okoye’s Log records architecture decisions, implementation details,
                security lessons, and the trade-offs behind the products I build.
              </p>
            </div>
            <div className="mb-8 w-full px-2 md:max-w-[50%] md:basis-1/2 lg:max-w-[33.3333%] lg:basis-1/3">
              <h3 className="mt-0 text-2xl leading-[1.35] tracking-[-0.01em]">What I value</h3>
              <p className="text-sm leading-[1.7]">
                Clear interfaces, explicit permissions, recoverable workflows, and
                systems whose behavior remains understandable when something fails.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-24 pt-12">
        <div className="mx-auto block w-[96%] max-w-[68rem]">
          <div className="-mx-2 -mb-8 flex flex-wrap content-stretch items-center justify-between">
            <div className="mb-8 w-full px-2 lg:max-w-[41.6667%] lg:basis-[41.67%]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#262626]">
                <Image
                  fill
                  src="https://okoyedavid.com/home/bg-image.jpg"
                  alt="Abstract technical artwork from David Okoye’s portfolio"
                  sizes="(max-width: 1024px) 96vw, 42vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="order-first mb-8 w-full px-2 lg:max-w-[50%] lg:basis-1/2">
              <h2 className="mb-2 mt-3 text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em]">
                The reasoning behind
                <span className="block font-serif font-normal italic">the finished work.</span>
              </h2>
              <p className="mt-4 text-base leading-7">
                My portfolio shows the final products. This publication gives the
                decisions, constraints, mistakes, and lessons enough room to be useful
                to another engineer—and to my future self.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
