import type { LucideIcon } from "lucide-react";

import { EllipsisIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type FolderComboboxProps = {
  icon: LucideIcon;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
};

export function MediLockerCombobox({ icon = EllipsisIcon, isOpen, setIsOpen, children, className }: FolderComboboxProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const Icon = icon;

  if (isDesktop) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className={cn("p-0 cursor-pointer", className)}>
            <Icon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          {children}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className={cn("p-0 ", className)}>
          <Icon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
