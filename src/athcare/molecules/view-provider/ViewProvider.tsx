import {
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
  LayoutGrid,
  LayoutList,
} from "lucide-react";
import { useState } from "react";

import { Section } from "@/general/atoms/section/Section"; 
import { Heading } from "@/general/typography/heading/Heading"; 

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils"; 
import { ViewContext } from "@/context/ViewContext"; 

type ViewProviderProps<SortBy extends SortOption> = {
  children: React.ReactNode;
  title: string;
  defaultViewStyle?: ViewStyle;
  defaultSortOrder?: SortOrder;
  sortByOptions?: SortBy[];
  defaultSortBy?: SortBy;
  className?: {
    listLayout?: string;
    gridLayout?: string;
  };
};

export type ViewStyle = "Grid" | "List";
export type SortOption = string;
export type SortOrder = "Asc" | "Desc";

export function ViewProvider<T extends SortOption>({ children, title, defaultViewStyle = "List", defaultSortOrder = "Asc", sortByOptions, defaultSortBy, className }: ViewProviderProps<T>) {
  const [viewStyle, setViewStyle] = useState(defaultViewStyle);
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const [sortBy, setSortBy] = useState<T | undefined>(defaultSortBy);

  const LayoutComp = viewStyle === "List" ? LayoutGrid : LayoutList;
  const SortByComp = sortOrder ? ArrowDownNarrowWide : ArrowUpWideNarrow;

  const handleLayoutChange = () => setViewStyle(prev => (prev === "List" ? "Grid" : "List"));
  const handleSortOrderChange = () => setSortOrder((prev: SortOrder) => (prev === "Asc" ? "Desc" : "Asc"));

  return (
    <Section className={{ section: "space-y-3 mt-3" }}>
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="" onClick={handleSortOrderChange}>
          <Heading hTag="h2" className="text-lg">
            {title}
          </Heading>
          <SortByComp />
        </Button>

        <div className="flex items-center gap-1">
          {sortByOptions && sortByOptions.length > 0 && (
            <Select defaultValue={defaultSortBy} value={sortBy} onValueChange={value => setSortBy(value as T)}>
              <SelectTrigger id="sort-select" className="focus:border-none w-auto gap-4 border-none px-3 shadow-none text-[13px] text-muted-foreground bg-transparent focus-visible:border-none focus-visible:ring-0">
                <SelectValue placeholder={`Select ${defaultSortBy?.toLocaleLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {sortByOptions.map(option => (
                  <SelectItem key={option} value={option}>{`Sort by: ${option}`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <p className="text-muted-foreground/40">|</p>
          <Button variant="ghost" onClick={handleLayoutChange}>
            <LayoutComp />
          </Button>
        </div>
      </div>
      <ViewContext value={{ viewStyle, sortOrder, sortBy }}>
        <div className={viewStyle === "List" ? cn("space-y-3", className?.listLayout) : cn("grid grid-cols-2 gap-4 justify-items-center", className?.gridLayout)}>
          {children}
        </div>
      </ViewContext>
    </Section>
  );
}
