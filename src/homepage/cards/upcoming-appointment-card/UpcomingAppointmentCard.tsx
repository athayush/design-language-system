import {
  BadgeCheck,
  Calendar,
  Clock,
  MapPinHouse,
  MapPinned,
  Video,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/general/atoms/avatar/Avatar";
import { Badge } from "@/general/atoms/badge/Badge";
import { ParaReveal } from "@/general/atoms/para-reveal/ParaReveal";

export type Person = {
  name: string;
  avatarUrl?: string;
};

export type UpcomingAppointmentCardProps = {
  case: {
    summary?: { brief?: string }[];
  };
  serviceDetail: {
    status: string;
  }[];
  doctorName?: string;
  doctorSpeciality?: string;
  appointmentFor?: Person; // the person the appointment is for
  appointmentBy?: Person;  // the person who booked / created the appointment
  place?: "In Clinic" | "Online" | "At Home";
  date?: string;
  time?: string;
};

export function UpcomingAppointmentCard({
  case: medicalCase,
  serviceDetail,
  doctorName = "Dr. Manik Medi",
  doctorSpeciality = "Dentist Consultation",
  appointmentFor = { name: "John Doe" },
  appointmentBy = { name: "Jane Doe" },
  place = "In Clinic",
  date = "Monday, 05",
  time = "09:00 PM",
}: UpcomingAppointmentCardProps) {
  return (
    <Card className="gap-3 overflow-hidden w-96 p-0">
      <CardHeader className="px-4 pt-5 pb-4 flex flex-row items-center gap-3.5 bg-primary text-on-primary">
        <Avatar
          name={doctorName}
          profileUrl=""
          className={{
            avatar: "size-12",
            fallback: "bg-primary-container/90 text-on-primary-container",
          }}
        />
        <div className="p-0 w-full">
          <CardTitle className="flex gap-2 items-center">
            {doctorName}
            <BadgeCheck className="" size={12} />
          </CardTitle>
          <CardDescription className="text-sm leading-5 text-on-primary/60">
            {doctorSpeciality}
          </CardDescription>
        </div>
        <Badge
          dot
          className={{
            badge: "self-start bg-background text-on-background",
          }}
        >
          {serviceDetail[0]?.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-2 mx-5 p-0">
        <p className="font-semibold">Appointment Details:</p>

        <div className="grid grid-cols-6 gap-2 items-center">
          {/* Appointment For */}
          <div className="col-span-3 flex items-center gap-2">
            <Avatar
              name={appointmentFor.name}
              profileUrl={appointmentFor.avatarUrl || ""}
              className={{
                avatar: "size-12",
                fallback:
                  "bg-primary-accent-container/40 text-on-primary-accent-container",
              }}
            />
            <div className="p-0 w-full flex flex-col gap-0.5">
              <small className="mt-1 leading-none text-xs text-on-background/80">
                Appointment For:
              </small>
              <p className="font-semibold text-sm">{appointmentFor.name}</p>
            </div>
          </div>

          {/* Appointment By */}
          <div className="col-span-3 flex items-center gap-2">
            <Avatar
              name={appointmentBy.name}
              profileUrl={appointmentBy.avatarUrl || ""}
              className={{
                avatar: "size-12",
                fallback:
                  "bg-primary-accent-container/40 text-on-primary-accent-container",
              }}
            />
            <div className="p-0 w-full flex flex-col gap-0.5">
              <small className="mt-1 leading-none text-xs text-on-background/80">
                Appointment By:
              </small>
              <p className="font-semibold text-sm">{appointmentBy.name}</p>
            </div>
          </div>
        </div>

        <ParaReveal className="text-[13px] opacity-80">
          {medicalCase?.summary?.[0]?.brief || ""}
        </ParaReveal>
      </CardContent>

      <CardFooter className="justify-between gap-1 mx-4 px-4 py-1.5 mb-4 rounded-md bg-surface-variant/40 text-on-surface-variant/50">
        {place === "In Clinic" && (
          <div className="flex items-center gap-1.5">
            <MapPinned size={16} />
            <p className="text-sm">In Clinic</p>
          </div>
        )}
        {place === "Online" && (
          <div className="flex items-center gap-1.5">
            <Video size={16} />
            <p className="text-sm">Online</p>
          </div>
        )}
        {place === "At Home" && (
          <div className="flex items-center gap-1.5">
            <MapPinHouse size={16} />
            <p className="text-sm">At Home</p>
          </div>
        )}

        <p className="opacity-35">|</p>
        <div className="flex items-center gap-1.5">
          <Calendar size={16} />
          <p className="text-sm">{date}</p>
        </div>
        <p className="opacity-35">|</p>
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          <p className="text-sm">{time}</p>
        </div>
      </CardFooter>
    </Card>
  );
}