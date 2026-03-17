import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductShowcaseDialog } from "./ProductShowcaseDialog";


const meta = {
  title: "homepage/cards/ProductShowcaseDialog",
  component: ProductShowcaseDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductShowcaseDialog>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};