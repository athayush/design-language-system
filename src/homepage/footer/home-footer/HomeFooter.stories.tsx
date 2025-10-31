import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeFooter } from "./HomeFooter";


const meta = {
  title: "homepage/footer/HomeFooter",
  component: HomeFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeFooter>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};