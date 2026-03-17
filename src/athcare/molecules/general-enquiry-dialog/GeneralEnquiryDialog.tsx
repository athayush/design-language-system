import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/general/atoms/button/Button";
import { Dialog } from "@/general/atoms/dialog/Dialog";
import type { TClassName } from "@/general/atoms/section/Section";
import { UserAvatar } from "@/general/atoms/user-avatar/UserAvatar";
import { cn } from "@/lib/utils";
import { useState } from "react";

type GeneralEnquiryDialogProps = {
    trigger?: React.ReactNode;
    triggerLabel?: string;
    className?: {
        trigger?: TClassName;
        dialog?: TClassName;
    };
};

export function GeneralEnquiryDialog({ trigger, triggerLabel, className }: GeneralEnquiryDialogProps) {
    const [open, setOpen] = useState(false);
    const user = {
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
        contact: "123-456-7890"
    }
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={triggerLabel ? undefined : trigger}
            title="General Enquiry Dialog"
            button={{ variant: "primary" }}
            className={{ btn: cn("rounded-2xl px-6 py-4 text-lg hover:bg-surface-container-highest transition duration-300 ease-in-out border-white", className?.trigger), dialog: cn("", className?.dialog) }}
            description="Feel free to reach out to us by filling this form."
            triggerLabel={trigger ? undefined : triggerLabel}
        >
            <div className="space-y-2">
                <p className="text-sm mb-1">User Details</p>
                <div className="border p-2 bg-surface-container-low rounded-xl">
                    <span className="flex items-center gap-2">
                        <UserAvatar
                            className={{ avatar: "size-16 contain" }}
                            profileUrl={"/placeholder.svg"}
                            altText={user?.name}
                            name={user?.name ?? ""}
                        />
                        <span>
                            <span className="block font-medium">
                                {user?.name}
                                {" "}
                                <span className="text-xs">
                                    {`(@${user?.username ?? "No username found"})`}
                                </span>
                            </span>
                            <span className="block text-sm text-muted-foreground">
                                {user?.email}
                            </span>
                            <span className="block text-xs ">
                                {user?.contact}
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="grid flex-1 gap-2 pt-2">
                <Label htmlFor="subject" className="sr-only">
                    Subject
                </Label>
                <Input
                    id="subject"
                />
            </div>
            <div className="grid flex-1 gap-2 pt-2">
                <Label htmlFor="message" className="sr-only">
                    Message
                </Label>
                <Input
                    id="message"
                />
            </div>
            <Button>Submit</Button>
        </Dialog>
    )
}