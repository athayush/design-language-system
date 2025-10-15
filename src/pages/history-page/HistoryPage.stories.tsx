import type { Meta, StoryObj } from "@storybook/react-vite";
import { HistoryPage } from "./HistoryPage";


const meta = {
  title: "Pages/HistoryPage",
  component: HistoryPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HistoryPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};