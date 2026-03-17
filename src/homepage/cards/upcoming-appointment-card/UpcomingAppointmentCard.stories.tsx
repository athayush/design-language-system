import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpcomingAppointmentCard, type UpcomingAppointmentCardProps } from "./UpcomingAppointmentCard";

const meta: Meta<typeof UpcomingAppointmentCard> = {
  title: "homepage/cards/UpcomingAppointmentCard",
  component: UpcomingAppointmentCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    doctorName: { control: "text" },
    doctorSpeciality: { control: "text" },
    place: {
      control: { type: "select" },
      options: ["In Clinic", "Online", "At Home"],
    },
    date: { control: "text" },
    time: { control: "text" },
    appointmentFor: { control: "object" },
    appointmentBy: { control: "object" },
    case: { control: "object" },
    serviceDetail: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof UpcomingAppointmentCard>;

export const Default: Story = {
  args: {
    doctorName: "Dr. Manik Medi",
    doctorSpeciality: "Dentist Consultation",
    case: { summary: [{ brief: "Routine dental cleaning and checkup." }] },
    serviceDetail: [{ status: "Upcoming" }],
    appointmentFor: { name: "John Doe" },
    appointmentBy: { name: "Jane Doe" },
    place: "In Clinic",
    date: "Monday, 05",
    time: "09:00 PM",
  } as UpcomingAppointmentCardProps,
};

export const OnlineAppointment: Story = {
  args: {
    doctorName: "Dr. Sara Ali",
    doctorSpeciality: "Cardiologist",
    case: { summary: [{ brief: "Follow-up consultation via video call." }] },
    serviceDetail: [{ status: "Confirmed" }],
    appointmentFor: { name: "Michael Scott" },
    appointmentBy: { name: "Pam Beesly" },
    place: "Online",
    date: "Tuesday, 10",
    time: "11:00 AM",
  },
};

export const AtHomeAppointment: Story = {
  args: {
    doctorName: "Dr. John Wick",
    doctorSpeciality: "Physiotherapist",
    case: { summary: [{ brief: "Home visit for physiotherapy." }] },
    serviceDetail: [{ status: "Scheduled" }],
    appointmentFor: { name: "Bruce Wayne" },
    appointmentBy: { name: "Alfred Pennyworth" },
    place: "At Home",
    date: "Sunday, 12",
    time: "04:00 PM",
  },
};

