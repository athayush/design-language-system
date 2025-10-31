import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpecialityDrawer } from "./SpecialityDrawer";


const meta = {
  title: "homepage/dialog/SpecialityDrawer",
  component: SpecialityDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpecialityDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};