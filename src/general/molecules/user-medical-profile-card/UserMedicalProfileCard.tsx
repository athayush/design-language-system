import {
  Droplets,
  Mars,
  PersonStanding,
  Ruler,
  Transgender,
  Venus,
  Weight,
} from "lucide-react";
import { Icon } from "@/general/icon/icon/Icon"; 
import { Section } from "@/general/atoms/section/Section"; 
import { Heading } from "@/general/typography/heading/Heading"; 
import { ParaReveal } from "@/general/atoms/para-reveal/ParaReveal"; 
import { Badge } from "@/general/atoms/badge/Badge"; 
import { Avatar } from "@/general/atoms/avatar/Avatar";

export type MedicalProfile = {
  name: string;
  avatar: string;
  username: string;
  email: string;
  gender: "Male" | "Female";
  height: string;
  weight: string;
  age: string;
  bloodType: string;
  healthScore?: number;
  healthRemark?: string;
  medicalSynopsis?: string;
  knownDiagnostics: string;
  allergies: string;
};

export type Member = {
  id: string;
  name: string;
  avatar: string;
  healthScore: number;
};

type UserMedicalProfileCardProps = {
  profile: MedicalProfile | null;
  subscription?: string;
  subscriptionMembers?: Member[];
};

export function UserMedicalProfileCard({ profile, subscription = "Free", subscriptionMembers }: UserMedicalProfileCardProps) {
  return (
    <Section
      className={{
        section:
          "mt-6 pb-5 mx-0 space-y-6",
      }}
    >
      <div className="px-4 grid grid-cols-5 items-center justify-between gap-4">
        <div className="text-center">
          <Icon className="">
            {
              profile?.gender === "Male"
                ? <Mars size={20} />
                : profile?.gender === "Female"
                  ? <Venus size={20} />
                  : <Transgender size={20} />
            }
          </Icon>
          <p className="text-xs leading-6">Gender</p>
          <p className="font-semibold text-sm leading-3">
            {profile?.gender || "No Data "}
          </p>
        </div>
        <div className="text-center">
          <Icon className="">
            <Ruler size={20} />
          </Icon>
          <p className="text-xs leading-6">Height</p>
          <p className="font-semibold text-sm leading-3">
            {profile?.height || "No Data"}
          </p>
        </div>
        <div className="text-center">
          <Icon className="">
            <Weight size={20} />
          </Icon>
          <p className="text-xs leading-6">Weight</p>
          <p className="font-semibold text-sm leading-3">
            {profile?.weight || "No Data"}
          </p>
        </div>
        <div className="text-center">
          <Icon className="">
            <PersonStanding size={20} />
          </Icon>
          <p className="text-xs leading-6">Age</p>
          <p className="font-semibold text-sm leading-3">
            {profile?.age || "No Data"}
          </p>
        </div>
        <div className="text-center">
          <Icon className="">
            <Droplets size={20} />
          </Icon>
          <p className="text-xs leading-6">Blood</p>
          <p className="font-semibold text-sm leading-3">
            {profile?.bloodType || "No Data"}
          </p>
        </div>
      </div>

      <div className="px-4">
        <Heading hTag="h2" className="text-base leading-7">
          Current Medical Synopsis:
        </Heading>
        {subscription === "Free"
          ? (
              <p>
                The "Current Medical Synopsis" is subscribers only service. Become a subscriber to avail this service any many more.
                <span className="text-tertiary underline">View our plans</span>
                {" "}
                to get started.
              </p>
            )
          : (
              <ParaReveal className="leading-5">
                {profile?.medicalSynopsis || "No current synopsis."}
              </ParaReveal>
            )}
        <ul className="list-disc list-inside">
          <li className="mt-2">
            <span className="font-semibold">Health Score: </span>
            {profile?.healthScore ? `${profile?.healthScore}%` : "Not Specified"}
          </li>
          <li className="mt-0.5">
            <span className="font-semibold">Health Remark: </span>
            {profile?.healthRemark || "Subscriber only"}
          </li>
          <li className="mt-0.5">
            <span className="font-semibold">Current Known Diagnostics: </span>
            {profile?.knownDiagnostics || "Not Specified"}
          </li>
          <li className="mt-0.5">
            <span className="font-semibold">Allergies: </span>
            {profile?.allergies || "Not Specified"}
          </li>
        </ul>
      </div>
      {subscriptionMembers && subscriptionMembers?.length > 0
        && (
          <Section
            asDiv
            title="Family Members:"
            scroll="horizontal"
            className={{
              section: "space-y-6",
              title: "pb-0 text-lg border-none",
            }}
          >
            {subscriptionMembers.map(member => (
              <div key={member.id} className="relative inline-block">
                <Avatar
                  name={member.name}
                  profileUrl={member.avatar}
                  altText={member.name}
                  className={{
                    avatar: "size-16 shadow border-4 mb-1.5 border-secondary-container",
                  }}
                />
                <Badge
                  className={{
                    badge: "absolute bottom-0 inset-x-0 mx-auto bg-surface-variant text-on-surface-variant",
                  }}
                >
                  {`${member.healthScore}%`}
                </Badge>
              </div>
            ))}
          </Section>
        )}
    </Section>
  );
}
