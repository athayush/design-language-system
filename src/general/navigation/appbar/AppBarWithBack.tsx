import type { LucideIcon } from "lucide-react";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/general/atoms/button/Button"; 

import { AppBar } from "./Appbar"; 
import { Avatar } from "@/general/atoms/avatar/Avatar"; 
import { cn } from "@/lib/utils";

type AppBarWithBackProps = {
  title?: string;
  subTitle?: string;
  image?: React.ComponentProps<typeof Avatar>;
  icon?: LucideIcon;
} & React.ComponentProps<"nav">;

export function AppBarWithBack({
  title,
  subTitle,
  image,
  icon,
  children,
  ...props
}: AppBarWithBackProps) {

  const Icon = icon;

  return (
    <AppBar
      className="flex items-center justify-start h-16 px-4 py-3 max-h-16 w-full"
      {...props}
    >
      <Button
        variant="primaryContainer"
        className="bg-transparent text-on-surface-variant shadow-none border-none"
      >
        <ChevronLeft size={32} />
      </Button>
      {
        title
          ? (
              <div className="flex items-center w-full gap-3">
                {image && (
                  <Avatar
                    {...image}
                    className={{
                      ...image.className,
                      avatar: cn("size-10", image.className?.avatar),
                    }}
                  />
                )}
                {Icon && <Icon />}
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
            )
          : null
      }
      {children}
    </AppBar>
  );
}
