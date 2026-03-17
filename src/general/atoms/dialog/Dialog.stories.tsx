import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Info } from "lucide-react";

import { Dialog } from "./Dialog";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Dialog> = {
  title: "general/atoms/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    triggerLabel: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

/* ---------------------------------- */
/* Helper wrapper (because dialog is controlled) */
/* ---------------------------------- */
function ControlledDialog(props: Omit<React.ComponentProps<typeof Dialog>, "open" | "onOpenChange">) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      {...props}
      open={open}
      onOpenChange={setOpen}
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This is dialog body content. You can place forms, text, or actions here.
        </p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

/* ---------------------------------- */
/* Default trigger label               */
/* ---------------------------------- */
export const Default: Story = {
  render: (args) => (
    <ControlledDialog
      {...args}
      title="Default Dialog"
      description="This dialog uses triggerLabel."
      triggerLabel="Open Dialog"
    />
  ),
};

/* ---------------------------------- */
/* Icon trigger                        */
/* ---------------------------------- */
export const WithIconTrigger: Story = {
  render: (args) => (
    <ControlledDialog
      {...args}
      title="Icon Dialog"
      description="This dialog uses an icon trigger."
      icon={Info}
      button={{ variant: "outline", size: "icon" }}
      className={{ icon: "h-4 w-4" }}
    />
  ),
};

/* ---------------------------------- */
/* Custom trigger                      */
/* ---------------------------------- */
export const CustomTrigger: Story = {
  render: (args) => (
    <ControlledDialog
      {...args}
      title="Custom Trigger Dialog"
      description="This dialog is opened using a fully custom trigger."
      trigger={
        <Button variant="secondary">
          Open with custom button
        </Button>
      }
    />
  ),
};

/* ---------------------------------- */
/* Styled dialog example               */
/* ---------------------------------- */
export const StyledDialog: Story = {
  render: (args) => (
    <ControlledDialog
      {...args}
      title="Styled Dialog"
      description="Dialog with custom styles applied."
      triggerLabel="Open Styled Dialog"
      className={{
        dialog: "max-w-xl rounded-2xl",
        btn: "rounded-xl px-6",
      }}
    />
  ),
};