import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserProfilePage } from "./UserProfilePage";


const meta = {
  title: "Pages/UserProfilePage",
  component: UserProfilePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};