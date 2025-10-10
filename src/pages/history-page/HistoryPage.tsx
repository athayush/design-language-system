/* eslint-disable @typescript-eslint/no-unused-vars */
import z from "zod"
import { MedicalCase } from "@/athcare/atoms/medical-case/MedicalCase";
import { Timeline } from "@/components/ui/timeline";
import { Section } from "@/general/atoms/section/Section";
import { ProfileLayout } from "@/general/templates/profile-layout.tsx/ProfileLayout";

export type PGAthCareCase = z.infer<typeof pgAthCareCaseSchema>;

const appointmentByEnum = z.enum(["Case Manager", "Subscriber", "User"]);

const caseSummary = z.object({
  by: appointmentByEnum,
  byId: z.uuid("Invalid UUID format"),
  date: z.iso.datetime({ offset: true }),
  title: z.string().max(250),
  brief: z.string().max(1500),
});

const pgAthCareCaseSchema = z.object({
    createdAt: z.iso.datetime({ offset: true }).optional(),
    updatedAt: z.iso.datetime({ offset: true }).optional(),
    deletedAt: z.iso.datetime({ offset: true }).optional().nullable(),
    id:  z.uuid("Invalid UUID format").optional(),
    userSubscriptionId: z.number().int("Must be an integer").positive(),
    subscriberCrn: z.number().int("Must be an integer").positive(),
    treatmentFor: z.string(),
    summary: z.array(caseSummary),
    tags: z.array(z.string(),),
    tagsBySubscriber: z.array(z.string()),
    metadata: z.any().optional().nullable(),
});

 const dummyCareCases: PGAthCareCase[] = [
  {
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
  {
    createdAt: "2025-09-15T09:20:00.000Z",
    updatedAt: "2025-10-05T11:15:00.000Z",
    deletedAt: null,
    id: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    userSubscriptionId: 202,
    subscriberCrn: 9002,
    treatmentFor: "Rotator Cuff Strain",
    summary: [
      {
        by: "User",
        byId: "e2f3a4b5-c6d7-8901-2345-fedcba987654",
        date: "2025-09-15T09:20:00+01:00",
        title: "Initial Consultation",
        brief: "Patient reports a dull ache and weakness in the left shoulder, aggravated by overhead movements. Onset was gradual over the past few weeks, possibly due to increased gym activity. Physical examination suggests a mild rotator cuff strain."
      }
    ],
    tags: ["shoulder pain", "physiotherapy", "rotator cuff"],
    tagsBySubscriber: ["dull ache", "weakness"],
    metadata: null
  }
];

function HistoryPage() {
    return (
        <ProfileLayout>
            <Section className={{ section: "p-4 m-0 bg-surface-container text-on-surface" }}>
                <Timeline>
                    {dummyCareCases.length > 0
                        ? dummyCareCases.map(mediCase => (
                            <MedicalCase key={mediCase.id} mediCase={mediCase} idx={0} />
                        ))
                        : <p>No case created yet.</p>}
                </Timeline>
            </Section>
        </ProfileLayout>
    )
}

export { HistoryPage }