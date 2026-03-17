import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/general/atoms/button/Button"
import { X } from "lucide-react"

type NotificationCardProps = {
    title: string,
    description: string,
    btnTitle?: string;
}

function NotificationCard({ title, description, btnTitle = "Book Now" }: NotificationCardProps) {
    return (
        <Card className="max-w-xs max-h-[100px] border shadow gap-0 p-2">
            <CardTitle className="mx-2 mb-2 flex items-start justify-between truncate">{title} <X size={14} className="text-primary" /></CardTitle>
            <CardContent className="px-2 flex items-start gap-1 justify-between">
                <p className="leading-none text-sm line-clamp-2">{description}</p>
                <Button className="text-xs px-3 h-7 rounded-xl  max-w-full">{btnTitle}</Button>
            </CardContent>
        </Card>
    )
}

export { NotificationCard }