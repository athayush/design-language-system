import * as React from "react";

import { cn } from "@/lib/utils"; 

type ParaRevealProps = {
  readMoreLable?: string;
  readLessLable?: string;
  numOfCharToShow?: number;
  buttonClassName?: React.ComponentProps<"button">["className"];
} & React.ComponentProps<"p">;

export function ParaReveal({
  readMoreLable = "Read More",
  readLessLable = "Read Less",
  numOfCharToShow = 100,
  buttonClassName,
  children,
  ...props
}: ParaRevealProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p {...props}>
      <span>
        {isExpanded
          ? children
          : (children as string).substring(0, numOfCharToShow)
            + ((children as string).length > numOfCharToShow ? "..." : "")}
      </span>
      {" "}
      {(children as string).length > numOfCharToShow && (
        <span
          className={cn("text-primary/70 hover:underline", buttonClassName)}
          onClick={toggleExpand}
        >
          {isExpanded ? readLessLable : readMoreLable}
        </span>
      )}
    </p>
  );
}
