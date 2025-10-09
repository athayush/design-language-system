import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/internal/test";

import { Button } from "./Button"

const meta = {
  title: "general/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["elevated", "primary", "secondary", "accent", "error", "primaryContainer", "secondaryContainer", "accentContainer", "errorContainer", "outline", "ghost", "link"] },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    children: { control: "text" }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: "elevated",
    size: "default",
    children: "Button",
    asChild: false
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
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

export const Accent: Story = {
  args: {
    variant: "accent",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const Error: Story = {
  args: {
    variant: "error",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const PrimaryContainer : Story = {
  args: {
    variant: "primaryContainer",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const SecondaryContainer: Story = {
  args: {
    variant: "secondaryContainer",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const AccentContainer: Story = {
  args: {
    variant: "accentContainer",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const ErrorContainer: Story = {
  args: {
    variant: "errorContainer",
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

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Button",
    asChild: false
  }
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Button",
    asChild: false
  }
};
