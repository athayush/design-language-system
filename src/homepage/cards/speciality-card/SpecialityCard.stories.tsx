import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpecialityCard } from "./SpecialityCard";


const meta = {
  title: "homepage/cards/SpecialityCard",
  component: SpecialityCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    url: {control: "text"},
    image: {control: "text"},
    title: {control: "text"}
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpecialityCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png",
        title: "Fever"
    }
};