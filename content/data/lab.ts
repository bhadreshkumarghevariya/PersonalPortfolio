// Home lab & hands-on practice — the centerpiece of the SOC story.
// Derived from the resume's Home SOC Lab (Wazuh SIEM).

export type LabItem = {
  title: string;
  description: string;
  tags: string[];
};

export const labItems: LabItem[] = [
  {
    title: "Wazuh SIEM deployment",
    description:
      "Deployed a single-node Wazuh stack (indexer, manager, dashboard) on a self-provisioned Ubuntu Server host, configured for headless remote administration.",
    tags: ["Wazuh", "Ubuntu Server", "Linux"],
  },
  {
    title: "Brute-force detection pipeline",
    description:
      "Simulated SSH brute-force attacks and validated the full pipeline — log collection, rule matching, alert correlation, and triage — distinguishing single auth failures (level 5) from correlated attacks (level 10), mapped to MITRE ATT&CK T1110.",
    tags: ["MITRE ATT&CK", "T1110", "Alert triage"],
  },
  {
    title: "Secure remote access",
    description:
      "Configured remote administration over a WireGuard-based mesh VPN (Tailscale), with no ports exposed to the public internet.",
    tags: ["Tailscale", "WireGuard", "Hardening"],
  },
];
