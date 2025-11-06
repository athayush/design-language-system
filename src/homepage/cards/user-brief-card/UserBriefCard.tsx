import type { TClassName } from "@/general/atoms/section/Section";
import { CheckCircle2, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Section } from "@/general/atoms/section/Section"; 
import { Tooltip } from "@/general/atoms/tooltip/Tooltip"; 
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; 
import { UserAvatar } from "@/general/atoms/user-avatar/UserAvatar"; 

export type subscriber = {
    id: string;
    name: string;
    username: string;
    email?: string;
    relation: string;
    avatar: string;
    progress: number;
};

type UserBriefCardProps = {
    userId?: string;
    subscribers: subscriber[];
    className?: TClassName;
};

function getDynamicClass(value: number) {
    if (value < 25)
        return "[&>*]:bg-red-500";
    if (value < 50)
        return "[&>*]:bg-orange-500";
    if (value < 70)
        return "[&>*]:bg-amber-500";
    if (value < 90)
        return "[&>*]:bg-teal-500";
    return "[&>*]:bg-green-500";
}

function UserBriefCard({ subscribers, className }: UserBriefCardProps) {
    const [selectedUser, setSelectedUser] = useState(subscribers[0]);

    const handleSelectUser = (userId: string) => {
        const user = subscribers.find(u => u.id === userId);
        if (user)
            setSelectedUser(user);
    };
    // const isSelf = user.relation === "Self";
    return (
        <Section
            className={{
                section: cn("mt-4 mx-0", className),
            }}
        >
            <ScrollArea>
                <div className="flex items-start gap-4 w-max h-18 pl-[3px] pt-[3px] overflow-y-hidden">
                    {subscribers.map(user => (
                        <div key={user.id} className="relative pb-3.5">
                            <UserAvatar
                                name={user.name}
                                profileUrl={user.avatar}
                                onClick={() => handleSelectUser(user.id)}
                                className={{
                                    avatar: cn(
                                        "size-12 cursor-pointer transition-all",
                                        user.id === selectedUser.id ? "ring-primary ring-3" : null,
                                    ),
                                }}
                            />
                            {user.id === selectedUser.id && (
                                <div className="absolute bottom-[-10px] inset-x-0 mx-auto w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[13px] border-primary-container" />
                            )}
                            {user.relation === "Self" && (
                                <CheckCircle2
                                    className="absolute -top-0 -right-1 bg-primary text-on-primary rounded-full p-[1px] size-4"
                                    strokeWidth={2}
                                />
                            )}
                        </div>
                    ))}
                    <Button
                        variant="secondaryContainer"
                        className="rounded-full size-12 cursor-pointer"
                        onClick={() => { }}
                    >
                        <PlusIcon />
                    </Button>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <Card className="gap-4 p-6 border-none rounded-2xl text-start bg-primary-container">
                <CardHeader className="flex flex-row items-center gap-3.5 p-0">
                    <UserAvatar
                        name={selectedUser.name}
                        profileUrl={selectedUser.avatar}
                        className={{
                            avatar: "size-10",
                        }}
                    />
                    <div>
                        <CardTitle className="text-on-primary-container font-semibold">
                            {selectedUser.name}
                        </CardTitle>
                        <CardDescription className="leading-none text-xs">
                            {selectedUser.relation}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                        <p className="mb-1 font-semibold text-on-primary-container">Health Score:</p>
                        <a href="#" title="How To Increase Health Score?">
                            <Tooltip content="How To Increase Health Score?" />
                        </a>
                    </div>

                    <Progress
                        value={selectedUser.progress}
                        className={cn("h-4 bg-secondary-container/70", getDynamicClass(selectedUser.progress))}
                    />
                    <small className="text-on-surface-variant text-xs">
                        *
                        {" "}
                        {selectedUser.progress < 50
                            ? "Need to improve your health habits."
                            : "You're doing well. Keep it up!"}
                    </small>
                </CardContent>
            </Card>
        </Section>
    );
}

export { UserBriefCard };
