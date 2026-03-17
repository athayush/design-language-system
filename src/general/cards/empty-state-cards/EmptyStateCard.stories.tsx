import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyStateCard } from "./EmptyStateCard";


const meta = {
  title: "general/cards/EmptyStateCard",
  component: EmptyStateCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyStateCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};