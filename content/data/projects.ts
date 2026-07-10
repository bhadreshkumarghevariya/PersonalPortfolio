// Projects from the resume — the flagship SOC lab plus the full-stack platform.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  writeupSlug?: string; // links to a /blog/<slug> post
};

export const projects: Project[] = [
  {
    title: "Home SOC Lab — Wazuh SIEM",
    description:
      "A single-node Wazuh SIEM (indexer, manager, dashboard) on Ubuntu Server. Simulated SSH brute-force attacks and validated the full detection pipeline — collection, rule matching, correlation, and triage — mapping activity to MITRE ATT&CK T1110.",
    tags: ["Wazuh", "SIEM", "MITRE ATT&CK", "Linux"],
    writeupSlug: "building-a-home-soc-lab",
  },
  {
    title: "ProSystemz — Custom PC Builder Platform",
    description:
      "Full-stack e-commerce platform with authentication, API security, and role-based access control across user and vendor roles. Integrated Stripe checkout and built a vendor dashboard managing 50+ product listings.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "Stripe"],
    repoUrl: "https://github.com/bhadreshkumarghevariya",
  },
];
