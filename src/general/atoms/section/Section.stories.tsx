import type { Meta, StoryObj } from "@storybook/react-vite";
import { Section } from "./Section";
import { fn } from "storybook/internal/test";

const meta = {
    title: "general/atoms/Section",
    component: Section,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        hTag: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
        title: { control: "text" },
        buttonTitle: { control: "text" },
        scroll: {control: "select", options: ["none", "vertical", "horizontal"]},
        asDiv: {control: "boolean"},
        className: {control: "object"}
    },
    args: { handleOnClick: fn() },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
       hTag: "h1",
       title: "Section Title",
       
    },
};