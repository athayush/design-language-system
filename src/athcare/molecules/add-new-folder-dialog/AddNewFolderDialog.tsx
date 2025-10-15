import { FolderPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AddNewFolderDialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  value?: string;
  onValueChange: (value: string) => void;
  onCreate?: () => void;
  isLoading?: boolean;
};

export function AddNewFolderDialog({
  open,
  onOpenChange,
  value,
  onValueChange,
  onCreate,
  isLoading = false,
}: AddNewFolderDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="aspect-square size-12 rounded-full">
          <FolderPlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-start">
          <DialogTitle>New Folder</DialogTitle>
        </DialogHeader>
        <div className="grid flex-1 gap-2 pt-2">
          <Label htmlFor="folderName" className="sr-only">
            Folder Name
          </Label>
          <Input
            id="folderName"
            placeholder="Enter folder name"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
          />
        </div>
        
        <DialogFooter className="mt-4 flex w-full justify-end gap-3">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={onCreate} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}