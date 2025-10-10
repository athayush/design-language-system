import type { Meta, StoryObj } from "@storybook/react-vite";
import { User, Search, MoreVertical } from "lucide-react";

import { AppBarWithBack } from "./AppBarWithBack";
import { Button } from "@/general/atoms/button/Button";


const meta: Meta<typeof AppBarWithBack> = {
  title: "general/navigation/AppBarWithBack",
  component: AppBarWithBack,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title text displayed in the app bar.",
    },
    subTitle: {
      control: "text",
      description: "The smaller subtitle text displayed below the title.",
    },
    image: {
      control: false, 
      description: "Props for the Avatar component, displayed to the left of the title.",
    },
    icon: {
      control: false,
      description: "A Lucide icon component to display to the left of the title.",
    },
    children: {
      control: false,
      description: "React nodes for actions, typically buttons, on the right side.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Profile",
  },
};


export const WithSubtitle: Story = {
  args: {
    title: "Alice Johnson",
    subTitle: "Online",
  },
};


export const WithAvatar: Story = {
  args: {
    title: "Design Team",
    subTitle: "3 members active",
    image: {
      name: "Design Team",
      profileUrl: "https://github.com/shadcn.png",
      altText: "Avatar of the design team",
    },
  },
};


export const WithIcon: Story = {
  args: {
    title: "Account Settings",
    subTitle: "Manage your profile",
    icon: User,
  },
};


export const WithActions: Story = {
  args: {
    title: "Inbox",
    children: (
      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="primaryContainer"
          className="bg-transparent text-on-surface-variant shadow-none border-none"
        >
          <Search size={24} />
        </Button>
        <Button
          variant="primaryContainer"
          className="bg-transparent text-on-surface-variant shadow-none border-none"
        >
          <MoreVertical size={24} />
        </Button>
      </div>
    ),
  },
};
