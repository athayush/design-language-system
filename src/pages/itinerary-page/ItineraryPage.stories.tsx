import type { Meta, StoryObj } from "@storybook/react-vite";
import { ItineraryPage } from "./ItineraryPage";


const meta = {
  title: "Pages/ItineraryPage",
  component: ItineraryPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItineraryPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};