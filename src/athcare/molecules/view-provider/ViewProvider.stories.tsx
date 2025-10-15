import type { Meta, StoryObj } from "@storybook/react-vite";
import { ViewProvider } from "./ViewProvider";

const meta = {
  title: "athcare/molecules/ViewProvider",
  component: ViewProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Heading text" },
    defaultViewStyle: {
      control: { type: "select" },
      options: ["List", "Grid"],
      description: "Default layout view style",
    },
    defaultSortOrder: {
      control: { type: "select" },
      options: ["Asc", "Desc"],
      description: "Default sort order of items",
    },
    sortByOptions: {
      control: { type: "object" },
      description: "Array of available sort options",
    },
    defaultSortBy: {
      control: "text",
      description: "Default sort option selected",
    },
    className: {
      control: { type: "object" },
      description: "Custom Tailwind classNames for layouts",
    },
  },
  args: {
    title: "Documents",
    defaultViewStyle: "List",
    defaultSortOrder: "Asc",
    sortByOptions: ["Name", "Date", "Size"],
    defaultSortBy: "Name",
    className: {
      listLayout: "border p-2 rounded-md",
      gridLayout: "border p-4 rounded-md",
    },
  },
} satisfies Meta<typeof ViewProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Documents",
    defaultViewStyle: "List",
    defaultSortOrder: "Asc",
    sortByOptions: ["Name", "Date", "Size"],
    defaultSortBy: "Name",
    className: {
      listLayout: "border p-2 rounded-md",
      gridLayout: "border p-4 rounded-md",
    },
    children: [1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="flex items-center justify-center border rounded-lg p-4 w-full bg-muted text-muted-foreground"
      >
        Item {item}
      </div>
    )),
  },
  render: (args) => (
    <ViewProvider {...args} />
  ),
};