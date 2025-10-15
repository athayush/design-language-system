import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileIcon } from "./FileIcon";

const meta = {
    title: "general/icon/FileIcon",
    component: FileIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes : {
        color:  {control: "text"}
    }
} satisfies Meta<typeof FileIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   color: "#BADFDB"
  },
};