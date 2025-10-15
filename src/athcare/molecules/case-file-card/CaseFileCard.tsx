import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { FilePreview } from "@/athcare/atoms/file-preview/FilePreview"; 

 function extractFileInfoFromFileKey(fileKey: string) {
  const infoSplit = fileKey.split("/");
  const name = infoSplit.at(-1)?.split(":::").at(-1);
  const timestamp = infoSplit.at(-1)?.split(":::").at(0);
  let caseId: string = "";
  let serviceId: string = "";

  if (infoSplit.at(-2)?.split(":::").at(0) === "C") {
    caseId = infoSplit.at(-2)?.split(":::").at(-1) ?? "";
    serviceId = "";
  }

  if (infoSplit.at(-2)?.split(":::").at(0) === "S") {
    caseId = infoSplit.at(-3)?.split(":::").at(-1) ?? "";
    serviceId = infoSplit.at(-2)?.split(":::").at(-1) ?? "";
  }

  return {
    name: name || "No name found",
    timestamp,
    date: timestamp ? new Date(timestamp).toLocaleDateString() : "No date found",
    time: timestamp ? new Date(timestamp).toLocaleTimeString() : "No time found",
    caseId,
    serviceId,
  };
};


type CaseFileCardProps = {
  src: string;
  isFileKey?: boolean;
  layout?: "Grid" | "List";
};

export function CaseFileCard({ src, isFileKey = true, layout = "List" }: CaseFileCardProps) {
  const fileInfo = extractFileInfoFromFileKey(src);

  if (layout === "Grid") {
    return (
      <Card className="w-full max-w-[350px] py-0 overflow-hidden gap-2">
        <div className="w-full aspect-[5/3]">
          <FilePreview src={src} isFileKey={isFileKey} />
        </div>
        <CardHeader className="px-2 pb-2 pt-0 text-center gap-0">
          <CardTitle className="text-xs line-clamp-1">{fileInfo.name}</CardTitle>
          <p className="text-[11px] text-muted-foreground">
            {fileInfo.date}
          </p>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card
      className="flex flex-row items-center overflow-hidden gap-4 p-0 shadow-xs border-none"
    >
      <div className="size-20 rounded-full bg-primary-accent-container/30 aspect-square">
        <FilePreview src={src} isFileKey={isFileKey} className="rounded-r-xl" />
      </div>
      <CardHeader className="w-full px-0 mr-3">
        <CardTitle className="line-clamp-1">
          {fileInfo.name}
        </CardTitle>
        <div className="flex gap-3 text-xs text-muted-foreground">
          <p>
            {`● ${fileInfo.date}`}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}
