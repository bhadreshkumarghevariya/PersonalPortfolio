// Professional experience from the resume.

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "FC Associate",
    org: "Amazon — Toronto, ON",
    period: "Oct 2024 — Present",
    summary:
      "High-throughput operations role where I practice the structured escalation discipline that underpins SOC work.",
    points: [
      "Diagnosed and escalated technology malfunctions following structured escalation procedures, supporting rapid resolution for operations teams",
      "Maintained data accuracy across integrated warehouse management systems while processing thousands of items per shift under time pressure",
      "Trained and assisted 10+ peers on device troubleshooting procedures, improving team self-sufficiency",
    ],
  },
];
