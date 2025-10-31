import type { Meta, StoryObj } from "@storybook/react-vite"
import { Breadcrumb } from "./Breadcrumb"

const meta: Meta<typeof Breadcrumb> = {
  title: "general/atoms/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: "text",
      description: "The title of the current active page.",
      defaultValue: "Settings",
    },
    links: {
      control: "object",
      description: "Array of breadcrumb link items.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    currentPage: "Settings",
    links: [
      { to: "/", children: "Home" },
      { to: "/dashboard", children: "Dashboard" },
    ],
  },
}

export const SingleLink: Story = {
  args: {
    currentPage: "Profile",
    links: [{ to: "/", children: "Home" }],
  },
}

export const LongTrail: Story = {
  args: {
    currentPage: "Billing Details",
    links: [
      { to: "/", children: "Home" },
      { to: "/dashboard", children: "Dashboard" },
      { to: "/dashboard/settings", children: "Settings" },
      { to: "/dashboard/settings/account", children: "Account" },
    ],
  },
}