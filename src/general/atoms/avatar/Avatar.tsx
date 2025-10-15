import { Avatar as AvatarCore, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils"; 

type AvatarProps = {
  name: string;
  profileUrl: string;
  altText?: string;
  className?: {
    avatar?: string;
    image?: string;
    fallback?: string;
  };
} & Omit<React.ComponentProps<typeof AvatarCore>, "className">;

export function Avatar({
  name,
  profileUrl,
  altText,
  className,
  ...props
}: AvatarProps) {
  const initials = (name: string) => {
    return name
      .split(" ")
      .map(n => n.slice(0, 1))
      .join("");
  };

  return (
    <AvatarCore className={className?.avatar} {...props}>
      <AvatarImage
        src={profileUrl}
        alt={altText}
        className={className?.image}
      />
      <AvatarFallback className={cn("bg-secondary-container text-on-secondary-container", className?.fallback)}>
        {initials(name)}
      </AvatarFallback>
    </AvatarCore>
  );
}
