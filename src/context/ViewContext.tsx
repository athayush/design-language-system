import type { SortOption, SortOrder, ViewStyle } from "@/athcare/molecules/view-provider/ViewProvider"

import { createContext } from "react";

type TViewContext = {
  viewStyle: ViewStyle;
  sortOrder?: SortOrder;
  sortBy?: SortOption;
};

export const ViewContext = createContext<TViewContext | undefined>(undefined);
