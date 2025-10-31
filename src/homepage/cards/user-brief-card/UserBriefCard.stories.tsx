import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserBriefCard } from "./UserBriefCard";


const meta = {
  title: "homepage/cards/UserBriefCard",
  component: UserBriefCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserBriefCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};