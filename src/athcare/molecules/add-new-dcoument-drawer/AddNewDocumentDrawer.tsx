import { Button } from "@/general/atoms/button/Button"; 
import { Drawer, DrawerClose } from "@/general/atoms/drawer/Drawer"
import { Section } from "@/general/atoms/section/Section"; 
import { MultiImageUploader } from "@/general/atoms/multi-image-uploader/MultiImageUploader";
import { ImagePlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FileWithPreview } from "@/hooks/use-file-upload";


export type AddNewDocumentDrawerProps = {
  parentFolderId?: number;
  folderStats?: {
    folderCount: number;
    fileCount: number;
    totalSizeBytes: number;
  };
  classname?: {
    button?: string;
  };
};

export function AddNewDocumentDrawer({
  classname,
}: AddNewDocumentDrawerProps) {

  const handleFilesAdded = async (addedFiles: FileWithPreview[]) => {
    console.log("Files added:", addedFiles.map(f => f.id));
    await new Promise(r => setTimeout(r, 1000));
    alert(`${addedFiles.length} file(s) uploaded successfully!`);
  };

  return (
    <Drawer
      id="new-document"
      title="Add New Document"
      description="Add new document or folder."
      icon={ImagePlusIcon}
      iconSize={20}
      button={{variant: "primary", size: "sm"}}
      className={{
        content: "h-[74vh]",
        scroll: "h-full pb-36",
        btn: cn("rounded-full size-14 shadow-xl", classname?.button),
      }}
    >
      <Section className={{ section: "mt-5 mx-5 grid gap-6" }}>
        <MultiImageUploader
          initialFiles={[]}
          accepts="image/*,application/pdf"
          maxFiles={5}
          handleFilesAdded={handleFilesAdded}
          className={{
            dropArea: "min-h-64 border-dashed border-2 border-gray-300",
          }}
        />
      </Section>
      <div className="fixed bottom-0 z-50 inset-x-0 m-0 p-0 h-fit flex flex-row">
        <DrawerClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="w-full rounded-none h-14"
          >
            Close Upload Drawer
          </Button>
        </DrawerClose>
      </div>
    </Drawer>
  );
}