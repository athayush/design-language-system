import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export function Navbar({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <>
      <div className="h-12 w-full" />
      <div className="fixed bottom-0 inset-x-4 z-10 m-4">
        <nav
          className={cn(
            "mx-auto flex h-12 max-w-xl justify-around rounded-full border-none bg-surface-container text-on-surface shadow-2xl",
            className,
          )}
          {...props}
        />
      </div>
    </>
  );
}

type NavSheetItemProps = Omit<React.ComponentProps<"div">, "children"> & {
  icon?: LucideIcon;
};

export function NavbarSheetItem({ icon = Star, className, ...props }: NavSheetItemProps) {
  const IconComp = icon;

  return (
    <div
      className={cn("flex w-full items-center justify-center gap-2 p-3", className)}
      {...props}
    >
      <IconComp size={18} />
    </div>
  );
}

type NavbarItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: LucideIcon;
  isActive?: boolean;
};

export function NavbarItem({
  icon = Star,
  isActive,
  className,
  children,
  ...props
}: NavbarItemProps) {
  const IconComp = icon;

  return (
    <a
      data-active={isActive ? "true" : "false"}
      className={cn(
        "group flex w-full items-center justify-center gap-2",
        isActive && "rounded-full bg-secondary-container font-bold text-on-secondary-container",
        className,
      )}
      {...props}
    >
      <IconComp size={18} />
      <p className="mt-0.5 hidden text-xs md:group-data-[active='true']:block">
        {children}
      </p>
    </a>
  );
}