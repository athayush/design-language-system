import type { Meta, StoryObj } from "@storybook/react-vite";
import { Star, Heart, Settings } from "lucide-react"; 
import { Icon } from "./Icon"; 

const meta = {
  title: "general/icon/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS classes to override or extend default styles.",
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Star className="h-5 w-5" />,
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: <Heart className="h-6 w-6" />,
    className: "bg-primary-container text-on-primary-container p-3",
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon>
        <Star className="h-5 w-5" />
      </Icon>
      <Icon className="bg-secondary-container text-on-secondary-container">
        <Heart className="h-5 w-5" />
      </Icon>
      <Icon className="bg-error-container text-on-error-container">
        <Settings className="h-5 w-5" />
      </Icon>
    </div>
  ),
};