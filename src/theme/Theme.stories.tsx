import type { Meta, StoryObj } from "@storybook/react-vite";
import { Theme } from "./Theme";

const meta: Meta<typeof Theme> = {
  title: "theme/Theme",
  component: Theme,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Theme>;

export const Default: Story = {
  args: {},
};