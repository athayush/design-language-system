import type { Meta, StoryObj } from "@storybook/react-vite";
import { DoctorsPage } from "./DoctorsPage";

const meta = {
  title: "Pages/DoctorsPage",
  component: DoctorsPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DoctorsPage>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
};