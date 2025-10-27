import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner1 } from "./Banner1";


const meta = {
  title: "homepage/banner/Banner1",
  component: Banner1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner1>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};