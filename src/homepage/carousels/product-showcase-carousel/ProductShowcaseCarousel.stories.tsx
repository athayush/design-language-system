import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductShowcaseCarousel } from "./ProductShowcaseCarousel";


const meta = {
  title: "homepage/carousels/ProductShowcaseCarousel",
  component: ProductShowcaseCarousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductShowcaseCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};