import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner2 } from "./Banner2";


const meta = {
  title: "homepage/banner/Banner2",
  component: Banner2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner2>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};