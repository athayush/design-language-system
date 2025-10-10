import type { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "./Layout"; 


const meta = {
  title: "general/templates/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the layout.",
    },
    children: {
      control: "text",
      description: "The content to be displayed inside the layout.",
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    children: "This is the content inside the default Layout.",
    className: "p-4 bg-surface-container text-on-surface",
  },
};
