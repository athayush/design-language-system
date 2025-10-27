import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ShadowVariant =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "inner"
  | "outline"
  | "elevated"
  | "card"
  | "button"
export type ShadowProps = {
  variant: ShadowVariant;
  size?: number;
  label?: boolean;
}

export function Shadow({ variant, size = 120, label = true }: ShadowProps) {
  const shadowClass = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    outline: "shadow-[0_0_0_2px_rgba(0,0,0,0.1)]",
    elevated: "shadow-elevated",
    card : "shadow-card",
    button : "shadow-button"
  }[variant];

  return (
    <div className="flex flex-col items-center space-y-2">
      <Card
        className={cn(
          "bg-background border border-border rounded-lg transition-all",
          shadowClass
        )}
        style={{
          width: size,
          height: size,
        }}
      />
      {label && (
        <span className="text-sm text-muted-foreground font-mono">{variant}</span>
      )}
    </div>
  );
}