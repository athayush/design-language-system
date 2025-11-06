import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircleQuestionMark, type LucideIcon } from "lucide-react"

type TooltipProps = {
  triggerIcon? : LucideIcon,
  content: string
}

function Tooltip({triggerIcon = CircleQuestionMark, content}: TooltipProps) {
  const TriggerIcon = triggerIcon

  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <TriggerIcon size={14} strokeWidth={2.5} className="text-on-primary" />
      </TooltipTrigger>
      <TooltipContent className="mr-1">
        <p>{content}</p>
      </TooltipContent>
    </TooltipRoot>
  )
}

export { Tooltip }