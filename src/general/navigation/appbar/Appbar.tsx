import { Menu } from "lucide-react";
import { Avatar } from "@/general/atoms/avatar/Avatar"
import { cn } from "@/lib/utils"; 

export function AppBar({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "sticky inset-x-0 top-0 z-50 w-dvw text-on-surface shadow-2xs gap-4 border-b-2 bg-surface-container",
        className,
      )}
      {...props}
    />
  );
}

type AppBarHeaderProps = React.ComponentProps<"header"> & {
  title?: string;
  subTitle?: string;
  image?: React.ComponentProps<typeof Avatar>;
};

export function AppBarHeader({
  children,
  className,
  title,
  image,
  subTitle,
  ...props
}: AppBarHeaderProps) {
  return (
    <header
      className={cn("flex items-center gap-4 px-6 py-4", className)}
      {...props}
    >
      <Menu/>
      {
        title
          ? (
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {image && (
                    <Avatar
                      {...image}
                      className={{
                        ...image.className,
                        avatar: cn("size-10", image.className?.avatar),
                      }}
                    />
                  )}
                  <div>
                    <p
                      className={cn(
                        "font-semibold text-sm",
                        subTitle ? "line-clamp-1" : "line-clamp-2",
                      )}
                    >
                      {title}
                    </p>
                    {subTitle && <p className="text-xs leading-4 line-clamp-1">{subTitle}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {children}
                </div>
              </div>
            )
          : children
      }
    </header>
  );
}

export function AppBarSubMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center px-6 py-3", className)}
      {...props}
    />
  );
}
