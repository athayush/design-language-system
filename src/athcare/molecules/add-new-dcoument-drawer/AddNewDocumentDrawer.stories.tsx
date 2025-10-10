import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddNewDocumentDrawer } from "./AddNewDocumentDrawer";

const meta = {
  title: "athcare/molecules/AddNewDocumentDrawer",
  component: AddNewDocumentDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    parentFolderId: {
      control: { type: "number" },
      description: "ID of the parent folder",
    },
    folderStats: {
      control: { type: "object" },
      description: "Statistics about the folder (counts, sizes, etc.)",
    },
    classname: {
      control: { type: "object" },
      description: "Custom classNames for styling elements (e.g. button)",
    },
  },
  args: {
    parentFolderId: 1,
    folderStats: {
      folderCount: 3,
      fileCount: 12,
      totalSizeBytes: 12345678,
    },
    classname: {
      button: "bg-blue-500 text-white",
    },
  },
} satisfies Meta<typeof AddNewDocumentDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    parentFolderId: 1,
    folderStats: {
      folderCount: 12,
      fileCount: 3,
      totalSizeBytes: 123,
    },
    classname: {
      button: "bg-blue-500 text-white",
    },
  },
};