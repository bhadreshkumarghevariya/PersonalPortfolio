import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writeups",
  description:
    "Security writeups: investigations, detections, and CTF notes from the lab.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20 sm:pt-40">
      <Container>
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            Writeups
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Notes from the lab
          </h1>
          <p className="mt-4 text-muted-foreground">
            Investigations, detection engineering, and CTF writeups. Each one
            documents the reasoning, not just the result.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No writeups published yet — check back soon.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <Card className="group transition-colors hover:border-primary/40">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readingMinutes} min
                      </span>
                      {post.draft ? (
                        <Badge variant="outline" className="ml-1">
                          draft
                        </Badge>
                      ) : null}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags?.map((t) => (
                        <Badge key={t} variant="muted">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}
