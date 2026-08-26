import { NewsletterPanel } from "@/components/dashboard/newsletter-panel";

export const metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return <div className="mx-auto max-w-[76rem]"><header className="border-b border-border pb-7"><p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Audience</p><h1 className="m-0 mt-2 text-4xl tracking-[-0.04em] sm:text-5xl">Newsletter</h1><p className="mb-0 mt-3 text-muted-foreground">Prepare updates for your readers now; connect delivery when you are ready.</p></header><div className="mt-7"><NewsletterPanel /></div></div>;
}
