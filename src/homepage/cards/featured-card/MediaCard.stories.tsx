import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaCard } from "./MediaCard";


const meta = {
    title: "homepage/cards/MediaCard",
    component: MediaCard,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        imageUrl: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
        title: "Exploring the Depths of the Ocean",
        features: ["Dark", "Mystery", "Adventure"],
        ctaText: "Call To Action",
    }
};