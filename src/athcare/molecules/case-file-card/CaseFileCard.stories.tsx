import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaseFileCard } from "./CaseFileCard";

const meta: Meta<typeof CaseFileCard> = {
  title: "athcare/atoms/CaseFileCard",
  component: CaseFileCard,
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "radio",
      options: ["Grid", "List"],
    },
    isFileKey: {
      control: "boolean",
    },
    src: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseFileCard>;


export const ListLayout: Story = {
  args: {
    src: "user-uploads/test-report.pdf",
    layout: "List",
    isFileKey: true,
  },
};

export const GridLayout: Story = {
  args: {
    src: "documents/x-ray-image.png",
    layout: "Grid",
    isFileKey: true,
  },
};

export const ImagePreview: Story = {
  args: {
    src: "/images/sample-image.jpg",
    layout: "Grid",
    isFileKey: false,
  },
};

export const EmptySrc: Story = {
  args: {
    src: "",
    layout: "Grid",
    isFileKey: true,
  },
};