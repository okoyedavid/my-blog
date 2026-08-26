export const site = {
  name: "Okoye’s Log",
  title: "Okoye’s Log — Technical Notes and Project Stories",
  description:
    "Technical notes, project write-ups, and lessons from building software by David Okoye.",
  url: "https://blog.okoyedavid.com",
  portfolioUrl: "https://okoyedavid.com",
  author: {
    name: "David Okoye",
    email: "okoyedav7@gmail.com",
    github: "https://github.com/okoyedavid",
    linkedin: "https://www.linkedin.com/in/okoyedavid7",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
