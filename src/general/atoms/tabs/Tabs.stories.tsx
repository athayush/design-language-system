import type { Meta, StoryObj } from "@storybook/react-vite";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "general/atoms/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: (args) => (
        <Tabs {...args}>
            <TabsList className="grid grid-cols-2 mx-auto">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    )
};

