import { cn } from "@/lib/utils"; 

export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  hTag?: HeadingTags;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ hTag = "h1", className, ...props }: HeadingProps) {
  const HeadingComp = hTag;

  return (
    <HeadingComp
      className={cn(
        "text-balance font-semibold text-3xl text-current",
        className,
      )}
      {...props}
    />
  );
}
