import type { Meta, StoryObj } from "@storybook/react-vite";
import type {MedicalProfile, Member} from "./UserMedicalProfileCard";
import { UserMedicalProfileCard } from "./UserMedicalProfileCard";

const meta = {
  title: "general/molecules/UserMedicalProfileCard",
  component: UserMedicalProfileCard,
  parameters: {
    layout: "padded", 
  },
  tags: ["autodocs"],
  argTypes: {
    profile: {
      control: "object",
      description: "The medical profile data for the user.",
    },
    subscription: {
      control: { type: "radio" },
      options: ["Free", "Premium"],
      description: "The user's subscription status.",
    },
    subscriptionMembers: {
      control: "object",
      description: "An array of family members if the user has a premium subscription.",
    },
  },
} satisfies Meta<typeof UserMedicalProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProfile: MedicalProfile = {
  name: "Jane Doe",
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
  username: "janedoe",
  email: "jane.doe@example.com",
  gender: "Female",
  height: "165 cm",
  weight: "60 kg",
  age: "30",
  bloodType: "A+",
  healthScore: 85,
  healthRemark: "Good overall health, maintain routine check-ups.",
  medicalSynopsis:
    "Patient exhibits no critical health concerns. Regular exercise and balanced diet are advised. No recent hospitalizations or major illnesses reported in the last year. Annual physical examination is recommended.",
  knownDiagnostics: "None",
  allergies: "Pollen, Penicillin",
};

const premiumMembers: Member[] = [
  { id: "m1", name: "John Doe", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JD", healthScore: 78 },
  { id: "m2", name: "Alice Doe", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AD", healthScore: 92 },
  { id: "m3", name: "Bob Doe", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BD", healthScore: 65 },
];


export const Default: Story = {
  args: {
    profile: defaultProfile,
    subscription: "Free",
  },
};


export const PremiumSubscriber: Story = {
  args: {
    profile: defaultProfile,
    subscription: "Premium",
  },
};

export const PremiumWithFamilyMembers: Story = {
  args: {
    profile: {
      ...defaultProfile,
      gender: "Male",
      name: "Mark Smith",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MS",
      username: "mark_smith",
      email: "mark.smith@example.com",
    },
    subscription: "Premium",
    subscriptionMembers: premiumMembers,
  },
};

export const NoProfileData: Story = {
  args: {
    profile: null,
    subscription: "Free",
  },
};

export const IncompleteProfile: Story = {
  args: {
    profile: {
      name: "New User",
      avatar: "",
      username: "newbie",
      email: "new@example.com",
      gender: "Male",
      height: "",
      weight: "",
      age: "",
      bloodType: "",
      knownDiagnostics: "",
      allergies: "",
    },
    subscription: "Free",
  },
};