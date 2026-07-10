import { Award, CircleDot, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, type CertStatus } from "@/content/data/certs";

const statusMeta: Record<
  CertStatus,
  { label: string; className: string; Icon: typeof Award }
> = {
  earned: {
    label: "Earned",
    className: "text-primary",
    Icon: Award,
  },
  "in-progress": {
    label: "In progress",
    className: "text-amber-600 dark:text-amber-400",
    Icon: Clock,
  },
  planned: {
    label: "Planned",
    className: "text-muted-foreground",
    Icon: CircleDot,
  },
};

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="03"
        eyebrow="Certifications"
        title="Certifications & training"
        description="Credentials that back the hands-on work — earned, not aspirational."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const meta = statusMeta[cert.status];
          const { Icon } = meta;
          const card = (
            <Card className="h-full transition-colors hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <div className={`flex items-center gap-2 font-mono text-xs ${meta.className}`}>
                  <Icon className="size-3.5" />
                  {meta.label}
                  {cert.date ? (
                    <span className="text-muted-foreground">· {cert.date}</span>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                {cert.detail ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cert.detail}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          );
          return (
            <Reveal key={cert.name} delay={i * 0.05}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
