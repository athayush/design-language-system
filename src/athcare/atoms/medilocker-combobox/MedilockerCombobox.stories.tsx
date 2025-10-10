import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ellipsis, Settings, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button"; 
import { MediLockerCombobox } from "./MedilockerCombobox";

const meta = {
  title: "athcare/atoms/MediLockerCombobox",
  component: MediLockerCombobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
    },
    children: {
      control: false,
    },
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the popover or drawer.",
    },
    className: {
      control: "text",
    },
    setIsOpen: { action: "setIsOpen" },
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = React.useState(args.isOpen || false);

    const handleOpenChange = (open: boolean) => {
      args.setIsOpen(open); 
      setIsOpen(open); 
    };

    return (
      <MediLockerCombobox
        {...args}
        isOpen={isOpen}
        setIsOpen={handleOpenChange}
      >
        {args.children}
      </MediLockerCombobox>
    );
  },
} satisfies Meta<typeof MediLockerCombobox>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleMenu = (
  <div className="flex flex-col space-y-1 p-2">
    <Button variant="ghost" className="w-full justify-start font-normal">
      Edit
    </Button>
    <Button variant="ghost" className="w-full justify-start font-normal">
      Share
    </Button>
    <Button
      variant="ghost"
      className="w-full justify-start font-normal text-red-500 hover:text-red-600"
    >
      Delete
    </Button>
  </div>
);

export const Default: Story = {
  args: {
    icon: Ellipsis,
    children: SampleMenu,
    isOpen: false,
    setIsOpen: () => {}
  },
};

export const WithSettingsIcon: Story = {
  args: {
    icon: Settings,
    children: SampleMenu,
    isOpen: false,
    setIsOpen: () => {}
  },
};

export const WithDifferentChildren: Story = {
  args: {
    icon: Ellipsis,
    setIsOpen: () => {},
    children: (
      <div className="p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Are you sure you want to delete this?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="error" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    ),
    isOpen: false,
  },
};