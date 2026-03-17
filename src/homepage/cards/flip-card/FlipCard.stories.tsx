import type { Meta, StoryObj } from "@storybook/react-vite";
import { FlipCard } from "./FlipCard";


const meta = {
  title: "homepage/cards/FlipCard",
  component: FlipCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlipCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};