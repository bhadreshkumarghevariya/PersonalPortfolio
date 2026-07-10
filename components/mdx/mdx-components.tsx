import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

// Custom element renderers for MDX content. Prose styling comes from the
// `prose` wrapper on the post page; these handle behavior (e.g. internal links).
export const mdxComponents = {
  a: ({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};
