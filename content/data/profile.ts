// About / narrative content, derived from Bhadresh's SOC resume.

export const profile = {
  // The dev -> security pivot narrative.
  about: [
    "I'm a SOC-focused security analyst with CompTIA Security+ and a completed Information Security Analyst program (Correlation One, sponsored by Amazon Career Choice). My hands-on detection experience comes from a self-built Wazuh SIEM lab where I collect logs, tune rules, and triage alerts end to end.",
    "My full-stack development background gives me a builder's understanding of how systems are architected — and therefore how they're attacked. I map adversary behavior to the MITRE ATT&CK framework and focus on turning noisy telemetry into clear, actionable escalations. I'm seeking a SOC Analyst role to contribute from day one.",
  ],
  // Short, scannable strengths shown as a list.
  highlights: [
    "CompTIA Security+ (SY0-701) certified",
    "Built and operate a single-node Wazuh SIEM home lab on Ubuntu Server",
    "Detection & triage: log analysis, alert correlation, brute-force detection, Wireshark",
    "Maps adversary activity to MITRE ATT&CK (e.g. T1110, Credential Access)",
  ],
} as const;
