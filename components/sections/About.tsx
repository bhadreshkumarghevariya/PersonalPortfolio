import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title="From building systems to defending them" />
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <ul className="space-y-3">
            {profile.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
