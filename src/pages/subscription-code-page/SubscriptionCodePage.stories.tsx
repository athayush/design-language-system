import type { Meta, StoryObj } from "@storybook/react-vite";
import { SubscriptionCodePage } from "./SubscriptionCodePage";


const meta = {
  title: "Pages/SubscriptionCodePage",
  component: SubscriptionCodePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SubscriptionCodePage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};