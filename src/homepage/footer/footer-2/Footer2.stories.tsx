import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer2 } from "./Footer2";


const meta = {
  title: "homepage/footer/Footer2",
  component: Footer2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer2>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};