import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserCombobox } from "./UserCombobox";

const meta = {
  title: "general/atoms/UserCombobox",
  component: UserCombobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    value: {control: "text"},
    children: { control: false },
  },
} satisfies Meta<typeof UserCombobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: "Ankush", label: "Ankush Kumar", profilePictureUrl: "https://i.pravatar.cc/300", relation: "Primary" }
    ],
    value: "Ankush",
    children: undefined, 
  },
};