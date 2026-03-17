import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlassIconCard } from "./GlassIconCard";


const meta = {
  title: "homepage/cards/GlassIconCard",
  component: GlassIconCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlassIconCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};