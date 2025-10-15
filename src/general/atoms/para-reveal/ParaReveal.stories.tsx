import type { Meta, StoryObj } from "@storybook/react-vite";
import { ParaReveal } from "./ParaReveal"; 


const meta = {
  title: "general/atoms/ParaReveal",
  component: ParaReveal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The string content of the paragraph.",
    },
    readMoreLable: {
      control: "text",
      description: "The label for the expand button.",
    },
    readLessLable: {
      control: "text",
      description: "The label for the collapse button.",
    },
    numOfCharToShow: {
      control: "number",
      description: "The number of characters to show before truncating.",
    },
    buttonClassName: {
      control: "text",
      description: "Custom CSS classes for the toggle button.",
    },
    className: {
      control: "text",
      description: "Custom CSS classes for the main paragraph element.",
    },
  },
} satisfies Meta<typeof ParaReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.";

export const Default: Story = {
  args: {
    children: longText,
    className: "max-w-md", 
  },
};

export const ShortText: Story = {
  args: {
    children: "This text is short, so no toggle button is needed.",
    className: "max-w-md",
  },
};


export const Customized: Story = {
  args: {
    children: longText,
    className: "max-w-md italic",
    numOfCharToShow: 50,
    readMoreLable: "Expand 👇",
    readLessLable: "Collapse 👆",
    buttonClassName: "font-bold text-accent cursor-pointer no-underline",
  },
};