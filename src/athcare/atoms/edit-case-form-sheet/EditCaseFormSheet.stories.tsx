import type { Meta, StoryObj } from "@storybook/react-vite";
import { EditCaseFormSheet } from "./EditCaseFormSheet";

const meta: Meta<typeof EditCaseFormSheet> = {
    title: "athcare/atoms/EditCaseFormSheet",
    component: EditCaseFormSheet,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof EditCaseFormSheet>;

export const Default: Story = {
    args: {
        medicalCase: {
            createdAt: "2025-10-01T10:00:00.000Z",
            updatedAt: "2025-10-08T14:30:00.000Z",
            deletedAt: null,
            id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
            userSubscriptionId: 101,
            subscriberCrn: 9001,
            treatmentFor: "ACL Tear Recovery",
            summary: [
                {
                    by: "Case Manager",
                    byId: "f1e2d3c4-b5a6-7890-1234-567890fedcba",
                    date: "2025-10-02T11:00:00-05:00",
                    title: "Initial Assessment and MRI Referral",
                    brief: "Patient presented with significant swelling and instability in the right knee after a soccer match. An ACL tear is suspected. Referred for an urgent MRI to confirm the diagnosis and assess the extent of the damage. Prescribed RICE protocol in the interim."
                },
                {
                    by: "Subscriber",
                    byId: "c4d5e6f7-a8b9-c0d1-e2f3-g4h5i6j7k8l9",
                    date: "2025-10-05T18:45:00+05:30",
                    title: "Post-MRI Update",
                    brief: "Completed the MRI today. The technician said the results would be sent to my doctor tomorrow. The pain has subsided slightly with icing, but the knee still feels very weak and unstable when I try to put weight on it."
                }
            ],
            tags: ["knee injury", "acl", "sports medicine", "rehabilitation"],
            tagsBySubscriber: ["painful", "swollen", "unstable"],
            metadata: {
                "referringPhysician": "Dr. Evelyn Reed",
                "clinicId": "CLI-452"
            }
        },
    },
};