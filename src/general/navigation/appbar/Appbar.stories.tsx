import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBar, AppBarSubMenu } from "./Appbar";

const meta = {
  title: "general/navigation/Appbar",
  component: AppBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {control : "object"}
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render : () => <AppBar>
        <AppBarSubMenu className="justify-around px-16 gap-8" >
       <span>Hello</span>
       <span>World</span>
        </AppBarSubMenu>
    </AppBar>
}