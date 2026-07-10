import Link from "next/link";
import { FileText, Github, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="06"
        eyebrow="Projects"
        title="Security work"
        description="Practical projects that show detection thinking, automation, and analysis."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <Card className="group h-full transition-colors hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4 pt-3 font-mono text-xs">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-3.5" />
                      Code
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-3.5" />
                      Live
                    </a>
                  ) : null}
                  {project.writeupSlug ? (
                    <Link
                      href={`/blog/${project.writeupSlug}`}
                      className="inline-flex items-center gap-1.5 text-primary transition-colors hover:underline"
                    >
                      <FileText className="size-3.5" />
                      Writeup
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
