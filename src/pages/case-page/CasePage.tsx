/* eslint-disable @typescript-eslint/no-unused-vars */
import z from "zod";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  ChartNoAxesGantt,
  ChevronDownIcon,
  CirclePlus,
  Files,
} from "lucide-react";

import { Section } from "@/general/atoms/section/Section";
import { Heading } from "@/general/typography/heading/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/general/atoms/button/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Timeline,
} from "@/components/ui/timeline";

import { Layout } from "@/general/templates/layout/Layout";
import { EditCaseFormSheet } from "@/athcare/atoms/edit-case-form-sheet/EditCaseFormSheet";
import { ServicesSheet } from "@/catalog/atoms/ServicesSheet"; 
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Avatar as UserAvatar } from "@/general/atoms/avatar/Avatar";
import type { PGAthCareCase } from "../history-page/HistoryPage";
import { ServiceCard } from "@/athcare/atoms/service-card/ServiceCard";
import { CaseFileCard } from "@/athcare/molecules/case-file-card/CaseFileCard";

export type PGAthCareServiceDetail = z.infer<typeof pgAthCareServiceDetailsSchema>;

const pgAthCareServiceDetailsSchema = z.object({
  createdAt: z.iso.datetime({ offset: true }).optional(),
  updatedAt: z.iso.datetime({ offset: true }).optional(),
  deletedAt: z.iso.datetime({ offset: true }).optional().nullable(),
  id: z.number().int("Must be an integer").positive(),
  serviceId: z.number().int("Must be an integer"),
  caseId: z.uuid("Invalid UUID format"),
  caseManagerId: z.number().int("Must be an integer").positive().optional(),
  transactionId: z.number().int("Must be an integer").positive().optional(),
  subscriberCrn: z.number().int("Must be an integer").positive(),
  initiationLocation: z.object({ x: z.number(), y: z.number() }).optional(),
  status: z.string(),
  personnelTypeId: z.number().int("Must be an integer").positive().optional(),
  personnelId: z.number().int("Must be an integer").positive().optional(),
  personnelJourneyId: z.number().int("Must be an integer").positive().optional(),
  feedbackId: z.number().int("Must be an integer").positive().optional(),
  caseManagerSummary: z.string().optional(),
  metadata: z.any().optional().nullable(),
});


const dummyMedCase: PGAthCareCase = {
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  deletedAt: null,
  id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  userSubscriptionId: 1001,
  subscriberCrn: 9876,
  treatmentFor: "ACL Recovery - Left Knee",
  summary: [
    {
      by: "Subscriber",
      byId: "11a2b3c4-d5e6-f789-0123-456789abcdef",
      date: new Date("2023-11-15T10:00:00Z").toISOString(),
      title: "Initial Assessment",
      brief: "Initial assessment completed. Limited range of motion and significant swelling observed.",
    },
    {
      by: "User",
      byId: "11a2b3c4-d5e6-f789-0123-456789abcdef",
      date: new Date("2023-12-01T11:30:00Z").toISOString(),
      title: "Post-Surgery Follow-up",
      brief: "Post-surgery follow-up. Started light physiotherapy exercises focusing on quad activation.",
    },
  ],
  tags: ["knee", "surgery", "rehab", "physiotherapy", "acl"],
  tagsBySubscriber: ["painful", "slow recovery", "motivated"],
  metadata: {
    referralSource: "General Practitioner",
    urgency: "high",
  },
};

const dummyAthCareServiceDetails: PGAthCareServiceDetail[] = [
  {
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
  },
  {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    id: 502,
    serviceId: 23,
    caseId: "f0e9d8c7-b6a5-4321-fedc-ba9876543210", 
    subscriberCrn: 9878,
    status: "In Progress",
    personnelId: 22,
    metadata: {
      serviceType: "Tele-consultation",
    },
  },
  {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    id: 503,
    serviceId: 55,
    caseId: "a1b2c3d4-e5f6-7890-1234-567890abcdef", 
    caseManagerId: 201,
    transactionId: 9002,
    subscriberCrn: 9876,
    initiationLocation: { x: 28.6139, y: 77.2090 },
    status: "Scheduled",
    personnelTypeId: 2,
    personnelJourneyId: 102,
    caseManagerSummary: "Scheduled a follow-up MRI scan as per protocol.",
  },
];

function CasePage() {
  return (
    <Layout>
      <AppBarWithBack
        title={
         `Treatment for Frequent Headache`
        }
        subTitle={"By Praveen Singh"}
      >
        <EditCaseFormSheet medicalCase={dummyMedCase} />
        <ServicesSheet/>
      </AppBarWithBack>
      <div className="space-y-2">
        <Section
          className={{
            section: "px-4  pb-1 mx-0 grid grid-cols-1 gap-3 bg-surface-container",
          }}
        >
          <div className="flex gap-4 items-baseline">
            <UserAvatar
              name={"User"}
              profileUrl="#"
              altText={"User"}
              className={{
                avatar: "size-12 mt-3",
              }}
            />
            <div className="space-y-1">
              <div>
                <h2 className="font-bold text-lg">
                 Treatment For Frequent Headache
                </h2>
                <ul className="list-disc list-inside flex items-center gap-6 justify-between text-xs text-on-surface-variant">
                  <li>
                    Added by: Assigned Case Manager
                  </li>
                  <li>
                    {new Date(dummyMedCase.createdAt!).toDateString()}
                  </li>
                </ul>
              </div>
              <p className="text-sm text-on-surface-variant">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste fuga optio cum quasi earum corrupti voluptate quibusdam. Repellendus hic quasi, officia rerum odio eaque quisquam pariatur ex iste explicabo excepturi.
              </p>
            </div>
          </div>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="3"
              >
                <AccordionItem value={"User Id"} className="py-2">
                  <AccordionPrimitive.Trigger className="text-on-surface-variant w-full focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180">
                    <span className="flex flex-col space-y-1">
                      Summary by You
                    </span>
                    <ChevronDownIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                  <AccordionContent className="text-on-surface-variant pb-2 w-full">
                    <div className="flex gap-4">
                      <UserAvatar
                        name="John Doe"
                        profileUrl="#"
                        altText="John Doe"
                        className={{
                          avatar: "size-12",
                        }}
                      />
                      <div className="space-y-1 w-full">
                        <div className="flex items-center gap-4 justify-between">
                          <h2 className="font-semibold">Treatment for Frequent Headache</h2>
                          <p className="text-xs">
                            {(new Date).toLocaleDateString()}
                          </p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quas tenetur odio iure dolorum vitae, tempore repudiandae exercitationem architecto maiores quis, facilis dignissimos et nemo voluptatum consequuntur aperiam. Assumenda, quia.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
        </Section>
        <Tabs defaultValue="tab-timeline" className="gap-0">
          <TabsList className="before:bg-border relative px-4 py-0 h-auto w-full gap-0.5 bg-transparent before:absolute before:inset-x-0 before:bottom-0 before:h-px">
            <TabsTrigger
              value="tab-timeline"
              className="w-full bg-surface-container-low data-[state=active]:bg-surface-container overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none data-[state=active]:text-on-surface text-muted-foreground"
            >
              <ChartNoAxesGantt
                className="-ms-0.5 me-1.5 opacity-60"
                size={16}
                aria-hidden="true"
              />
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="tab-files"
              className="w-full bg-surface-container-low overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none data-[state=active]:bg-surface-container data-[state=active]:text-on-surface text-muted-foreground"
            >
              <Files
                className="-ms-0.5 me-1.5 opacity-60"
                size={16}
                aria-hidden="true"
              />
              Files
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-timeline"
            className="bg-surface-container text-on-surface-variant"
          >
            <Section
              className={{
                section: "px-4 pt-6 pb-5 mx-0 bg-surface-container space-y-4",
              }}
            >
              <Timeline>
                {dummyAthCareServiceDetails.map(serviceDetail => (
                  <ServiceCard
                    key={serviceDetail.id}
                    service={serviceDetail}
                    idx={0}
                  />
                ))}
              </Timeline>
            </Section>
          </TabsContent>
          <TabsContent
            value="tab-files"
            className="bg-surface-container text-on-surface-variant"
          >
            <Section
              className={{
                section: "mt-5 mb-6 space-y-5",
              }}
            >
              <div className="flex items-center justify-between gap-4 mt-3">
                <Heading hTag="h2" className="text-lg">
                  Current Files
                </Heading>
                <Button variant="outline">
                  <CirclePlus />
                  {" "}
                  Add Documents
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <CaseFileCard src="" layout="Grid" />
                <CaseFileCard src="" layout="Grid" />
                <CaseFileCard src="" layout="Grid" />
                <CaseFileCard src="" layout="Grid" />
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}


export { CasePage }