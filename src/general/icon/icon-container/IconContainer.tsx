import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type IconContainerProps = {
  icon: LucideIcon;
  rounded? : "sm" | "md" | "lg" | "xl" | "full" | "none";
  className?: {
    icon?: string;
    container?: string;
    title?: string;
  };
  title?: string
};

export function IconContainer({
  icon: Icon,
  className,
  rounded = "full",
  title,
  ...props
}: IconContainerProps) {
  return (
    <>
    <div
      data-slot="icon-container"
      className={cn(
        `rounded-${rounded} items-center justify-center gap-1 p-2 bg-tertiary-container text-on-tertiary-container`,
        className?.container,
      )}
      {...props}
    >
      <Icon className={className?.icon} /> 
    </div>
    <p className={cn("text-xs text-center text-foreground", className?.title)}>{title}</p>
    </>
  );
}