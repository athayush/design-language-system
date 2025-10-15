import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
    title: "general/typography/Heading",
    component: Heading,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
        className: {control: "text"},
        hTag: {control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"]},
    }
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hTag: "h1"
  },
  render: (args) => <Heading {...args}>This is a Heading</Heading>,
};