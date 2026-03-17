import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { Bell, Heart } from "lucide-react";

const meta: Meta<typeof Icon> = {
  title: "design-tokens/Icon",
  component: Icon,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: Bell,
  },
};

export const WithTitle: Story = {
  args: {
    icon: Heart,
    title: "Favorites",
  },
};
