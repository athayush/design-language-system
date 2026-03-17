import type { Meta, StoryObj } from "@storybook/react-vite";
import { AutoCompleteSearchBar } from "./AutoCompleteSearchBar";


const meta = {
  title: "homepage/search/AutocompleteSearchBar",
  component: AutoCompleteSearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AutoCompleteSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};