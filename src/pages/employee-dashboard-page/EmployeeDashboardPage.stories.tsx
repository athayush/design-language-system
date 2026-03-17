import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmployeeDashboardPage } from "./EmployeeDashboardPage";


const meta = {
  title: "Pages/EmployeeDashboardPage",
  component: EmployeeDashboardPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmployeeDashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};