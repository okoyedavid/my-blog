import Link from "next/link";

export default function About() {
  return (
    <section className="relative pb-12">
      <div className="mx-auto block w-[96%] max-w-[68rem]">
        <Link
          href="/about-us"
          className="block rounded-3xl bg-[#262626] bg-[url('https://okoyedavid.com/images/engineering-mindset.jpg')] bg-cover bg-center px-8 pb-8 pt-[20rem] text-white shadow-[inset_0_-140px_170px_2px_#262626e6] transition-shadow duration-500 hover:shadow-[inset_0_-100px_130px_#000000b3]"
        >
          <div className="grid items-end justify-between gap-8 lg:grid-cols-[5fr_4fr]">
            <div className="text-[clamp(2rem,5vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.02em]">
              <span className="mb-2 block font-mono text-2xl font-normal leading-none tracking-[-0.04em]">
                About David
              </span>
              Software engineer first. Frameworks second.
            </div>
            <div className="flex items-center justify-between gap-4 font-mono">
              <span>Read my story</span>
              <span aria-hidden="true" className="text-2xl">→</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
