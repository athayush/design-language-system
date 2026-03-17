import { Pie, PieChart } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

export const description = "A donut chart"

// Your updated values
const chartData = [
    { browser: "progress", visitors: 0, fill: "var(--chart-1)" },
    { browser: "remaining", visitors: 100, fill: "var(--chart-2)" },
]

// Matching config
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    progress: {
        label: "Progress",
        color: "var(--chart-1)",
    },
    remaining: {
        label: "Remaining",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ChartPieDonut() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full md:w-1/2 max-h-[250px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                />
            </PieChart>
        </ChartContainer>
    )
}