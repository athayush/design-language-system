import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserPreviewCard } from "./UserPreviewCard"

const meta = {
    title: "general/molecules/UserPreviewCard",
    component: UserPreviewCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
       variant: {control: "select", options: ["primary", "list"]},
       name: {control: "text"},
       username: {control: "text"},
       info: {control: "text"},
       className: {control: "text"}
    }
} satisfies Meta<typeof UserPreviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    name: "Ankush Kumar",
    username: "ankushh_19",
    avatar: "https://i.pravatar.cc/300",
    info: "Frontend Developer"
  },
};

export const List: Story = {
  args: {
    variant: "list",
    name: "Ankush Kumar",
    username: "ankushh_19",
    avatar: "https://i.pravatar.cc/300",
    info: "Frontend Developer"
  },
};