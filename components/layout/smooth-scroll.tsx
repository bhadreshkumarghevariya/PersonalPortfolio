"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 80; // matches scroll-padding-top (5rem) / section scroll-mt-20

/** Jump instantly to `targetY`, overriding any CSS `scroll-behavior: smooth`. */
function jumpTo(targetY: number) {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  // Direct scrollTop assignment is the most reliable instant scroll across
  // engines (window.scrollTo can honor CSS smooth even mid-override).
  (document.scrollingElement ?? html).scrollTop = targetY;
  html.style.scrollBehavior = prev;
}

/**
 * Scroll the window to `targetY`.
 *
 * Real browsers get a native smooth animation. In environments that don't
 * run the animation (reduced-motion, or headless/throttled pages where
 * requestAnimationFrame never fires), a short timeout detects that the
 * scroll never moved and force-jumps to the target so navigation still
 * lands. The timeout is a no-op once a genuine smooth scroll is under way,
 * so it never cuts a real animation short.
 */
function scrollToTarget(targetY: number) {
  const startY = window.scrollY;
  if (Math.abs(targetY - startY) < 2) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    jumpTo(targetY);
    return;
  }

  window.scrollTo({ top: targetY, behavior: "smooth" });
  window.setTimeout(() => {
    if (Math.abs(window.scrollY - startY) < 2 && window.scrollY !== targetY) {
      jumpTo(targetY);
    }
  }, 150);
}

/**
 * Global handler for in-page anchor links (`#id` or `/#id`). Intercepts the
 * click, smooth-scrolls to the target, and updates the URL hash without a
 * navigation. Cross-page anchors (e.g. `/#about` from `/blog`) fall through
 * to the browser's default navigation.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href") ?? "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      const id = href.slice(hashIndex + 1);
      if (!id) return;

      // Only handle links that target the page we're already on.
      const samePage = path === "" || path === pathname || path === "/";
      if (!samePage || pathname !== "/") return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      scrollToTarget(Math.max(0, targetY));
      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
