import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserBriefCard, type subscriber } from "./UserBriefCard";

const meta: Meta<typeof UserBriefCard> = {
  title: "Homepage/cards/UserBriefCard",
  component: UserBriefCard,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserBriefCard>;

// ✅ Mock subscribers data for story
const mockSubscribers: subscriber[] = [
  {
    id: "1",
    name: "Ankush Kumar",
    username: "ankush123",
    email: "ankush@example.com",
    relation: "Self",
    avatar: "https://i.pravatar.cc/150?img=1",
    progress: 22,
  },
  {
    id: "2",
    name: "Priya Sharma",
    username: "priya_s",
    relation: "Wife",
    avatar: "https://i.pravatar.cc/150?img=2",
    progress: 65,
  },
  {
    id: "3",
    name: "Rohan Kumar",
    username: "rohan_k",
    relation: "Son",
    avatar: "https://i.pravatar.cc/150?img=3",
    progress: 45,
  },
  {
    id: "4",
    name: "Anita Devi",
    username: "anita_d",
    relation: "Mother",
    avatar: "https://i.pravatar.cc/150?img=4",
    progress: 80,
  },
];

// ✅ Default story
export const Default: Story = {
  args: {
    subscribers: mockSubscribers,
  },
};

// ✅ Story with fewer subscribers
export const FewSubscribers: Story = {
  args: {
    subscribers: mockSubscribers.slice(0, 2),
  },
};

// ✅ Story with all subscribers having high health scores
export const AllHealthy: Story = {
  args: {
    subscribers: mockSubscribers.map((s) => ({ ...s, progress: 90 })),
  },
};