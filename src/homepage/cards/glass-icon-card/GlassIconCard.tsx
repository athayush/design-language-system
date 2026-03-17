import GlassIcons from "@/components/ui/glass-icons";
import { Section } from "@/general/atoms/section/Section";
import { ChartNoAxesColumn, Cloud, File, Heart, NotebookText, SquarePen } from "lucide-react";

const items = [
  { icon: <File />, color: 'blue', label: 'Files' },
  { icon: <NotebookText />, color: 'purple', label: 'Books' },
  { icon: <Heart />, color: 'red', label: 'Health' },
  { icon: <Cloud />, color: 'indigo', label: 'Weather' },
  { icon: <SquarePen />, color: 'orange', label: 'Notes' },
  { icon: <ChartNoAxesColumn />, color: 'green', label: 'Stats' },
];

function GlassIconCard() {
  return (
    <Section title="All Specialities" className={{ section: "relative mb-0", secondarySection: "mb-0" }} buttonClassName="text-xs" buttonVariant={"link"} buttonTitle="View All">
      <GlassIcons items={items} className="custom-class" />
    </Section>

  )
}

export { GlassIconCard }