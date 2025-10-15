import type { Meta, StoryObj } from "@storybook/react-vite";
import { DoctorDetails } from "./DoctorDetails";
import { Button } from "@/general/atoms/button/Button";

const meta: Meta<typeof DoctorDetails> = {
  title: "athcare/atoms/DoctorDetails",
  component: DoctorDetails,
  parameters: {
    layout: "centered",
  },
  args: {
    serviceDetailId: 101,
  },
};

export default meta;
type Story = StoryObj<typeof DoctorDetails>;

export const Default: Story = {
  render: (args) => (
    <DoctorDetails {...args}>
      <Button variant="outline">View Doctor Details</Button>
    </DoctorDetails>
  ),
};

export const DetailedSummary: Story = {
  render: (args) => (
    <DoctorDetails {...args}>
      <Button>Open Detailed Report</Button>
    </DoctorDetails>
  ),
  args: {
    serviceDetailId: 202,
  },
};