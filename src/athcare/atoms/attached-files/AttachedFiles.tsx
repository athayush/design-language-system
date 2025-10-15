import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleX } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CaseFileCard } from "@/athcare/molecules/case-file-card/CaseFileCard";


function AttachedFiles({
  children,
  fileNumber,
}: { children: React.ReactNode; fileNumber: number }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="pt-2">
        <div className="flex items-center justify-between gap-4 px-4 pt-2 pb-4">
          <DrawerHeader className="gap-0 p-0">
            <DrawerTitle>Attached Files:</DrawerTitle>
            <DrawerDescription>
              You have attached
              {" "}
              {fileNumber}
              {" "}
              files while booking.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerClose>
            <CircleX size={24} />
          </DrawerClose>
        </div>
        <Separator className="px-4" />
        <div className="grid grid-cols-3 gap-3 p-4">
          <CaseFileCard src="" layout="Grid" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export {AttachedFiles}