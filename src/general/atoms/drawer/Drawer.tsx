import type { LucideIcon } from "lucide-react";
import type { Drawer as DrawerPrimitive } from "vaul";
import { CircleX } from "lucide-react";
import React from "react";

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
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
  trigger?: React.ReactNode;
} & Omit<React.ComponentProps<typeof DrawerPrimitive.Root>, "open" | "onOpenChange">;

export function Drawer({
  open,
  onOpenChange,
  title,
  className,
  iconSize,
  triggerLabel,
  description,
  button,
  icon: IconComp,
  children,
  trigger,
  removeCloseBtn = false,
}: DrawerProps) {
  return (
    <DrawerRoot open={open} onOpenChange={onOpenChange}>
      {trigger
        ? (
          <DrawerTrigger asChild className={cn("", className?.trigger)}>
            {trigger}
          </DrawerTrigger>
        )
        : IconComp && !triggerLabel
          ? (
            <DrawerTrigger asChild className={cn("", className?.trigger)}>
              <Button {...button} className={cn("", className?.btn)}>
                <IconComp size={iconSize} className={cn("", className?.icon)} />
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
              {description && <DrawerDescription>{description}</DrawerDescription>}
            </DrawerHeader>
          )
          : (
            <div className="flex items-center justify-between gap-4 px-4 pt-2 pb-4">
              <DrawerHeader className="gap-0 p-0">
                <DrawerTitle className="text-on-surface">{title}</DrawerTitle>
                {description && <DrawerDescription>{description}</DrawerDescription>}
              </DrawerHeader>
              <DrawerClose>
                <CircleX size={24} />
              </DrawerClose>
            </div>
          )}

        <Separator className="px-4" />
        <ScrollArea className={cn("h-80", className?.scroll)}>{children}</ScrollArea>
      </DrawerContent>
    </DrawerRoot>
  );
}
