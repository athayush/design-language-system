import {
    CirclePlus,
    FlaskConical,
    House,
    Stethoscope,
} from "lucide-react";

import { Drawer, DrawerClose } from "@/general/atoms/drawer/Drawer"
import { useState } from "react";



export function ServicesSheet() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer
                open={open}
                onOpenChange={setOpen}
                title="Services"
                description="A range of services we provide."
                icon={CirclePlus}
            >
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
                                Lab Test
                            </p>
                        </div>
                    </a>
                </DrawerClose>



            </Drawer>
        </>
    );
}
