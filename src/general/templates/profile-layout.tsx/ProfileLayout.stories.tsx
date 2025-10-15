import type { Meta, StoryObj } from "@storybook/react-vite";     
import { ProfileLayout } from "./ProfileLayout";

const meta = {
  title: "general/templates/ProfileLayout",
  component: ProfileLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: '800px', 
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
    actions: {
      control: false,
    },
  },
} satisfies Meta<typeof ProfileLayout>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold">Welcome to the Profile</h2>
          <p className="text-sm text-muted-foreground">
            This is the main content area where different sections of the user's
            profile will be displayed.
          </p>
        </div>
      </div>
    ),
  },
};