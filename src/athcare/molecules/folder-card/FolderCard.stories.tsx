import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { action } from 'storybook/actions';
import { FolderCard, type FolderCardProps } from "./FolderCard"; 
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EllipsisIcon, EllipsisVerticalIcon, FolderIcon } from "lucide-react";
import { MediLockerCombobox } from "@/athcare/atoms/medilocker-combobox/MedilockerCombobox";

const meta = {
  title: "athcare/molecules/FolderCard",
  component: FolderCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    folderCount: { control: "number" },
    fileCount: { control: "number" },
    totalSizeBytes: { control: "number" },
    mockMode: { control: "boolean" },
    onRename: { action: "rename" },
    onDelete: { action: "delete" },
    viewStyle: {
      control: { type: "radio" },
      options: ["Grid", "List"],
      description: "Controls the layout style of the card. (This is a story-only prop to showcase both component layouts).",
    },
  },
  render: (args) => {
    const formatBytes = (bytes: number, decimals = 2) => {
      if (!+bytes) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };

    const InteractiveFolderCard = ({ view, ...props }: FolderCardProps & { view: 'Grid' | 'List' }) => {
      const [isOpen, setIsOpen] = React.useState(false);

      const FolderMenu = () => (
        <Command>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem onSelect={() => props.onRename?.("New Name")}>Rename Folder</CommandItem>
              <CommandItem onSelect={props.onDelete}>Delete Folder</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );

      if (view === "Grid") {
        return (
          <Card className="p-0 w-64 overflow-hidden hover:shadow-md relative border border-outline-variant/10">
            <div className="pt-10 px-3 pb-3 w-full relative bg-primary text-on-primary">
              <FolderIcon size={32} />
              <MediLockerCombobox
                icon={EllipsisIcon}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="aspect-square rounded-full absolute top-2 right-2"
              >
                <FolderMenu />
              </MediLockerCombobox>
            </div>
            <div className="block w-full">
              <CardHeader className="p-4 w-full text-start truncate">
                <CardTitle>{props.name}</CardTitle>
                <CardDescription className="text-on-surface-variant">
                  {`${props.folderCount + props.fileCount} items, ${formatBytes(props.totalSizeBytes)}`}
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        );
      }

      // List View
      return (
        <Card className="p-2 w-96 flex flex-row items-center justify-between hover:shadow-md relative border border-outline-variant/10">
          <div className="p-3 mr-4 rounded-full bg-primary text-on-primary">
            <FolderIcon />
          </div>
          <div className="flex-1 cursor-pointer w-full">
            <CardHeader className="p-0 w-full text-start truncate">
              <CardTitle>{props.name}</CardTitle>
              <CardDescription className="text-on-surface-variant">
                {`${props.folderCount + props.fileCount} items, ${formatBytes(props.totalSizeBytes)}`}
              </CardDescription>
            </CardHeader>
          </div>
          <CardFooter className="p-0">
            <MediLockerCombobox
              icon={EllipsisVerticalIcon}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              className="aspect-square rounded-full"
            >
              <FolderMenu />
            </MediLockerCombobox>
          </CardFooter>
        </Card>
      );
    };

    return <InteractiveFolderCard view="Grid" {...args} />;
  },
} satisfies Meta<typeof FolderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Mock Data ---
const defaultArgs: FolderCardProps & { view: 'Grid' | 'List' } = {
  id: 1,
  name: "Medical Records",
  path: "/medical-records",
  folderCount: 3,
  fileCount: 12,
  totalSizeBytes: 15728640, // 15 MB
  mockMode: false,
  onRename: action("onRename"),
  onDelete: action("onDelete"),
  view: "Grid",
};

// --- Stories ---

/**
 * The default grid view of the folder card. This is the primary layout.
 */
export const GridView: Story = {
  args: {
    ...defaultArgs,
    viewStyle: "Grid",
  },
};


export const ListView: Story = {
  args: {
    ...defaultArgs,
    viewStyle: "List",
  },
};

