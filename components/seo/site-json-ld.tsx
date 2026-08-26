import { site } from "@/data/site";

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#author` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#author`,
        name: site.author.name,
        url: site.portfolioUrl,
        email: `mailto:${site.author.email}`,
        jobTitle: "Full-Stack TypeScript Developer",
        sameAs: [site.portfolioUrl, site.author.github, site.author.linkedin],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}
