import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilePreview } from "./FilePreview";

const meta: Meta<typeof FilePreview> = {
  title: "athcare/atoms/FilePreview",
  component: FilePreview,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isFileKey: {
      control: "boolean",
      description: "Whether src is an S3 key (true) or a direct URL (false)",
    },
    src: {
      control: "text",
      description: "File source (image URL, pdf key, etc.)",
    },
    className: {
      control: "text",
      description: "Custom Tailwind classes for styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilePreview>;

export const ImagePreview: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    isFileKey: false,
    className: "w-40 rounded-lg shadow-md",
  },
};

export const PdfPreview: Story = {
  args: {
    src: "example.pdf",
    isFileKey: true,
    className: "w-40",
  },
};

export const EmptyPreview: Story = {
  args: {
    src: "",
    isFileKey: false,
    className: "w-40 border border-dashed border-gray-400",
  },
};