import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircleQuestionMark } from "lucide-react"

export function Tooltip() {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <CircleQuestionMark size={14} strokeWidth={2.5} className="text-on-primary" />
      </TooltipTrigger>
      <TooltipContent className="mr-1">
        <p>How To Increase Health Score?</p>
      </TooltipContent>
    </TooltipRoot>
  )
}
