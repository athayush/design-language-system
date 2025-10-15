import * as React from "react";
import { cn } from "@/lib/utils"; 

export function Icon({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-full inline-flex items-center justify-center p-2 bg-tertiary-container text-on-tertiary-container",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
