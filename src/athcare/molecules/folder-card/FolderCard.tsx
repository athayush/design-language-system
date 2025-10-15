import { FolderIcon, EllipsisIcon, EllipsisVerticalIcon } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

import { formatBytes } from "@/hooks/use-file-upload";
import { MediLockerCombobox } from "@/athcare/atoms/medilocker-combobox/MedilockerCombobox";


export type FolderCardProps = {
  id: number;
  name: string;
  path: string;
  folderCount: number;
  fileCount: number;
  totalSizeBytes: number;
  parentFolder?: {
    id: number;
    folderCount: number;
    fileCount: number;
    totalSizeBytes: number;
  };
  mockMode?: boolean;
  onRename?: (newName: string) => void;
  onDelete?: () => void;
  viewStyle?: "Grid" | "List"
};



export function FolderCard({
  name,
  folderCount,
  fileCount,
  totalSizeBytes,
  viewStyle = "Grid"
}: FolderCardProps) {

  const FolderMenu = () => (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem >Rename Folder</CommandItem>
          <CommandItem >Delete Folder</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );


  if (viewStyle === "List") {
    return (
    <Card className="px-4 flex-row items-center justify-between hover:shadow-md relative border border-outline-variant/10">
      <div className="p-4 rounded-4xl bg-primary text-on-primary">
        <FolderIcon />
      </div>
      <div className="cursor-pointer w-full">
        <CardHeader className="p-0 w-full text-start truncate">
          <CardTitle >{name}</CardTitle>
          <CardDescription className="text-on-surface-variant">
            {`${folderCount + fileCount} items, ${formatBytes(totalSizeBytes)}`}
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="p-0">
        <MediLockerCombobox
          icon={EllipsisVerticalIcon}
          isOpen={false}
          setIsOpen={() => {}}
          className="aspect-square rounded-full absolute top-2 right-2"
        >
          <FolderMenu />
        </MediLockerCombobox>
      </CardFooter>
    </Card>
    );
  }

  return (
      <Card className="p-0 w-full overflow-hidden hover:shadow-md relative border border-outline-variant/10">
        <div className="pt-10 px-3 pb-3 w-full relative bg-primary text-on-primary">
          <FolderIcon size={32} />
          <MediLockerCombobox
            icon={EllipsisIcon}
            isOpen={false}
            setIsOpen={() => {}}
            className="aspect-square rounded-full absolute top-2 right-2"
          >
            <FolderMenu />
          </MediLockerCombobox>
        </div>
        <div className="block w-full">
          <CardHeader className="p-4 w-full text-start truncate">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-on-surface-variant">
              {`${folderCount + fileCount} items, ${formatBytes(totalSizeBytes)}`}
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
  );
}
