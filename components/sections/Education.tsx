import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/content/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="08" eyebrow="Education" title="Background" />
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={`${edu.school}-${i}`} delay={i * 0.05}>
            <Card className="h-full">
              <CardContent className="flex gap-4 p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <GraduationCap className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{edu.program}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.field}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {edu.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
