import {
  AtSign,
  Mail,
  Stars,
} from "lucide-react";
import { ProgressAvatar } from "@/general/atoms/progress-avatar/ProgressAvatar";
import { Heading }  from "@/general/typography/heading/Heading"
import { Badge } from "@/general/atoms/badge/Badge";
import { Card, CardContent } from "@/components/ui/card";

type UserPreviewProfileCardProps = {
  children?: React.ReactNode;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  subscription?: string;
  healthScore?: number;
};

export function UserPreviewProfileCard({ children, name, username, email, avatar = "/public/images/placeholder-lg.svg", subscription = "Free", healthScore = 0 }: UserPreviewProfileCardProps) {
  return (
    <Card className="relative shadow-none border-none bg-surface-container text-on-surface m-4 py-4 inset-shadow">
      <CardContent className="px-4">
        <div className="flex gap-6 items-center">
          <ProgressAvatar src={avatar} alt="Avatar" fallback={name.split(" ").at(0) ?? ""} progress={healthScore} />
          <div className="w-full -mt-4">
            <div className="flex gap-2 items-center">
              <Heading className="text-lg md:text-xl">{name}</Heading>
              <Badge
                iconLeft={Stars}
                className={{
                  badge:
                    "bg-secondary-container text-on-secondary-container",
                }}
              >
                {subscription}
              </Badge>
            </div>
            <p className="flex gap-2 items-center text-sm leading-5">
              <AtSign size={12} />
              {" "}
              {username}
            </p>
            <p className="flex gap-2 items-center text-sm leading-5">
              <Mail size={12} />
              {" "}
              {email}
            </p>
          </div>
        </div>
      </CardContent>
      {children}
    </Card>
  );
}
