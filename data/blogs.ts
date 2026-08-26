export const categorySlugs = [
  "projects",
  "backend",
  "security",
  "frontend",
  "engineering",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type BlogCategory = {
  slug: CategorySlug;
  name: string;
  description: string;
  color: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  category: CategorySlug;
  image: string;
  publishedAt: string;
  displayDate: string;
  author: string;
  technologies?: string[];
  projectUrl?: string;
  sections: BlogSection[];
  featured?: boolean;
  popular?: boolean;
};

export const categories: BlogCategory[] = [
  {
    slug: "projects",
    name: "Projects",
    description:
      "Case studies covering the products I build, the problems behind them, and the decisions that shaped the final result.",
    color: "bg-[#c3c0d8]",
  },
  {
    slug: "backend",
    name: "Backend",
    description:
      "Notes on APIs, data models, background work, persistence, and the less visible systems that keep products dependable.",
    color: "bg-[#ece9d7]",
  },
  {
    slug: "security",
    name: "Security",
    description:
      "Practical writing about authentication, authorization, sessions, permissions, and designing safer application boundaries.",
    color: "bg-[#dfcccc]",
  },
  {
    slug: "frontend",
    name: "Frontend",
    description:
      "Interface architecture, responsive product design, accessibility, and the details that make software easier to use.",
    color: "bg-[#c0d2d8]",
  },
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "Broader lessons about system design, trade-offs, reliability, and growing from implementation toward engineering judgment.",
    color: "bg-[#d0d8c0]",
  },
];

const author = "David Okoye";
const portfolioAsset = (path: string) => `https://okoyedavid.com${path}`;

export const blogs: BlogPost[] = [
  {
    slug: "building-okoyedavid-com-as-a-technical-portfolio",
    title: "Building okoyedavid.com as a Technical Portfolio",
    seoTitle: "Building a Technical Portfolio",
    excerpt:
      "How I turned a personal portfolio into a focused account of the products I build, the systems behind them, and the engineer I am becoming.",
    category: "engineering",
    image: portfolioAsset("/images/opengraph-image.png"),
    publishedAt: "2026-08-24",
    displayDate: "August 24, 2026",
    author,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://okoyedavid.com",
    featured: true,
    popular: true,
    sections: [
      {
        heading: "A portfolio should explain how I think",
        paragraphs: [
          "I did not want okoyedavid.com to be a gallery of screenshots with technology badges underneath. The goal was to show the relationship between a product's public experience and the engineering decisions that make it reliable.",
          "The site introduces me as a full-stack TypeScript developer focused on secure products and business systems. That framing matters because React, Next.js, and Node.js are tools; the lasting value is in authentication, permissions, APIs, workflows, and interfaces that hold together under real use.",
        ],
      },
      {
        heading: "Designing the story around real work",
        paragraphs: [
          "The selected-work section follows three products with different constraints: Aurex is a multi-tenant operations platform, AureScore handles academic results and identity, and Aurela explores a quieter fashion-commerce experience. Each case study moves from product intent to implementation and then to a concrete architecture decision.",
          "This structure lets a visitor scan quickly while leaving enough depth for someone who wants to understand what I owned. It also keeps the visual design connected to evidence instead of allowing presentation to replace substance.",
        ],
        points: [
          "Lead with the problem and product promise.",
          "State my contribution without hiding behind team language.",
          "Expose important implementation details and trade-offs.",
          "Be explicit about unfinished scope rather than presenting plans as shipped work.",
        ],
      },
      {
        heading: "What I would improve next",
        paragraphs: [
          "A portfolio is never really finished because the work it represents keeps changing. The next iteration should deepen individual project write-ups, measure performance and accessibility continuously, and connect short technical notes back to the decisions summarized on each case study.",
          "Okoye’s Log is part of that next step. The portfolio shows the result; this blog can preserve the reasoning, failed approaches, and smaller lessons that do not fit inside a polished project page.",
        ],
      },
    ],
  },
  {
    slug: "aurex-multi-tenant-business-operations-platform",
    title: "Aurex: Building a Multi-Tenant Business Operations Platform",
    seoTitle: "Aurex: Multi-Tenant Operations Platform",
    excerpt:
      "A full-stack TypeScript platform combining business workspaces, employee operations, invitations, audit activity, and durable backend workflows.",
    category: "projects",
    image: portfolioAsset("/assets/work/aurex/aurex.png"),
    publishedAt: "2026-08-21",
    displayDate: "August 21, 2026",
    author,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Zod"],
    projectUrl: "https://aurex.okoyedavid.com",
    featured: true,
    sections: [
      {
        heading: "The product problem",
        paragraphs: [
          "Business operations become difficult to reason about when employee records, permissions, invitations, notifications, and audit activity live in disconnected tools. Aurex brings those workflows into one protected workspace without making users reconstruct the state of the organization themselves.",
          "The public experience explains the operational promise before asking a visitor to create an account. After authentication, the dashboard prioritizes ownership, pending work, and the actions appropriate to the current tenant and role.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I designed and implemented the product interface, REST API, authentication and authorization model, MongoDB workflows, and polling workers across separate frontend and backend TypeScript applications.",
        ],
        points: [
          "Short-lived access tokens with rotating refresh sessions and individual session revocation.",
          "Suspicious-login monitoring and auditable operations.",
          "System roles, custom roles, explicit grants and denials, and privilege-escalation protection.",
          "Atomic job claiming for employee bank-account verification with persisted retries.",
        ],
      },
      {
        heading: "Scope and engineering honesty",
        paragraphs: [
          "Aurex already models payment permissions, employee records, and the workflows around them, but payment execution remains planned work. Keeping that distinction visible is important: a credible case study should describe what exists today, not quietly turn the roadmap into a feature list.",
        ],
      },
    ],
  },
  {
    slug: "designing-multi-tenant-rbac-with-explicit-denials",
    title: "Designing Multi-Tenant RBAC with Explicit Denials",
    seoTitle: "Multi-Tenant RBAC with Explicit Denials",
    excerpt:
      "The authorization model behind Aurex combines system roles, custom permissions, explicit grants and denials, and safeguards against privilege escalation.",
    category: "security",
    image: portfolioAsset("/assets/work/aurex/aurex2.png"),
    publishedAt: "2026-08-18",
    displayDate: "August 18, 2026",
    author,
    technologies: ["TypeScript", "Express", "MongoDB", "Zod"],
    projectUrl: "https://aurex.okoyedavid.com",
    popular: true,
    sections: [
      {
        heading: "Roles are only the starting point",
        paragraphs: [
          "A simple role name works until two organizations need different rules or a user needs one exception. Aurex treats authorization as tenant-scoped policy: a role establishes a baseline, while explicit grants and denials allow controlled variation without inventing a new role for every edge case.",
          "A denial must win over a grant. That makes restrictions predictable and prevents a broad permission inherited elsewhere from silently undoing an intentional boundary.",
        ],
      },
      {
        heading: "Protecting the permission system itself",
        paragraphs: [
          "An authorization UI is not a security boundary. Every permission-changing request has to be checked on the server against the actor's tenant, current authority, and the authority they are attempting to assign.",
        ],
        points: [
          "Never accept a tenant identifier merely because the client submitted it.",
          "Prevent users from granting permissions they do not possess.",
          "Separate immutable system roles from tenant-defined custom roles.",
          "Record sensitive permission changes in an audit trail.",
        ],
      },
      {
        heading: "The practical lesson",
        paragraphs: [
          "Multi-tenancy changes the meaning of identity. Knowing who a user is is not enough; every request also needs a reliable answer to which organization they are acting within and what they may do there. Making that context explicit simplifies both security reviews and product behavior.",
        ],
      },
    ],
  },
  {
    slug: "durable-background-jobs-with-mongodb-polling",
    title: "Durable Background Jobs with MongoDB-Backed Polling",
    seoTitle: "Durable Jobs with MongoDB Polling",
    excerpt:
      "Why Aurex uses atomic MongoDB job claiming, persisted retry state, and fixed polling instead of adding an external queue too early.",
    category: "backend",
    image: portfolioAsset("/assets/work/aurex/aurex4.png"),
    publishedAt: "2026-08-15",
    displayDate: "August 15, 2026",
    author,
    technologies: ["Node.js", "MongoDB", "TypeScript", "Vitest", "Supertest"],
    projectUrl: "https://aurex.okoyedavid.com",
    sections: [
      {
        heading: "Choosing for the current scale",
        paragraphs: [
          "A separate queue service would be a valid solution, but it would also add another system to deploy, observe, and recover. Aurex already depends on MongoDB, so the first durable worker design uses the database as the coordination point.",
          "This is not an attempt to pretend a database is always a queue. It is a deliberate trade-off for the current workload, with the job model designed so the execution layer can evolve later.",
        ],
      },
      {
        heading: "Making polling recoverable",
        paragraphs: [
          "Workers claim eligible jobs atomically so two processes cannot perform the same verification at once. Status, attempt count, retry eligibility, and failure information are persisted before the next polling cycle.",
        ],
        points: [
          "Claim one eligible job with a single atomic database operation.",
          "Persist ownership and execution state before performing external work.",
          "Store per-job backoff so a restart does not erase retry timing.",
          "Return abandoned jobs to an eligible state after a bounded lease.",
        ],
      },
      {
        heading: "The real requirement is recovery",
        paragraphs: [
          "Background processing is not durable because it runs outside an HTTP request. It becomes durable when failures are represented as data and the system can explain what happened after a process exits. That recovery model matters more than whether the first implementation uses a fashionable queue product.",
        ],
      },
    ],
  },
  {
    slug: "aurescore-academic-results-and-identity-platform",
    title: "AureScore: Academic Results and Identity Infrastructure",
    seoTitle: "AureScore: Academic Results Infrastructure",
    excerpt:
      "A full-stack platform for secure score entry, automatic GPA computation, traceable approvals, and institution-wide academic workflows.",
    category: "projects",
    image: portfolioAsset("/assets/work/aurescore/aurescore.webp"),
    publishedAt: "2026-08-12",
    displayDate: "August 12, 2026",
    author,
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "OpenID Connect"],
    projectUrl: "https://aurescore.okoyedavid.com",
    featured: true,
    popular: true,
    sections: [
      {
        heading: "Replacing disconnected result workflows",
        paragraphs: [
          "Academic results often move through spreadsheets and conversations that make ownership difficult to trace. AureScore models the actual path of the work: score entry, GPA computation, review, and approval across departments, faculties, and universities.",
          "Users can move between institutional and private workspaces while keeping the active role and organization visible. The dashboard starts with context, invitations, assigned reviews, and the next task instead of presenting the same generic interface to everyone.",
        ],
      },
      {
        heading: "A full-stack institutional model",
        paragraphs: [
          "I designed and built the product experience, workspace model, authentication system, and backend services across separate Next.js and NestJS applications.",
        ],
        points: [
          "Role-specific workspaces for departments, faculties, and universities.",
          "Automatic GPA computation with traceable multi-level approval.",
          "HTTP-only cookie sessions with refresh rotation and replay detection.",
          "Google authentication, optional email two-factor authentication, and transactional email through Resend.",
        ],
      },
      {
        heading: "Identity became a platform capability",
        paragraphs: [
          "AureScore eventually needed more than application login. By supporting OpenID Connect with Authorization Code and PKCE, its identity system can provide standards-based authentication to other applications without sharing passwords or inventing proprietary login flows.",
        ],
      },
    ],
  },
  {
    slug: "building-an-openid-connect-provider-in-aurescore",
    title: "Building an OpenID Connect Provider in AureScore",
    seoTitle: "An OpenID Connect Provider in AureScore",
    excerpt:
      "How an academic application’s authentication layer grew into standards-based identity infrastructure with secure sessions, PKCE, and replay detection.",
    category: "security",
    image: portfolioAsset("/assets/work/aurescore/aurescore2.jpg"),
    publishedAt: "2026-08-09",
    displayDate: "August 9, 2026",
    author,
    technologies: ["NestJS", "PostgreSQL", "Redis", "OIDC", "PKCE"],
    projectUrl: "https://aurescore.okoyedavid.com",
    sections: [
      {
        heading: "From login feature to identity service",
        paragraphs: [
          "Once multiple applications need the same institutional identity, copying login logic creates inconsistent security and fragmented sessions. AureScore instead exposes a standards-based authorization flow so client applications can request identity without handling the user's primary credentials.",
          "Authorization Code with PKCE keeps the useful browser redirect model while binding the final token exchange to the client that initiated the flow.",
        ],
      },
      {
        heading: "Sessions still need defensive design",
        paragraphs: [
          "OIDC does not remove the need for careful application sessions. AureScore uses short-lived access credentials, HTTP-only cookies, refresh rotation, replay detection, rate-limited verification challenges, and optional email two-factor authentication.",
        ],
        points: [
          "Rotate refresh credentials instead of treating them as permanent bearer secrets.",
          "Detect reuse of an invalidated refresh credential and revoke the affected session family.",
          "Keep verification challenges short-lived and rate limited.",
          "Validate redirect URIs exactly for every registered client.",
        ],
      },
      {
        heading: "Standards reduce invention, not responsibility",
        paragraphs: [
          "OpenID Connect provides a shared protocol and vocabulary, but implementation choices still decide whether the result is safe. The valuable part of using a standard is that those choices can be reasoned about against known flows instead of a private authentication protocol that only one codebase understands.",
        ],
      },
    ],
  },
  {
    slug: "aurela-designing-a-quieter-commerce-interface",
    title: "Aurela: Designing a Quieter Commerce Interface",
    seoTitle: "Aurela: A Quieter Commerce Interface",
    excerpt:
      "A responsive fashion-commerce frontend where editorial presentation, reusable components, and decisive product actions share the same visual system.",
    category: "frontend",
    image: portfolioAsset("/assets/work/aurela/aurela.png"),
    publishedAt: "2026-08-06",
    displayDate: "August 6, 2026",
    author,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://aurela.okoyedavid.com",
    sections: [
      {
        heading: "Make shopping feel composed",
        paragraphs: [
          "Aurela explores a quieter fashion-commerce experience. Editorial imagery establishes the mood, while restrained layouts give products enough space to feel considered instead of compressing everything into a dense catalogue grid.",
          "That visual direction still has to support real product discovery. Categories, authentication, variants, availability, reviews, and purchase actions remain clear when the user needs to make a decision.",
        ],
      },
      {
        heading: "A component system behind the presentation",
        paragraphs: [
          "I built the responsive interface and component architecture across browsing, account, and product-detail flows. Shared layout and presentation primitives keep the experience consistent without forcing every page into the same composition.",
        ],
        points: [
          "Responsive product discovery and category browsing.",
          "Reusable layout, product, and interaction primitives.",
          "Editorial presentation that adapts across screen sizes.",
          "Focused product details with clear variants and purchase actions.",
        ],
      },
      {
        heading: "Visual restraint is an engineering constraint",
        paragraphs: [
          "A sparse interface exposes inconsistency quickly. Spacing, image behavior, type scale, loading states, and responsive transitions have fewer places to hide. The implementation succeeds when the calm presentation survives real content and different viewport sizes, not only the original mockup.",
        ],
      },
    ],
  },
];

export const homepage = {
  title: "Okoye’s Log",
  tagline: "Technical notes from things I build",
  spotlightSlug: "building-okoyedavid-com-as-a-technical-portfolio",
  recentSlugs: blogs.map((post) => post.slug),
  popularSlugs: blogs.filter((post) => post.popular).map((post) => post.slug),
};

export const blogCollections = {
  all: blogs,
  featured: blogs.filter((post) => post.featured),
  popular: blogs.filter((post) => post.popular),
  recent: blogs,
};

export function getBlog(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getBlogsByCategory(slug: string) {
  return blogs.filter((post) => post.category === slug);
}

export function getBlogsBySlugs(slugs: string[]) {
  const positions = new Map(slugs.map((slug, index) => [slug, index]));
  return blogs
    .filter((post) => positions.has(post.slug))
    .sort((left, right) => positions.get(left.slug)! - positions.get(right.slug)!);
}

export function searchBlogs(query: string) {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return blogs.filter((post) => {
    const category = getCategory(post.category)?.name ?? post.category;
    const sections = post.sections
      .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.points ?? [])])
      .join(" ");
    const haystack = `${post.title} ${post.excerpt} ${category} ${post.technologies?.join(" ")} ${sections}`.toLocaleLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
