"use client";

import { useState } from "react";
import { Section } from "@/general/atoms/section/Section";
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
import { CheckCircle2, PlusIcon } from "lucide-react";
import { Avatar } from "@/general/atoms/avatar/Avatar";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/homepage/tooltip/Tooltip";

type TClassName = string;

type UserBriefCardProps = {
  className?: TClassName;
};

const mockSubscribers = [
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

function getDynamicClass(value: number) {
  if (value < 25) return "[&>*]:bg-red-500";
  if (value < 50) return "[&>*]:bg-orange-500";
  if (value < 70) return "[&>*]:bg-amber-500";
  if (value < 90) return "[&>*]:bg-teal-500";
  return "[&>*]:bg-green-500";
}

function UserBriefCard({ className }: UserBriefCardProps) {
  const [selectedUser, setSelectedUser] = useState(mockSubscribers[0]);

  const handleSelectUser = (userId: string) => {
    const user = mockSubscribers.find((u) => u.id === userId);
    if (user) setSelectedUser(user);
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
          {mockSubscribers.map((user) => (
            <div key={user.id} className="relative pb-3.5">
              <Avatar
                name={user.name}
                profileUrl={user.avatar}
                onClick={() => handleSelectUser(user.id)}
                className={{
                  avatar: cn(
                    "size-12 cursor-pointer transition-all",
                    user.id === selectedUser.id ? "ring-primary ring-3" : null
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
          <Avatar
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
              <Tooltip />
            </a>
          </div>

          <Progress
            value={selectedUser.progress}
            className={cn("h-4 bg-secondary-container/70", getDynamicClass(selectedUser.progress))}
          />
          <small className="text-on-surface-variant text-xs">
            * {selectedUser.progress < 50
              ? "Need to improve your health habits."
              : "You're doing well. Keep it up!"}
          </small>
        </CardContent>
      </Card>
    </Section>
  );
}

export { UserBriefCard };