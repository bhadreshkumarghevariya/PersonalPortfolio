import { FlaskConical } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { labItems } from "@/content/data/lab";

export function HomeLab() {
  return (
    <Section id="lab" className="bg-muted/30">
      <SectionHeading
        index="04"
        eyebrow="Home Lab"
        title="Hands-on practice"
        description="Where I actually do the work: a self-built Wazuh SIEM lab, from deployment to detection to triage."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {labItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <FlaskConical className="size-4" />
                </span>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.tags.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
