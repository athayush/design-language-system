import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandableCardsCarousel } from "./ExpendableCardsCarousel";


const meta = {
  title: "homepage/carousels/ExpandableCardsCarousel",
  component: ExpandableCardsCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExpandableCardsCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};