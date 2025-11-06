import { useState } from "react";
import { Drawer } from "@/general/atoms/drawer/Drawer";
import { Section } from "@/general/atoms/section/Section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2Icon } from "lucide-react";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

type Service = {
    id: string;
    category: string;
    service: string;
    name: string;
    variant: string;
};

const categoryOptions = ["Category 1", "Category 2", "Category 3"];
const serviceOptions = ["Service 1", "Service 2", "Service 3"];
const nameOptions = ["Name 1", "Name 2", "Name 3"];
const variantOptions = ["Variant 1", "Variant 2", "Variant 3"];

function ServiceDrawer() {
    const [open, setOpen] = useState(false);

    const [services, setServices] = useState<Service[]>([]);

    const handleAddNewService = () => {
        setServices(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                category: "Category 1",
                service: "Service 1",
                name: "Name 1",
                variant: "Variant 1",
            },
        ]);
    };

    const handleUpdate = (
        index: number,
        field: keyof Service,
        value: string
    ) => {
        setServices(prev => {
            const copy = [...prev];
            copy[index][field] = value;
            return copy;
        });
    };

    const handleRemoveService = (index: number) => {
        setServices(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            {/* External button to open drawer */}
            {/* <Button onClick={() => setOpen(true)}>Open Service Drawer</Button> */}

            <Drawer
                open={open}
                onOpenChange={setOpen}
                title="Service Drawer"
                triggerLabel="Add Service"
                description="Add all your services"
                className={{
                    content: "h-[90vh]",
                    scroll: "h-full pb-36",
                    btn: "ml-auto",
                }}
            >
                <Section className={{ section: "mt-5 mx-5 grid gap-6" }}>
                    <div className="grid gap-6">
                        {services.map((service, i) => (
                            <div key={service.id} className="grid gap-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold">{`Services ${i + 1}:`}</h3>

                                    <Button
                                        type="button"
                                        variant="error"
                                        onClick={() => handleRemoveService(i)}
                                    >
                                        <Trash2Icon />
                                    </Button>
                                </div>

                                {/* CATEGORY */}
                                <div className="grid gap-1">
                                    <Label className="text-sm font-medium">Category</Label>
                                    <Select
                                        value={service.category}
                                        onValueChange={(value) =>
                                            handleUpdate(i, "category", value)
                                        }
                                    >
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categoryOptions.map((c) => (
                                                <SelectItem key={c} value={c}>
                                                    {c}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* SERVICE */}
                                <div className="grid gap-1">
                                    <Label className="text-sm font-medium">Service</Label>
                                    <Select
                                        value={service.service}
                                        onValueChange={(value) =>
                                            handleUpdate(i, "service", value)
                                        }
                                    >
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {serviceOptions.map((c) => (
                                                <SelectItem key={c} value={c}>
                                                    {c}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* NAME */}
                                <div className="grid gap-1">
                                    <Label className="text-sm font-medium">Name</Label>
                                    <Select
                                    
                                        value={service.name}
                                        onValueChange={(value) =>
                                            handleUpdate(i, "name", value)
                                        }
                                    >
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Select name" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {nameOptions.map((c) => (
                                                <SelectItem key={c} value={c}>
                                                    {c}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* VARIANT */}
                                <div className="grid gap-1">
                                    <Label className="text-sm font-medium">Variant</Label>
                                    <Select
                                        value={service.variant}
                                        onValueChange={(value) =>
                                            handleUpdate(i, "variant", value)
                                        }
                                    >
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Select variant" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {variantOptions.map((c) => (
                                                <SelectItem key={c} value={c}>
                                                    {c}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Separator />
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Sticky bottom buttons */}
                <div className="fixed bottom-0 z-50 inset-x-0 flex">
                    <Button
                        type="button"
                        variant="secondary"
                        className="w-1/2 rounded-none h-14"
                        onClick={handleAddNewService}
                    >
                        Add New Service
                    </Button>

                    <Button
                        className="w-1/2 rounded-none h-14"
                        onClick={() => setOpen(false)}
                    >
                        Save Changes
                    </Button>
                </div>
            </Drawer>
        </>
    );
}

export { ServiceDrawer }