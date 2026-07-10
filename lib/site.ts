// Central site configuration — single source of truth for identity, SEO, and links.

export const siteConfig = {
  name: "Bhadresh Ghevariya",
  role: "SOC Analyst",
  // Short value proposition shown in hero + meta description.
  tagline:
    "SOC-focused security analyst — CompTIA Security+ certified, with hands-on detection from a self-built Wazuh SIEM lab. I turn raw logs into triaged, actionable alerts.",
  // Production domain (apex redirects to www on Vercel).
  url: "https://www.bhadreshghevariya.com",
  location: "Toronto, ON, Canada",
  openToWork: true,
  email: "bhadreshkumarghevariya@gmail.com",
  phone: "(226) 808-5897",
  socials: {
    github: "https://github.com/bhadreshkumarghevariya",
    linkedin: "https://www.linkedin.com/in/bhadreshghevariya",
  },
  // Real résumé exported from the source doc.
  resumePath: "/resume.pdf",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Lab", href: "/#lab" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Writeups", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
