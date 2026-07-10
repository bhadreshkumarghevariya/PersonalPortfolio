import * as React from "react";

/**
 * Minimal Slot: merges its own props (className, event handlers, etc.) onto a
 * single child element. Covers the `asChild` pattern without pulling in a
 * dependency, since we only ever slot onto anchors/buttons.
 */
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...slotProps }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;
    const childProps = child.props;

    const mergedClassName = [slotProps.className, childProps.className as string]
      .filter(Boolean)
      .join(" ");

    return React.cloneElement(child, {
      ...slotProps,
      ...childProps,
      className: mergedClassName || undefined,
      ref,
    });
  },
);
Slot.displayName = "Slot";
