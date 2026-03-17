import type { Meta, StoryObj } from "@storybook/react-vite";
import { BorderRadius, type RadiusVariant } from "./BorderRadius";

const variants: RadiusVariant[] = ["none", "md", "lg","full"];

const meta: Meta<typeof BorderRadius> = {
  title: "design-tokens/BorderRadius",
  component: BorderRadius,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    size: {
      control: { type: "number" },
    },
    label: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BorderRadius>;

export const Default: Story = {
  args: {
    variant: "lg",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6">
      {variants.map((variant) => (
        <BorderRadius key={variant} variant={variant} />
      ))}
    </div>
  ),
};