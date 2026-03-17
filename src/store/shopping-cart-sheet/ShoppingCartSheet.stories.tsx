import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShoppingCartSheet } from "./ShoppingCartSheet";


const meta = {
  title: "Store/ShoppingCartSheet",
  component: ShoppingCartSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingCartSheet>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};