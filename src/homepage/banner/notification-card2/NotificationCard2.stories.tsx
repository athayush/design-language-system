import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationCard2 } from "./NotificationCard2";


const meta = {
  title: "homepage/banner/NotificationCard2",
  component: NotificationCard2,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {control: "text"},
    description: {control: "text"},
    path: {control: "text"},
    points : {control: "object"},
    buttonText: {control : "text"},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationCard2>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: "How Can Reach Us?",
    description: "If you need to get in touch, there are several ways to contact us.",
    path: "#",
    buttonText: "Get In Touch",
    points: [
      "Submit your query and state your requirements.",
      "Receive a call back from our experts as per your query to help for your need."
    ]
  }
};