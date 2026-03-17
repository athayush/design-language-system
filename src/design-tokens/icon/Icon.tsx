import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Rounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

type IconProps = {
  /** Lucide icon component */
  icon?: LucideIcon;
  /** Optional label below the icon */
  title?: string;
  /** Border radius variant */
  rounded?: Rounded;
  /** Optional class names for fine control */
  className?: {
    container?: string;
    icon?: string;
    title?: string;
  };
} & Omit<React.ComponentProps<"div">, "className">;

export function Icon({
  icon: IconComp,
  title,
  rounded = "full",
  className,
  children,
  ...props
}: IconProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        data-slot="icon-container"
        className={cn(
          `rounded-${rounded} inline-flex items-center justify-center p-2 bg-[#FFD54F] text-[#4C729A]`,
          className?.container
        )}
        {...props}
      >
     {IconComp ? <IconComp className={cn(className?.icon)} /> : children}
      </div>

      {title && (
        <p
          className={cn(
            "text-xs text-center text-foreground mt-1",
            className?.title
          )}
        >
          {title}
        </p>
      )}
    </div>
  );
}