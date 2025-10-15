import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiImageUploader } from "./MultiImageUploader";
import { fn } from "storybook/internal/test";
import type { FileWithPreview } from "@/hooks/use-file-upload";

const meta = {
  title: "general/atoms/MultiImageUploader",
  component: MultiImageUploader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialFiles: {
      control: { type: "object" },
      description: "Array of initial file metadata",
    },
    className: { control: "object" },
    accepts: { control: "text" },
    maxFiles: { control: "number" },
    maxSizeMB: { control: "number" },
  },
  args: {
    handleFilesAdded: fn<(files: FileWithPreview[]) => void>(),
  },
} satisfies Meta<typeof MultiImageUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialFiles: [
      {
        id: "1",
        url: "",
        name: "example1.png",
        size: 12345,
        type: "image/png",
      },
      {
        id: "2",
        url: "",
        name: "example2.jpg",
        size: 23456,
        type: "image/jpeg",
      },
    ],
    accepts: "image/*",
    maxFiles: 6,
    maxSizeMB: 5,
  },
  render: (args) => (
    <MultiImageUploader
      {...args}
      handleFilesAdded={(files) => console.log("Files added:", files)}
    />
  ),
};