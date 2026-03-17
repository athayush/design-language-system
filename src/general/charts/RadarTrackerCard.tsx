import type { ChartConfig } from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart (tracker)";

// realistic-but-empty data: user hasn't started any months yet
const emptyChartData = [
  { month: "Jan", desktop: 0 },
  { month: "Feb", desktop: 0 },
  { month: "Mar", desktop: 0 },
  { month: "Apr", desktop: 0 },
  { month: "May", desktop: 0 },
  { month: "Jun", desktop: 0 },
];

const sampleChartData = [
  { month: "Jan", desktop: 40 },
  { month: "Feb", desktop: 60 },
  { month: "Mar", desktop: 30 },
  { month: "Apr", desktop: 80 },
  { month: "May", desktop: 55 },
  { month: "Jun", desktop: 70 },
];

const chartConfig = {
  desktop: {
    label: "Progress",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig;

type RadarTrackerCardProps = {
  started?: boolean;
  data?: { month: string; desktop: number }[];
  href?: string;
};

export function RadarTrackerCard({
  started = false,
  data,
  href = "#",
}: RadarTrackerCardProps) {
  const chartData = started ? data ?? sampleChartData : emptyChartData;

  return (
    <div className="relative mx-auto max-h-[250px] w-full max-w-[300px]">
      <ChartContainer
        config={chartConfig}
        className="aspect-square"
        aria-label={started ? "Tracker progress chart" : "Tracker not started"}
      >
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="month" tick={{ fontSize: 11 }} />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill={started ? "#7aa2ff" : "#eef2f7"}
            fillOpacity={started ? 0.6 : 0.35}
            stroke={started ? "#4b8bff" : "#cbd5e1"}
            strokeDasharray={started ? undefined : "3 3"}
            dot={false}
          />
        </RadarChart>
      </ChartContainer>
      {!started && (
        <a href={href} className="absolute inset-0 flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/40 to-white/30"
            aria-hidden="true"
          />
          <div className="pointer-events-auto z-10 mt-12 flex max-w-[220px] flex-col items-center gap-3 rounded-md bg-white/90 px-4 py-3 text-center shadow-md justify-center">
            <p className="text-sm font-semibold text-slate-800">
              You haven't started our trackers
            </p>
            <p className="text-xs text-slate-600">
              Start tracking to see personalized progress charts and insights.
            </p>
            <span className="mt-1 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
              Start tracking
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
