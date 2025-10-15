import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServicesSheet } from "./ServicesSheet";

const meta: Meta<typeof ServicesSheet> = {
  title: "catalog/atoms/ServicesSheet",
  component: ServicesSheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ServicesSheet>;

export const Default: Story = {
  render: () => <ServicesSheet />,
};