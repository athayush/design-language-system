import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceLayout } from "./ServiceLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof ServiceLayout> = {
  title: "general/templates/ServiceLayout",
  component: ServiceLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ServiceLayout>;

function DemoServiceContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-2">Service Overview</h2>
        <p className="text-muted-foreground">
          Detailed information about the selected service, practitioner, or package.
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-2">About This Service</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This service focuses on holistic care, combining traditional methods with
          modern healthcare practices to deliver long-term wellness.
        </p>
      </Card>

      <div className="grid sm:grid-cols-2 gap-6">
        <Card className="p-6 h-40">Available Slots</Card>
        <Card className="p-6 h-40">Patient Reviews</Card>
      </div>

      <Card className="p-6 flex items-center justify-between">
        <span className="font-medium">Ready to book this service?</span>
        <Button>Book Now</Button>
      </Card>
    </div>
  );
}

/* ---------------------------------- */
/* Doctor / Expert Profile Example    */
/* ---------------------------------- */
export const DoctorService: Story = {
  render: () => (
    <ServiceLayout
      AppBar={{
        title: "Dr. Ananya Sharma",
        subTitle: "Ayurveda Specialist • 8+ years experience",
        image: {
          name: "Dr. Ananya Sharma",
          profileUrl: "https://via.placeholder.com/100",
          altText: "Doctor profile",
        },
      }}
    >
      <DemoServiceContent />
    </ServiceLayout>
  ),
};

/* ---------------------------------- */
/* Service without image              */
/* ---------------------------------- */
export const ServiceWithoutImage: Story = {
  render: () => (
    <ServiceLayout
      AppBar={{
        title: "Full Body Health Checkup",
        subTitle: "Comprehensive diagnostic package",
      }}
    >
      <DemoServiceContent />
    </ServiceLayout>
  ),
};

/* ---------------------------------- */
/* Long Content (scroll demo)         */
/* ---------------------------------- */
export const LongContent: Story = {
  render: () => (
    <ServiceLayout
      AppBar={{
        title: "Physiotherapy Consultation",
        subTitle: "Pain management & rehabilitation",
        image: {
          name: "Physiotherapy",
          profileUrl: "https://via.placeholder.com/100",
        },
      }}
    >
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} className="p-4 h-28 flex items-center justify-center">
            Content Section {i + 1}
          </Card>
        ))}
      </div>
    </ServiceLayout>
  ),
};