import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge"
import { Home } from "lucide-react";

const meta = {
    title: "general/atoms/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
       asChild: {control: "boolean"},
       iconLeft: {control: "text"},
       iconRight: {control: "text"},
       dot: {control: "boolean"},
       variant: {control: "select", options: ["default", "secondary", "destructive", "outline", "digit"]}
    }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    asChild: false,
    children: "Badge"
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    asChild: false,
    children: "Badge"
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    asChild: false,
    children: "Badge"
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    asChild: false,
    children: "Badge"
  },
};

export const Digit: Story = {
  args: {
    variant: "digit",
    asChild: false,
    children: "Badge"
  },
};

export const DottedBadge: Story = {
  args: {
    variant: "default",
    asChild: false,
    children: "Badge",
    dot: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "default",
    asChild: false,
    iconLeft:Home,
    children: "Badge"
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "default",
    asChild: false,
    iconRight: Home,
    children: "Badge"
  },
};