import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const links = [
    { label: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail, external: false },
    { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin, external: true },
    { label: "GitHub", href: siteConfig.socials.github, Icon: Github, external: true },
    { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, Icon: Phone, external: false },
  ];

  return (
    <Section id="contact">
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              09 — Contact
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s talk
            </h2>
            <p className="mt-3 text-muted-foreground">
              Open to SOC and security analyst roles, and to freelance security work.
              The fastest way to reach me is email.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {links.map(({ label, href, Icon, external }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  className="justify-start"
                >
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon className="size-4" />
                    <span className="truncate">{label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
