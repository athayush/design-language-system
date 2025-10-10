import { ChevronsUpDown, CircleX } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMediaQuery } from "@/hooks/use-media-query"; 
import { cn } from "@/lib/utils"; 
import { Avatar } from "@/general/atoms/avatar/Avatar";

type Option = {
  value: string;
  profilePictureUrl?: string;
  relation?: string;
  label: string;
};

type UserComboBoxProps = {
  options: Option[];
  value: string;
  triggerPlaceholder?: string;
  triggerClassName?: string;
  popoverClassName?: string;
  drawerClassName?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Button>, "children" | "className">;

export function UserCombobox({
  options,
  value,
  triggerPlaceholder = "Select option...",
  triggerClassName,
  popoverClassName,
  drawerClassName,
  children,
  ...props
}: UserComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    setOpen(false);
  }, [value]);

  const selectedOption = options.find(option => option.value === value);

  const renderSelectedOption = () => {
    if (!selectedOption)
      return triggerPlaceholder;
    return (
      <div className="flex items-center gap-2 py-2 bg-transparent">
        <Avatar name={selectedOption.label} profileUrl={selectedOption.profilePictureUrl ?? ""} className={{ avatar: "size-10 rounded-3xl", image: "rounded-3xl", fallback: "rounded-3xl" }} />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-sm font-medium">{selectedOption.label}</span>
          <span className="text-xs text-muted-foreground">{selectedOption.relation}</span>
        </div>
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="h-12 bg-transparent" asChild>
          <Button variant="ghost" className={cn("w-[200px] justify-between bg-transparent", triggerClassName)} {...props}>
            {renderSelectedOption()}
            <ChevronsUpDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-[250px] p-0 z-100 bg-surface-container", popoverClassName)} align="start">
          {children}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="h-12 bg-transparent" asChild>
        <Button variant="ghost" className={cn("w-[200px] justify-between bg-transparent", triggerClassName)} {...props}>
          {renderSelectedOption()}
          <ChevronsUpDown />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex items-center justify-between gap-4 px-4">
          <DrawerHeader className="gap-0 p-0">
            <DrawerTitle className="text-on-surface">Select User</DrawerTitle>
          </DrawerHeader>
          <DrawerClose>
            <CircleX size={24} />
          </DrawerClose>
        </div>
        <div className={cn("mt-4 border-t bg-surface-container", drawerClassName)}>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
