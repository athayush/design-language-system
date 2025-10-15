import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from "@/components/ui/timeline";
import { Badge } from "@/general/atoms/badge/Badge";
import type { PGAthCareCase } from "@/pages/history-page/HistoryPage";
import { HeartPulse } from "lucide-react";

function MedicalCase({
    mediCase,
    idx,
}: { mediCase: PGAthCareCase; idx: number }) {

    const caseTags = [...(mediCase.tags ?? []), ...(mediCase.tagsBySubscriber ?? [])];

    return (
        <Timeline>
            <TimelineItem
                step={idx}
                className="group-data-[orientation=vertical]/timeline:ms-10"
            >
                <TimelineSeparator className="opacity-10 group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineDate>{new Date(mediCase.createdAt!).toDateString()}</TimelineDate>
                <TimelineIndicator className="group-data-completed/timeline-item:bg-primary-container group-data-completed/timeline-item:text-on-primary-container flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                    <HeartPulse
                        className="group-not-data-completed/timeline-item:hidden"
                        size={16}
                    />
                </TimelineIndicator>
                <a
                    className="rounded-lg shadow px-4 pt-3 pb-4 bg-surface-container-low text-on-surface hover:bg-surface-container"
                >
                    <TimelineHeader>
                        <TimelineTitle className="font-semibold text-md">
                            {`Case: ${mediCase.treatmentFor}`}
                        </TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                        <p className="text-sm text-muted-foreground">{mediCase?.summary[0].brief}</p>
                        <div className="flex gap-2 mt-5 flex-wrap">
                            {caseTags.map(tag => (
                                <Badge
                                    key={tag.toLocaleLowerCase().split(" ").join("-")}
                                    className={{
                                        badge:
                                            "bg-surface-container-high text-on-surface",
                                    }}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </TimelineContent>
                </a>
            </TimelineItem>
        </Timeline>
    );
}

export { MedicalCase }