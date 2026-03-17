import type { Meta, StoryObj } from "@storybook/react-vite";
import { GeneralEnquiryDialog } from "./GeneralEnquiryDialog";
import { Button } from "@/general/atoms/button/Button";

const meta: Meta<typeof GeneralEnquiryDialog> = {
  title: "athcare/molecules/GeneralEnquiryDialog",
  component: GeneralEnquiryDialog,
  tags: ["autodocs"],
  args: {
    triggerLabel: "Open Enquiry Dialog",
  },
  argTypes: {
    triggerLabel: {
      control: "text",
      description: "Label for the default trigger button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GeneralEnquiryDialog>;

/* ---------------------------------- */
/* Default (uses triggerLabel)        */
/* ---------------------------------- */
export const Default: Story = {};

/* ---------------------------------- */
/* With Custom Trigger Button         */
/* ---------------------------------- */
export const WithCustomTrigger: Story = {
  args: {
    trigger: (
      <Button variant="secondary">
        Contact Us
      </Button>
    ),
    triggerLabel: undefined,
  },
};

/* ---------------------------------- */
/* Styled Trigger Example             */
/* ---------------------------------- */
export const StyledTrigger: Story = {
  args: {
    triggerLabel: "General Enquiry",
    className: {
      trigger: "bg-primary text-white hover:opacity-90",
      dialog: "max-w-xl",
    },
  },
};