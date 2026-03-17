import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type HighlightVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "destructive"
  | "muted";

export type HighlightProps = {
  children: ReactNode;
  variant?: HighlightVariant;
  underline?: boolean;
  className?: string;
  italic?: boolean;
}

export function Highlight({
  children,
  variant = "primary",
  underline = false,
  className,
  italic = false
}: HighlightProps) {
  const variantClass = {
    primary: "text-[#00695c] underline-offset-4 decoration-primary/50",
    secondary: "text-secondary underline-offset-4 decoration-secondary/50",
    success: "text-green-600 underline-offset-4 decoration-green-500/50",
    warning: "text-yellow-600 underline-offset-4 decoration-yellow-500/50",
    destructive: "text-red-600 underline-offset-4 decoration-red-500/50",
    muted: "text-muted-foreground underline-offset-4 decoration-muted-foreground/50",
  }[variant];

  return (
    <span
      className={cn(
        "font-medium",
        variantClass,
        underline && "underline",
        italic && "italic",
        className
      )}
    >
      {children}
    </span>
  );
}