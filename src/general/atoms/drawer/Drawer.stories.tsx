import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "./Drawer";

const meta = {
  title: "general/atoms/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    triggerLabel: { control: "text" },
    removeCloseBtn: { control: "boolean" },
    description: { control: "text" },
    icon: { control: "text" },
    iconSize: { control: "number" },
    button: { control: "text" },
    className: { control: "object" },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id : "demo-drawer",
    title: "Drawer Title",
    description: "This is a sample drawer for demonstration.",
    triggerLabel: "Open Drawer"
  },
  render: (args) => <Drawer {...args} />,
};