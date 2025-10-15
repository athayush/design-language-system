import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, Search, Heart, User } from "lucide-react";
import { Navbar, NavbarItem } from "./Navbar";

const meta = {
  title: "general/navigation/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  render: (args) => (
    <div className="h-[50vh] bg-background">
      <Navbar {...args}>
        <NavbarItem href="#" icon={Home} isActive>
          Home
        </NavbarItem>
        <NavbarItem href="#" icon={Search}>
          Search
        </NavbarItem>
        <NavbarItem href="#" icon={Heart}>
          Favorites
        </NavbarItem>
        <NavbarItem href="#" icon={User}>
          Profile
        </NavbarItem>
      </Navbar>
    </div>
  ),
};