import type { Meta, StoryObj } from "@storybook/react-vite";
import ExploreLayout from "./ExploreLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof ExploreLayout> = {
  title: "general/templates/ExploreLayout",
  component: ExploreLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExploreLayout>;

function DemoExploreContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-2">Explore Healthcare Services</h2>
        <p className="text-muted-foreground">
          Search and browse doctors, experts, and diagnostic services.
        </p>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Doctor Consultation", "Yoga Therapy", "Blood Test", "Physiotherapy", "Mental Wellness", "Nutrition Advice"]
          .map((item) => (
            <Card
              key={item}
              className="p-4 h-32 flex items-center justify-center text-sm font-medium"
            >
              {item}
            </Card>
          ))}
      </div>

      <Card className="p-6 flex items-center justify-between">
        <span className="font-medium">Need help choosing a service?</span>
        <Button variant="outline">Talk to Expert</Button>
      </Card>
    </div>
  );
}

/* ---------------------------------- */
/* Default Explore Layout             */
/* ---------------------------------- */
export const Default: Story = {
  render: () => (
    <ExploreLayout>
      <DemoExploreContent />
    </ExploreLayout>
  ),
};

/* ---------------------------------- */
/* Empty Content State                */
/* ---------------------------------- */
export const EmptyState: Story = {
  render: () => (
    <ExploreLayout>
      <div className="h-60 flex items-center justify-center text-muted-foreground">
        No results found. Try searching something else.
      </div>
    </ExploreLayout>
  ),
};

/* ---------------------------------- */
/* Long Content (scroll test)         */
/* ---------------------------------- */
export const LongContent: Story = {
  render: () => (
    <ExploreLayout>
      <div className="space-y-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="p-4 h-28 flex items-center justify-center">
            Explore Item {i + 1}
          </Card>
        ))}
      </div>
    </ExploreLayout>
  ),
};