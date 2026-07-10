import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, formatDate } from "@/lib/posts";

export function WriteupsTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="writeups" className="bg-muted/30">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          index="07"
          eyebrow="Writeups"
          title="Notes from the lab"
          description="Investigations, detections, and CTF writeups — thinking made visible."
        />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Card className="group h-full transition-colors hover:border-primary/40">
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {post.tags?.slice(0, 3).map((t) => (
                      <Badge key={t} variant="muted">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
        >
          All writeups
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
