import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShowcaseCenteredCarousel } from "./CenteredCarousel";


const meta = {
  title: "homepage/carousels/CenteredCarousel",
  component: ShowcaseCenteredCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShowcaseCenteredCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};