import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";


const meta = {
  title: "homepage/tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};