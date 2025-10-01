import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/internal/test";

import { Button } from "../../components/ui/button";

const meta = {
  title: "atoms/core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "outline", "destructive", "ghost", "link"] },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    children: { control: "text" }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    asChild: false
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Button",
    asChild: false
  },
};

export const Error: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Button",
    asChild: false
  }
};
