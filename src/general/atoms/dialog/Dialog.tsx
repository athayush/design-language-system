import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type { LucideIcon } from "lucide-react";
// import { useDialogStore } from "@/components/core/store/dialogStore";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, Dialog as DialogRoot, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type DialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    triggerLabel?: string;
    description?: string;
    icon?: LucideIcon;
    button?: Omit<React.ComponentProps<typeof Button>, "className">;
    className?: {
        dialog?: string;
        btn?: string;
        icon?: string;
    };
    trigger?: React.ReactNode;
} & React.ComponentProps<typeof DialogPrimitive.Root>;

export function Dialog({ title, className, triggerLabel, description, button, icon, children, trigger, open, onOpenChange }: DialogProps) {

    const IconComp = icon;

    return (
        <DialogRoot open={open} onOpenChange={onOpenChange}>
            {trigger
                ? (
                    <DialogTrigger asChild>
                        {trigger}
                    </DialogTrigger>
                )
                : (
                    (triggerLabel || icon) && (
                        <DialogTrigger asChild>
                            <Button {...button} className={cn("", className?.btn)}>
                                {icon && IconComp && <IconComp className={cn("", className?.icon)} />}
                                {triggerLabel}
                            </Button>
                        </DialogTrigger>
                    )
                )}
            <DialogContent className={cn("sm:max-w-[425px] overflow-hidden bg-surface-container-high", className?.dialog)}>
                <DialogHeader>
                    <DialogTitle className="text-on-surface">{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
            </DialogContent>
        </DialogRoot>
    );
}
