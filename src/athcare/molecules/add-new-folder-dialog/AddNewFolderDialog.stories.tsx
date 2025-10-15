import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { action } from "storybook/actions";

import { AddNewFolderDialog } from "./AddNewFolderDialog"; 


const meta = {
  title: "athcare/molecules/AddNewFolderDialog",
  component: AddNewFolderDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the dialog.",
    },
    value: {
      control: "text",
      description: "The current value of the folder name input.",
    },
    isLoading: {
      control: "boolean",
      description: "Disables the 'Create' button and shows a loading state.",
    },
    onOpenChange: { action: "onOpenChange" },
    onValueChange: { action: "onValueChange" },
    onCreate: { action: "onCreate" },
  },
  render: function Render(args) {
    const [open, setOpen] = React.useState(args.open);
    const [value, setValue] = React.useState(args.value);
    const [isLoading, setIsLoading] = React.useState(args.isLoading);

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      args.onOpenChange?.(newOpen);
      if (!newOpen) {
        setValue("Untitled folder"); 
        setIsLoading(false);
      }
    };

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      args.onValueChange?.(newValue);
    };

    const handleCreate = async () => {
      setIsLoading(true);
      args.onCreate?.();
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
      setOpen(false);
      setValue("Untitled folder");
    };

    return (
      <AddNewFolderDialog
        {...args}
        open={open}
        onOpenChange={handleOpenChange}
        value={value}
        onValueChange={handleValueChange}
        onCreate={handleCreate}
        isLoading={isLoading}
      />
    );
  },
} satisfies Meta<typeof AddNewFolderDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: false,
  value: "Untitled folder",
  isLoading: false,
  onOpenChange: action("onOpenChange"),
  onValueChange: action("onValueChange"),
  onCreate: action("onCreate"),
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const OpenWithDefaultName: Story = {
  args: {
    ...defaultArgs,
    open: true,
    value: "My New Folder",
  },
};

export const OpenWithEmptyName: Story = {
  args: {
    ...defaultArgs,
    open: true,
    value: "",
  },
};

export const OpenAndLoading: Story = {
  args: {
    ...defaultArgs,
    open: true,
    value: "Loading Folder",
    isLoading: true,
  },
};