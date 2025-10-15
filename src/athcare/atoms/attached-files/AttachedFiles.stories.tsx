import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttachedFiles } from "./AttachedFiles";
import { Button } from "@/general/atoms/button/Button";

const meta: Meta<typeof AttachedFiles> = {
  title: "athcare/atoms/AttachedFiles",
  component: AttachedFiles,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fileNumber: {
      control: "number",
      description: "Number of files attached by the user",
    },
    children: {
      control: false,
      description: "Trigger element for opening the drawer",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AttachedFiles>;

export const Default: Story = {
  args: {
    fileNumber: 3,
    children: <Button variant="outline">View Attached Files</Button>,
  },
  render: (args) => (
    <AttachedFiles {...args}>
      {args.children}
    </AttachedFiles>
  ),
};