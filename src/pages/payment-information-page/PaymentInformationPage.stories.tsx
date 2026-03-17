import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentInformationPage } from "./PaymentInformationPage";


const meta = {
  title: "Pages/PaymentInformationPage",
  component: PaymentInformationPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PaymentInformationPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};