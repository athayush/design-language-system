import type { Meta, StoryObj } from "@storybook/react-vite";
import { CasePage } from "./CasePage";

const meta: Meta<typeof CasePage> = {
  title: "Pages/CasePage",
  component: CasePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CasePage>;

export const Default: Story = {
  render: () => <CasePage />,
};