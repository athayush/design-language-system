import type { Meta, StoryObj } from "@storybook/react-vite";
import { Highlight, type HighlightVariant } from "./Highlight";

const variants: HighlightVariant[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "muted",
];

const meta: Meta<typeof Highlight> = {
  title: "design-tokens/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    underline: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  args: {
    children: "Highlighted text",
    variant: "primary",
    underline: true,
  },
};

export const WithoutUnderline: Story = {
  args: {
    children: "Highlighted text",
    variant: "primary",
    underline: false,
  },
};

export const Italic: Story = {
  args: {
    children: "Highlighted text",
    variant: "primary",
    underline: true,
    italic: true
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-x-2 text-lg leading-relaxed flex gap-4">
      {variants.map((variant) => (
        <Highlight key={variant} variant={variant} underline>
          {variant}
        </Highlight>
      ))}
    </div>
  ),
};

export const InSentence: Story = {
  render: () => (
    <p className="text-lg leading-relaxed">
      This is a normal sentence, but{" "}
      <Highlight variant="primary" underline>
        this part is highlighted
      </Highlight>{" "}
      for emphasis.
    </p>
  ),
};