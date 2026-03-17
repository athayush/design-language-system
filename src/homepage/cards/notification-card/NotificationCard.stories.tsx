import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationCard } from "./NotificationCard";


const meta = {
  title: "homepage/cards/NotificationCard",
  component: NotificationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
    description: {control: "text"},
    btnTitle: {control: "text"}
  }
} satisfies Meta<typeof NotificationCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        title: "Appointment Reminder!",
        description: "Don't forget your appointment scheduled for tomorrow.",
        btnTitle: "View Details"
    }
};