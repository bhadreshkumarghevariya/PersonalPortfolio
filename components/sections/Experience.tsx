import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/content/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="05" eyebrow="Experience" title="Where I've worked" />
      <div className="relative">
        {/* Timeline rail */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
        />
        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={`${item.role}-${i}`} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:size-5">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold">{item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-primary">{item.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-muted-foreground/50"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
