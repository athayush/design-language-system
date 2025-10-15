import { useState } from "react";
import { FilePenLineIcon } from "lucide-react";
import { Drawer } from "@/general/atoms/drawer/Drawer"; 
import { Section } from "@/general/atoms/section/Section"; 
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/general/atoms/button/Button";
import type { PGAthCareCase } from "@/pages/history-page/HistoryPage";


type EditCaseFormSheetProps = {
  medicalCase: PGAthCareCase;
};

export function EditCaseFormSheet({ medicalCase }: EditCaseFormSheetProps) {
  const summaryByUser = medicalCase?.summary.find((item) => item.by === "User");

  const [title, setTitle] = useState(summaryByUser?.title ?? "");
  const [brief, setBrief] = useState(summaryByUser?.brief ?? "");
  const [tags, setTags] = useState(medicalCase?.tagsBySubscriber ?? []);

  const handleSave = () => {
    console.log("Form Submitted:", {
      title,
      brief,
      tags,
    });
    alert("Changes saved (mock)!");
  };

  return (
    <Drawer
      id="storybook-edit-case-form"
      title="Edit Case Details"
      icon={FilePenLineIcon}
      iconSize={20}
      open 
      button={{
        variant: "ghost",
      }}
      className={{
        content: "h-[75vh]",
        scroll: "h-full max-h-[calc(90vh-150px)]",
      }}
      description="Edit the case details below. This version is for Storybook only."
    >
      <Section
        className={{
          section: "mt-5 mx-5 grid gap-6",
        }}
      >
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Title:</Label>
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Brief:</Label>
          <Textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            placeholder="Enter brief description"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Tags:</Label>
          <Input
            placeholder="Comma-separated tags"
            value={tags.join(", ")}
            onChange={(e) =>
              setTags(
                e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              )
            }
          />
        </div>
        <Button
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Section>
    </Drawer>
  );
}