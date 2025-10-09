import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

type TClassName = React.HTMLAttributes<HTMLElement>["className"];


import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { badgeVariants } from "./badgeVariants"

import { cn } from "@/lib/utils"; 

type BadgeProps = {
  asChild?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  dot?: boolean;
  className?: {
    badge?: TClassName;
    icon?: TClassName;
    dot?: TClassName;
  };
} & Omit<React.ComponentProps<"span">, "className"> &
VariantProps<typeof badgeVariants>;

export function Badge({
  className,
  children,
  variant,
  asChild = false,
  iconLeft,
  iconRight,
  dot,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  const LeftIcon = iconLeft;
  const RightIcon = iconRight;

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className?.badge)}
      {...props}
    >
      {dot
        ? (
            <span
              className={cn("size-1.5 rounded-full bg-emerald-500", className?.dot)}
              aria-hidden="true"
            >
            </span>
          )
        : null}

      {LeftIcon
        ? (
            <LeftIcon
              className={cn("-ms-0.75 opacity-60", className?.icon)}
              size={12}
              aria-hidden="true"
            />
          )
        : null}

      {children}

      {RightIcon
        ? (
            <RightIcon
              className={cn("-me-0.75 opacity-60", className?.icon)}
              size={12}
              aria-hidden="true"
            />
          )
        : null}
    </Comp>
  );
}
