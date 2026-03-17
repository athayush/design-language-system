import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { FrownIcon } from "@/animations/icons/frown/FrownIcon";
import { SmileIcon } from "@/animations/icons/smile/SmileIcon";

type EmptyStateCardProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onAction?: () => void;
}

export function EmptyStateCard({
  title = "No Previous Cases",
  description = "It looks like you haven't created any cases yet. You can start a new one or book an appointment.",
  buttonText = "Book Appointment",
  onAction,
}: EmptyStateCardProps) {
  return (
    <div className="flex items-center justify-center min-h-[70vh] ">
      <Card className="w-full max-w-md text-center shadow-lg text-on-primary-container bg-primary-container border-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
            {/* <FrownIcon/> */}
            <SmileIcon/>
            {title}
          </CardTitle>
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm ">
            Click the button below to get started
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={onAction} className="px-6">
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}