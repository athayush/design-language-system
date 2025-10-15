import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserPreviewProfileCard } from "./UserPreviewProfileCard"

const meta = {
    title: "general/molecules/UserPreviewProfileCard",
    component: UserPreviewProfileCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        name: { control: "text" },
        username: { control: "text" },
        email: { control: "text" },
        avatar: { control: "text" },
        subscription: { control: "text" },
        healthScore: { control: "number" },
        children: { control: "text" }
    }
} satisfies Meta<typeof UserPreviewProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "Ankush Kumar",
        username: "ankushh_19",
        avatar: "https://i.pravatar.cc/300",
        email: "ankush@g.com",
        subscription: "Basic",
        healthScore: 70,
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis"
    },
};