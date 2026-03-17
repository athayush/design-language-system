import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreateOrderPage } from "./CreateOrderPage";


const meta = {
  title: "Pages/CreateOrderPage",
  component: CreateOrderPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreateOrderPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};