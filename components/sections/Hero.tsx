"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Subtle background grid + radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          {siteConfig.openToWork ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to SOC / security analyst roles
            </div>
          ) : null}

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-primary sm:text-xl">
            {siteConfig.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                Get in touch
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                Résumé
              </a>
            </Button>
            <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              {siteConfig.location}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
