import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/general/atoms/button/Button";
import { ParaReveal } from "@/general/atoms/para-reveal/ParaReveal";
import { Section } from "@/general/atoms/section/Section";
import { CircleX } from "lucide-react";

const doctorAppointment = {
  data: {
    caseSummaryRx:
      "Patient presented with mild fever and throat irritation for the last 3 days. No signs of infection or inflammation observed upon examination. Advised rest and hydration.",
    prescription:
      "Paracetamol 500mg twice a day for 3 days, followed by Vitamin C tablets for 5 days.",
  },
};

const doctorPrescription = {
  data: [
    {
      medicineId: 1,
      medicineName: "Paracetamol",
      frequency: "2 times/day",
      frequencyDuration: "3 days",
      numberOfFrequencyDuration: 3,
      conditions: "After meals",
    },
    {
      medicineId: 2,
      medicineName: "Vitamin C",
      frequency: "1 tablet/day",
      frequencyDuration: "5 days",
      numberOfFrequencyDuration: 5,
      conditions: "Morning with water",
    },
  ],
};

function DoctorDetails({
  children,
  serviceDetailId,
}: {
  children: React.ReactNode;
  serviceDetailId: number;
}) {
  return (
    <Drawer >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="pt-2">
        <div id={String(serviceDetailId)} className="flex items-center justify-between gap-4 px-4 pt-2 pb-4">
          <DrawerHeader className="gap-0 p-0">
            <DrawerTitle>Details by Doctor:</DrawerTitle>
            <DrawerDescription>
              These are the information shared by the doctor.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerClose>
            <CircleX size={24} />
          </DrawerClose>
        </div>

        <Separator className="px-4" />

        <ScrollArea className="h-[30rem]">
          <Section
            className={{
              section: "px-4 py-3 text-on-surface-variant space-y-4",
            }}
          >
            <div>
              <p className="font-semibold">Doctor Summary:</p>
              <ParaReveal>{doctorAppointment.data.caseSummaryRx}</ParaReveal>
            </div>

            <div>
              <p className="font-semibold">Prescription:</p>
              <ParaReveal>{doctorAppointment.data.prescription}</ParaReveal>
            </div>

            <div>
              <p className="font-semibold">Medicines:</p>
              <ul className="list-disc list-inside space-y-3">
                {doctorPrescription.data.map((medicine) => (
                  <li key={medicine.medicineId}>
                    <span className="font-semibold">
                      Medicine Name:
                    </span>{" "}
                    {medicine.medicineName}
                    <p className="ms-6">
                      <span className="font-semibold">Frequency:</span>{" "}
                      {medicine.frequency}
                    </p>
                    <p className="ms-6">
                      <span className="font-semibold">
                        Frequency Duration:
                      </span>{" "}
                      {medicine.frequencyDuration}
                    </p>
                    <p className="ms-6">
                      <span className="font-semibold">
                        Number of Frequency Duration:
                      </span>{" "}
                      {medicine.numberOfFrequencyDuration}
                    </p>
                    <p className="ms-6">
                      <span className="font-semibold">Conditions:</span>{" "}
                      {medicine.conditions}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 📅 Follow-up */}
            <div>
              <p>
                <span className="font-semibold">Follow-up Date:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <Button className="mt-4">Download Prescription</Button>
          </Section>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export { DoctorDetails };