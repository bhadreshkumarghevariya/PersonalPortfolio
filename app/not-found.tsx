import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pt-16">
      <Container>
        <div className="max-w-md">
          <div className="font-mono text-sm text-primary">404</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-3 text-muted-foreground">
            That route doesn&apos;t exist. It may have moved, or never did.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">Writeups</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
