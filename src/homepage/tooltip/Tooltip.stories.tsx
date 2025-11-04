import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Info, HelpCircle } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Text to display inside the tooltip",
    },
    triggerIcon: {
      control: false,
      description: "Lucide icon component used as the trigger",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip",
  },
};

export const WithInfoIcon: Story = {
  args: {
    triggerIcon: Info,
    content: "Information tooltip with Info icon",
  },
};

export const WithHelpCircleIcon: Story = {
  args: {
    triggerIcon: HelpCircle,
    content: "Tooltip using HelpCircle icon",
  },
};