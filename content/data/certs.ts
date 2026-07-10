// Certifications & training from the resume.

export type CertStatus = "earned" | "in-progress" | "planned";

export type Certification = {
  name: string;
  issuer: string;
  status: CertStatus;
  date?: string;
  detail?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    status: "earned",
  },
  {
    name: "Information Security Analyst Program",
    issuer: "Correlation One · sponsored by Amazon Career Choice",
    status: "earned",
    detail:
      "A SOC-focused program covering threat detection, log analysis, incident response, SIEM operations, and MITRE ATT&CK — mapped to SOC Tier 1 responsibilities.",
  },
];
