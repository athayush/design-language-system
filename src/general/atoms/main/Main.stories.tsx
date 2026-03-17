import type { Meta, StoryObj } from "@storybook/react-vite";
import { Main } from "./Main";

const meta: Meta<typeof Main> = {
  title: "general/atoms/Main",
  component: Main,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes applied to the <main> container",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Main>;

const DemoContent = () => (
  <div className="space-y-4">
    <div className="h-16 rounded-xl bg-muted flex items-center justify-center">
      Header Section
    </div>
    <div className="h-40 rounded-xl bg-muted flex items-center justify-center">
      Content Block
    </div>
    <div className="h-24 rounded-xl bg-muted flex items-center justify-center">
      Another Section
    </div>
  </div>
);

/* ---------------------------------- */
/* Default                            */
/* ---------------------------------- */
export const Default: Story = {
  render: (args) => (
    <Main {...args}>
      <DemoContent />
    </Main>
  ),
};

/* ---------------------------------- */
/* With Custom Width / Styling        */
/* ---------------------------------- */
export const CustomStyled: Story = {
  args: {
    className: "bg-surface-container-highest rounded-2xl p-6 max-w-2xl",
  },
  render: (args) => (
    <Main {...args}>
      <DemoContent />
    </Main>
  ),
};

/* ---------------------------------- */
/* Narrow Layout Example              */
/* ---------------------------------- */
export const Narrow: Story = {
  args: {
    className: "max-w-md",
  },
  render: (args) => (
    <Main {...args}>
      <DemoContent />
    </Main>
  ),
};