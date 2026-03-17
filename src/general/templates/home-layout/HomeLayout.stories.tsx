import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeLayout } from "./HomeLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof HomeLayout> = {
  title: "General/Layout/HomeLayout",
  component: HomeLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "App bar title",
    },
    subTitle: {
      control: "text",
      description: "App bar subtitle",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomeLayout>;

function DemoContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-2">Welcome to AthAyush</h2>
        <p className="text-muted-foreground">
          This is a demo content area rendered inside HomeLayout.
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="font-medium mb-2">Quick Actions</h3>
        <div className="flex gap-3">
          <Button>Book Appointment</Button>
          <Button variant="outline">Explore Services</Button>
        </div>
      </Card>

      <Card className="p-6 h-48 flex items-center justify-center text-muted-foreground">
        More page content goes here…
      </Card>
    </div>
  );
}

/* ---------------------------------- */
/* Default Home Layout                */
/* ---------------------------------- */
export const Default: Story = {
  args: {
    title: "AthAyush",
    subTitle: "Holistic Healthcare Platform",
  },
  render: (args) => (
    <HomeLayout {...args}>
      <DemoContent />
    </HomeLayout>
  ),
};

/* ---------------------------------- */
/* Without Subtitle                   */
/* ---------------------------------- */
export const WithoutSubtitle: Story = {
  args: {
    title: "AthAyush",
  },
  render: (args) => (
    <HomeLayout {...args}>
      <DemoContent />
    </HomeLayout>
  ),
};

/* ---------------------------------- */
/* Custom Page Example                */
/* ---------------------------------- */
export const ExamplePage: Story = {
  args: {
    title: "Dashboard",
    subTitle: "Your health at a glance",
  },
  render: (args) => (
    <HomeLayout {...args}>
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Today’s Summary</h2>
          <p className="text-muted-foreground">
            Appointments, reports, and recommendations.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 h-40">Upcoming Appointments</Card>
          <Card className="p-6 h-40">Health Stats</Card>
        </div>
      </div>
    </HomeLayout>
  ),
};