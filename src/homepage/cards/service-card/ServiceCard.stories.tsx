import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceCard } from "./ServiceCard";


const meta = {
  title: "homepage/cards/ServiceCard",
  component: ServiceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    url: {control: "text"},
    bgColor: {control: "color"},
    title: {control: "text"},
    image: {control: "text"},
    description: {control: "text"},
    feature: {control: "text"},
  }
} satisfies Meta<typeof ServiceCard>;
         
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg?t=st=1761647762~exp=1761651362~hmac=22d7c6921770b20a76aa5bb504c3ba0094fbb2a2294c9e2e9567669d8cb74300&w=2000",
        bgColor: "#d0f8fb",
        title: "Doctors and Diet Consultations",
        description: "Upto 30% off",
        feature: "Trending"
    }
};

