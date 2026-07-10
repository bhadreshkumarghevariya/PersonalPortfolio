import type { LucideIcon } from "lucide-react";
import { Radar, Network, Terminal } from "lucide-react";

// Skills grouped for a blue-team / SOC analyst profile.
// Only tools Bhadresh has actually worked with — kept honest.

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security & SOC",
    icon: Radar,
    skills: [
      "Wazuh SIEM",
      "MITRE ATT&CK",
      "Log analysis",
      "Alert triage",
      "Threat detection",
      "Incident response",
      "Brute-force detection",
      "Wireshark",
    ],
  },
  {
    title: "Systems & Networking",
    icon: Network,
    skills: [
      "Linux (Ubuntu Server)",
      "Windows",
      "macOS",
      "TCP/IP",
      "DNS",
      "DHCP",
      "SSH",
      "Tailscale",
      "WireGuard",
    ],
  },
  {
    title: "Tools & Development",
    icon: Terminal,
    skills: [
      "Git",
      "Linux CLI",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "REST APIs",
      "Agile",
    ],
  },
];
