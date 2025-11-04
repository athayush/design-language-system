import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  name: string;
  profileUrl: string;
  altText?: string;
  progress?: number; 
  className?: {
    wrapper?: string;
    avatar?: string;
    image?: string;
    fallback?: string;
  };
} & Omit<React.ComponentProps<typeof Avatar>, "className">;

export function UserAvatar({
  name,
  profileUrl,
  altText,
  progress,
  className,
  ...props
}: UserAvatarProps) {
  const initials = (name: string) =>
    name
      .split(" ")
      .map(n => n.slice(0, 1))
      .join("");

  const avatarEl = (
    <Avatar
      className={cn("w-20 h-20 rounded-full overflow-hidden", className?.avatar)}
      {...props}
    >
      <AvatarImage
        src={profileUrl}
        alt={altText}
        className={cn("object-cover w-full h-full rounded-full", className?.image)}
      />
      <AvatarFallback
        className={cn(
          "bg-secondary-container text-on-secondary-container flex items-center justify-center w-full h-full text-lg font-medium",
          className?.fallback
        )}
      >
        {initials(name)}
      </AvatarFallback>
    </Avatar>
  );

  // If no progress, return normal avatar
  if (typeof progress !== "number") {
    return avatarEl;
  }

  // If progress is provided, wrap with progress border
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[3px] transition-all duration-300",
        className?.wrapper
      )}
      style={{
        background: `conic-gradient(#facc15 ${progress}%, #e5e7eb ${progress}%)`,
      }}
    >
      {avatarEl}

      {/* Progress Label */}
      <div className="absolute -bottom-1 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full shadow">
        {progress}%
      </div>
    </div>
  );
}