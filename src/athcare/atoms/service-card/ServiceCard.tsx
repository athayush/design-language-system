import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from "@/components/ui/timeline";
import { Calendar, Check, ChevronDownIcon, CirclePlus, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/general/atoms/badge/Badge";
import { cn } from "@/lib/utils";
import { ParaReveal } from "@/general/atoms/para-reveal/ParaReveal";
import { Button } from "@/general/atoms/button/Button";
import { AttachedFiles } from "../attached-files/AttachedFiles";
import { DoctorDetails } from "../doctor-details/DoctorDetails";
import type { PGAthCareServiceDetail } from "@/pages/case-page/CasePage";

const appointmentForm = {
  issueBrief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nam adipisci. Deleniti aperiam totam nemo saepe praesentium. Esse natus, aspernatur iure eum enim cumque dignissimos tempora incidunt nesciunt explicabo aliquid impedit eos sunt id accusantium rerum est a labore dolore magni quaerat.",
  issueStartDate: new Date(),
  prevCosultation: true,
  consultingDoctor: "Dr. Dheeraj Setia",
  consultingClinicName: "The Dental Roots",
  consultingClinicAddress: "S - 115, Block S,Panchsheel Park South., Landmark: Near Hauz Khas Metro Station, Delhi",
  uploadedDocuments: [1, 2, 3, 4],
};


function ServiceCard({
    service,
    idx,
}: { service: PGAthCareServiceDetail; idx: number }) {

    return (
        <Timeline>
            <TimelineItem
                step={idx}
                className="group-data-[orientation=vertical]/timeline:ms-10"
            >
                <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                    <CirclePlus
                        className="group-not-data-completed/timeline-item:hidden"
                        size={16}
                    />
                </TimelineIndicator>
                <TimelineHeader className="flex flex-col gap-0">
                    <div className="flex items-center justify-between">
                        <TimelineDate className="m-0">
                            {(new Date).toLocaleDateString()}
                        </TimelineDate>
                        {service.status === "completed"
                            ? (
                                <Badge variant="outline" className={{ badge: "gap-1 text-on-surface" }}>
                                    <Check
                                        className="text-emerald-500"
                                        size={12}
                                        aria-hidden="true"
                                    />
                                    {service.status}
                                </Badge>
                            )
                            : (
                                <Badge variant="outline" className={{ badge: "gap-1.5 text-on-surface" }}>
                                    <span
                                        className={cn("size-1.5 rounded-full", {
                                            "bg-gray-500": service.status.includes("Initiated"),
                                            "bg-emerald-500": service.status.includes("Confirmed"),
                                            "bg-amber-500": service.status.includes("Ongoing"),
                                            "bg-orange-500 rounded-xs": service.status.includes("Rescheduled"),
                                            "bg-red-500": service.status.includes("Cancelled"),
                                        })}
                                        aria-hidden="true"
                                    />
                                    {service.status}
                                </Badge>
                            )}
                    </div>
                    <TimelineTitle className="font-bold text-md">
                        {`Booked a Doctor appointment`}
                    </TimelineTitle>
                    <div className="grid grid-cols-1 gap-3 my-2">
                        <div className="flex items-center gap-3 border rounded-xl shadow-xs p-2 px-3">
                            <Avatar className="size-10 cursor-pointer">
                                <AvatarImage src="" />
                                <AvatarFallback className="text-primary text-xs">
                                    CM
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-xs text-on-surface-variant">
                                    Assigned Case Manager
                                </p>
                                <p className="text-xs font-semibold text-on-surface-variant">
                                    {`Case Manager ${service.id}`}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border rounded-xl shadow-xs py-2 px-3">
                            <Avatar className="size-10 cursor-pointer">
                                <AvatarImage src="/public/images/placeholder-lg.svg " />
                                <AvatarFallback className="text-primary text-xs">
                                    AK
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-xs text-on-surface-variant">
                                    {`Assigned Doctor`}
                                </p>
                                <p className="text-xs font-semibold text-on-surface-variant">
                                    {`Dr. Ankush Kumar`}
                                </p>
                            </div>
                        </div>
                    </div>
                </TimelineHeader>
                <TimelineContent>
                    <p className="text-sm text-on-surface-variant">
                        {service.caseManagerSummary}
                    </p>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="3"
                    >
                        <AccordionItem value="appointment-details">
                            <AccordionPrimitive.Header className="flex">
                                <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left leading-6 transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180">
                                    <div className="flex flex-col space-y-0.5">
                                        <p className="font-semibold text-sm">
                                            Assigned Case Manager booked an appointment for you
                                        </p>
                                        
                                          
                                                    <div className="flex items-center gap-4 text-on-surface-variant">
                                                        <div className="flex items-center gap-1.5 text-sm">
                                                            <Calendar size={14} />
                                                            <p>{(new Date).toLocaleDateString()}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-sm">
                                                            <Clock size={14} />
                                                            <p>{(new Date).toLocaleTimeString()}</p>
                                                        </div>
                                                    </div>
                                            
                                    </div>
                                    <ChevronDownIcon
                                        size={16}
                                        className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                                        aria-hidden="true"
                                    />
                                </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="text-on-surface-variant pb-2">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <span className="font-semibold">Issue you are facing?</span>
                                        <ParaReveal className="ms-5">
                                            {appointmentForm.issueBrief}
                                        </ParaReveal>
                                    </li>
                                    <li>
                                        <span className="font-semibold">
                                            From when you are facing this issue?
                                        </span>
                                        <p className="ms-5">
                                            {appointmentForm.issueStartDate.toDateString()}
                                        </p>
                                    </li>
                                    {appointmentForm.prevCosultation
                                        ? (
                                            <>
                                                <li>
                                                    <span className="font-semibold">
                                                        Previous Consultation details:
                                                    </span>
                                                    <p className="ms-5">
                                                        Showed to
                                                        {" "}
                                                        <span className="font-semibold">
                                                            {appointmentForm.consultingDoctor}
                                                        </span>
                                                        {" "}
                                                        {appointmentForm.consultingClinicName ? "at " : null}
                                                        <span className="font-semibold">
                                                            {appointmentForm.consultingClinicName}
                                                        </span>
                                                        .
                                                    </p>
                                                    <p className="ms-5">
                                                        <span className="font-semibold">Clinic Address:</span>
                                                        {" "}
                                                        {appointmentForm.consultingClinicAddress}
                                                    </p>
                                                </li>
                                                <li>
                                                    <AttachedFiles fileNumber={5}>
                                                        <p className="inline-flex items-center gap-1">
                                                            You have attached
                                                            {" "}
                                                            <span className="font-semibold text-blue-700 underline">
                                                                5 new file
                                                            </span>
                                                            {" "}
                                                            while booking.
                                                            {" "}
                                                            <ExternalLink size={12} className="text-blue-700" />
                                                        </p>
                                                    </AttachedFiles>
                                                </li>
                                            </>
                                        )
                                        : null}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="space-y-1 py-3">
                        <p className="font-semibold">Activities:</p>
                        <ul className="list-disc list-inside">
                                    <li className="text-sm">
                                        The appointment have been
                                        {" "}
                                        <span className="font-semibold">cancelled</span>
                                        {" "}
                                        by
                                        {" "}
                                        <span className="font-semibold">
                                           assigned Case Manager
                                        </span>
                                    </li>
                            
                                    <li className="text-sm">
                                        The appointment have
                                        {" "}
                                        <span className="font-semibold">successfully completed</span>
                                        {" "}
                                        on
                                        {" "}
                                        <span className="font-semibold">
                                            {(new Date).toLocaleDateString()}
                                        </span>
                                        {" "}
                                        at
                                        {" "}
                                        <span className="font-semibold">
                                            {(new Date).toLocaleTimeString()}
                                        </span>
                                    </li>
                                    <li className="text-sm">
                                        {`The appointment have been booked for `}
                                        <span className="font-semibold">
                                            {(new Date).toLocaleDateString()}
                                        </span>
                                        {` to `}
                                        <span className="font-semibold">
                                            {(new Date).toLocaleTimeString()}
                                        </span>
                                        {` by `}
                                        <span className="font-semibold">
                                           assigned Case Manager
                                              
                                        </span>
                                        </li>
                             
                        </ul>
                    </div>
                </TimelineContent>
                <div className="text-end mb-2">
    
                        <DoctorDetails serviceDetailId={+service.id!}>
                            <Button>View Details</Button>
                        </DoctorDetails>
                    
                </div>
            </TimelineItem>
        </Timeline>
    );
}

export { ServiceCard }