import { cn } from "@/lib/utils";

export type RadiusVariant =
  | "none"
  | "md"
  | "lg"
  | "full";

export type BorderRadiusProps = {
  variant: RadiusVariant;
  size?: number; 
  label?: boolean; 
}

export function BorderRadius({ variant, size = 80, label = true }: BorderRadiusProps) {
  const radiusClass = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[variant];

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={cn("bg-primary border border-border transition-all ", radiusClass)}
        style={{ width: size, height: size }}
      />
      {label && (
        <span className="text-sm text-muted-foreground font-mono">{variant}</span>
      )}
    </div>
  );
}