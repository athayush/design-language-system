import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "./Banner";


const meta = {
  title: "homepage/banner/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};