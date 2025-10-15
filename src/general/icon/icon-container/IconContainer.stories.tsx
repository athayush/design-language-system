import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconContainer } from "./IconContainer";
import { User } from "lucide-react"; 

const meta = {
  title: "general/icon/IconContainer",
  component: IconContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
     icon: { control: false }, 
     className: {control: "object"},
     title: {control: "text"},
     rounded: { control: "select", options: ["sm", "md", "lg", "xl", "full", "none"] },
  },
} satisfies Meta<typeof IconContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: User,    
    title: "User",
    rounded: "full"
  },
};