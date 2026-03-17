import {
    Ambulance,
    Bike,
    CirclePlus,
    FlaskConical,
    HeartPulse,
    House,
    Sparkles,
    Stethoscope,
} from "lucide-react";

import { Drawer, DrawerClose } from "@/general/atoms/drawer/Drawer"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/general/atoms/badge/Badge";
import { toast } from "sonner";



export function ServicesSheet() {
    const [open, setOpen] = useState(false);
    const handleSubscriptionClick = () => {
        toast.info(
            <div className="space-y-3">
                <p className="text-sm">
                    Currently only users who have purchased
                    {" "}
                    <strong>Subscription</strong>
                    {" "}
                    can book this service. Contact us to activate your subscription.
                </p>

                <div
                    onClick={() => toast.dismiss()}
                    className="inline-block"
                >
                    <Button>Buy Now</Button>
                </div>
            </div>,
        );
    };
    return (
        <>
            <Drawer
                open={open}
                onOpenChange={setOpen}
                title="Services"
                description="A range of services we provide."
                icon={CirclePlus}
                className={{
                    content: "h-[65vh] md:h-[55vh] md:w-1/2 mx-auto",
                    scroll: "h-full max-h-[calc(80vh-200px)]",
                }}
            >
                <DrawerClose asChild>
                    <a
                        href="https://www.athayush.com/complete-health-foresight/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2.5 pt-4 pb-3 px-4 border-b hover:bg-surface-container-high"
                    >
                        <div className="flex items-center gap-2.5">
                            <HeartPulse size={40} className="p-2 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Complete Health Foresight
                            </p>
                        </div>
                    </a>
                </DrawerClose>
                <DrawerClose asChild>
                    <a
                        className="flex items-center justify-between gap-2.5 pt-4 pb-3 px-4 border-b hover:bg-surface-container-high"
                    >
                        <div className="flex items-center gap-2.5">
                            <Stethoscope size={40} className="p-2 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Doctor Appointment
                            </p>
                        </div>
                    </a>
                </DrawerClose>
                <DrawerClose asChild>
                    <a
                        className="flex items-center justify-between gap-2.5 pt-4 pb-3 px-4 border-b hover:bg-surface-container-high"
                    >
                        <div className="flex items-center gap-2.5">
                            <House size={40} className="p-2 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Personnel Appointment
                            </p>
                        </div>
                    </a>
                </DrawerClose>
                <DrawerClose asChild>
                    <a
                        className="flex items-center justify-between gap-2.5 pt-4 pb-3 px-4 border-b hover:bg-surface-container-high"
                    >
                        <div className="flex items-center gap-2.5">
                            <FlaskConical size={40} className="p-2 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Diagnostic Test
                            </p>
                        </div>
                    </a>
                </DrawerClose>
                <DrawerClose onClick={handleSubscriptionClick} asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center justify-between gap-2.5 h-16 px-4 border-b cursor-pointer w-full hover:bg-surface-container-high hover:text-on-surface"
                    >
                        <div className="flex items-center gap-2.5 ">
                            <Bike size={40} className="p-2 size-10 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Paramedic Required
                            </p>
                        </div>
                        <Badge variant="secondary" className={{ badge: "shadow" }}>
                            <Sparkles size={10} />
                            <small className="font-semibold">Sub only</small>
                        </Badge>
                    </Button>
                </DrawerClose>
                <DrawerClose onClick={handleSubscriptionClick} asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center justify-between gap-2.5 h-16 px-4 border-b hover:bg-surface-container-high cursor-pointer w-full hover:text-on-surface "
                    >
                        <div className="flex items-center gap-2.5">
                            <Ambulance size={40} className="size-10 p-2 rounded-full border" />
                            <p className="text-sm font-medium truncate md:text-lg">
                                Ambulance Booking
                            </p>
                        </div>
                        <Badge variant="secondary" className={{ badge: "shadow" }}>
                            <Sparkles size={10} />
                            <small className="font-semibold">Sub only</small>
                        </Badge>
                    </Button>
                </DrawerClose>
            </Drawer>
        </>
    );
}
