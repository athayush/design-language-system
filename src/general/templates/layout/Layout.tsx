import * as React from "react";

import { cn } from "@/lib/utils"; 

function Layout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("w-full", className)} />
  );
}

export  {Layout};
