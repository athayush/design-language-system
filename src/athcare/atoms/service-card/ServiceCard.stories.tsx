import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceCard } from "./ServiceCard";


const mockService = {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    id: 501,
    serviceId: 42,
    caseId: "a1b2c3d4-e5f6-7890-1234-567890abcdef", 
    caseManagerId: 201,
    transactionId: 9001,
    subscriberCrn: 9876,
    initiationLocation: { x: 28.6692, y: 77.4538 }, 
    status: "Completed",
    personnelTypeId: 1,
    personnelId: 15,
    personnelJourneyId: 101,
    feedbackId: 77,
    caseManagerSummary: "Service successfully rendered. Patient reported significant improvement in mobility.",
    metadata: {
      serviceType: "On-site Physiotherapy",
      durationMinutes: 60,
    },
}

const meta: Meta<typeof ServiceCard> = {
  title: "athcare/atoms/ServiceCard",
  component: ServiceCard,
  parameters: {
    layout: "centered",
  },
  args: {
    service: mockService,
    idx: 0,
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  render: (args) => <ServiceCard {...args} />,
};

export const Ongoing: Story = {
  args: {
    service: {
      ...mockService,
      id: 2,
      status: "Ongoing",
      caseManagerSummary:
        "Case Manager is currently coordinating with the clinic for your visit.",
    },
    idx: 1,
  },
};
