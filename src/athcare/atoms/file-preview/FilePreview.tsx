import type { TClassName } from "@/general/atoms/section/Section";
import { useState } from "react";
import { FileIcon } from "@/general/icon/file-icon/FileIcon";
import { cn } from "@/lib/utils"; 

type FilePreviewProps = {
  src: string;
  isFileKey?: boolean;
  className?: TClassName;
};

export function FilePreview({ isFileKey = true, className, src }: FilePreviewProps) {
  const [fileType] = useState(src.toString().split(".").at(-1));
  const styles = "aspect-square object-cover";

  if (src === "") {
    return (
      <img
        src="/images/placeholder-lg.svg"
        alt={src}
        className={cn("", styles, className)}
      />
    );
  }

  if (fileType === "pdf") {
    return (
      <a
        href={`https://env.VITE_AWS_BUCKET_NAME.s3.env.VITE_AWS_REGION.amazonaws.com/${src}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={cn("p-2.5 bg-primary-container/30", styles, className)}>
          <FileIcon className="size-full" color="var(--chart-4)" />
        </div>
      </a>
    );
  }

  if (!isFileKey) {
    return (
      <img
        src={src}
        alt={src}
        className={cn("", styles, className)}
      />
    );
  }

  return (
    <a
      href={`https://env.VITE_AWS_BUCKET_NAME.s3.env.VITE_AWS_REGION.amazonaws.com/${src}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://env.VITE_AWS_BUCKET_NAME.s3.env.VITE_AWS_REGION.amazonaws.com/${src}`}
        alt={src}
        className={cn("", styles, className)}
      />
    </a>
  );
}
