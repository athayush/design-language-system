import { use } from "react";

import { ViewContext } from "@/context/ViewContext"; 

export function useView() {
  const context = use(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
