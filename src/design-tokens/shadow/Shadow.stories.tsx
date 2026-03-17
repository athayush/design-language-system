import type { Meta, StoryObj } from "@storybook/react-vite";
import { Shadow, type ShadowVariant } from "./Shadow";

const variants: ShadowVariant[] = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "inner",
  "outline",
  "elevated",
  "card",
  "button"
];

const meta: Meta<typeof Shadow> = {
  title: "design-tokens/Shadow",
  component: Shadow,
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
type Story = StoryObj<typeof Shadow>;

export const Default: Story = {
  args: {
    variant: "md",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6">
      {variants.map((variant) => (
        <Shadow key={variant} variant={variant} />
      ))}
    </div>
  ),
};