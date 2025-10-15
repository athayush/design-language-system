import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
    title: "general/atoms/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
        name: {control: "text"},
        profileUrl: {control: "text"},
        altText: {control: "text"},
        className: {control: "object"},
    }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Ankush Kumar",
    profileUrl: "https://i.pravatar.cc/300",
    altText: "User Avatar",
  },
};