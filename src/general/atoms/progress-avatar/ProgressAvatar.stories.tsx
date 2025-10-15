import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressAvatar } from "./ProgressAvatar";

const meta = {
    title: "general/atoms/ProgressAvatar",
    component: ProgressAvatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
        src: {control: "text"},
        alt: {control: "text"},
        fallback: {control: "text"},
        progress: {control: "number"},
    }
} satisfies Meta<typeof ProgressAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User Avatar",
    fallback: "AK",
    progress: 70,
  },
};