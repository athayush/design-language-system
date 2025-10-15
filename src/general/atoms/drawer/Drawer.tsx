import type { LucideIcon } from "lucide-react";
import type { Drawer as DrawerPrimitive } from "vaul";
import { CircleX } from "lucide-react";
import React from "react";

import { useDrawerStore } from "@/store/drawerStore"
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  Drawer as DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export { DrawerClose };

type DrawerProps = {
  id: string;
  title: string;
  triggerLabel?: string;
  removeCloseBtn?: boolean;
  description?: string;
  icon?: LucideIcon;
  iconSize?: number;
  button?: Omit<React.ComponentProps<typeof Button>, "className">;
  className?: {
    dialog?: string;
    btn?: string;
    icon?: string;
    scroll?: string;
    trigger?: string;
    content?: string;
  };
} & React.ComponentProps<typeof DrawerPrimitive.Root>;

export function Drawer({ id, title, className, iconSize, triggerLabel, description, button, icon, children, removeCloseBtn = false }: DrawerProps) {
  const { isOpen, openDrawer, closeDrawer } = useDrawerStore();
  const IconComp = icon;

  return (
    <DrawerRoot open={isOpen(id)} onOpenChange={open => (open ? openDrawer(id) : closeDrawer(id))}>
      {icon && !triggerLabel
          ? (
              <DrawerTrigger asChild className={cn("", className?.trigger)}>
                <Button {...button} className={cn("", className?.btn)}>
                  {IconComp ? <IconComp size={iconSize} className={cn("", className?.icon)} /> : null}
                </Button>
              </DrawerTrigger>
            )
          : triggerLabel
            ? (
                <DrawerTrigger asChild className={cn("", className?.trigger)}>
                  <Button {...button} className={cn("", className?.btn)}>
                    {IconComp ? <IconComp className={cn("", className?.icon)} /> : null}
                    {triggerLabel}
                  </Button>
                </DrawerTrigger>
              )
            : null}
      <DrawerContent className={cn("pt-2", className?.content)} onClick={e => e.stopPropagation()}>
        {removeCloseBtn
          ? (
              <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                {description && (
                  <DrawerDescription>{description}</DrawerDescription>
                )}
              </DrawerHeader>
            )
          : (
              <div className="flex items-center justify-between gap-4 px-4 pt-2 pb-4">
                <DrawerHeader className="gap-0 p-0">
                  <DrawerTitle className="text-on-surface">{title}</DrawerTitle>
                  {description && (
                    <DrawerDescription>
                      {description}
                    </DrawerDescription>
                  )}
                </DrawerHeader>
                <DrawerClose>
                  <CircleX size={24} />
                </DrawerClose>
              </div>
            )}
        <Separator className="px-4" />
        <ScrollArea className={cn("h-80", className?.scroll)}>
          {children}
        </ScrollArea>
      </DrawerContent>
    </DrawerRoot>
  );
}
