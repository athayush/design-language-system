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
import { Icon } from "@/design-tokens/icon/Icon";

type AddNewFolderDialogProps = {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onValueChange: (value: string) => void;
  onCreate?: () => void;
  isLoading?: boolean;
};

export function AddNewFolderDialog({
  open = false,
  onOpenChange,
  value,
  onValueChange,
  onCreate,
  isLoading = false,
}: AddNewFolderDialogProps) {
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" >
          <Icon className={{ container: "bg-tertiary/15 p-3 shadow-sm hover:g-tertiary/15 hover:p-3 hover:shadow-sm", icon: "size-6" }} icon={FolderPlusIcon} />
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
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
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