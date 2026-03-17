import { Button } from "@/general/atoms/button/Button";
import { Drawer } from "@/general/atoms/drawer/Drawer"
import { Section } from "@/general/atoms/section/Section";
import type { SpecialityCardProps } from "@/homepage/cards/speciality-card/SpecialityCard";
import { useState } from "react";

const services: SpecialityCardProps[] = [
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png",
        title: "Health Risk Report (H.R.P)",
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6411b8078b757.png",
        title: "Book Sample Collection Request"
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/640f30b65e3b6.png",
        title: "Basic DRR (Predictive Health Profile)"
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6411b8282b4f8.png",
        title: "Advance DRR (Predictive Health Profile)",
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6411ae36e0280.png",
        title: "Book Doctor Appointment",
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6411aeb1257bf.png",
        title: "Book a Paramedic Visit",
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6411ae08a0cd0.png",
        title: "Book an Ambulance"
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/6419869900be0.png",
        title: "Request Hospitalization Support"
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/641964e0538e5.png",
        title: "Rapid Response System (SOS)"
    },
    {
        url: "#",
        image: "https://helma.healthians.com/stationery/mailer-assets/64196532ea9d9.png",
        title: "Book Wellness Plans"
    }
]

function ServicesDrawer() {
    const [open, setOpen] = useState(false);
    return (
        <Drawer
            trigger={<Button>Our Services</Button>}
            title="All Services"
            description="Choose services according to your health needs"
            open={open}
            onOpenChange={setOpen}
            className={{
                content: "h-[75vh] md:w-1/2 mx-auto",
                btn: "w-80",
                scroll: "h-full max-h-[calc(90vh-150px)]",
            }}
        >
            <Section asDiv className={{ section: "flex flex-col divide-primary" }}>
                {/* <div className=""> */}
                {services.map(service => (
                    <a href={service.url} className="border-b border-primary/10 hover:bg-secondary/10" key={service.title}>
                        <div className="flex items-center gap-4 py-2" >
                            <img src={service.image} alt={service.title} className="rounded-full shadow-sm size-13" />
                            <p className="font-semibold text-primary/90">{service.title}</p>
                        </div>
                    </a>
                ))}
                {/* </div> */}
            </Section>

        </Drawer>
    )
}

export { ServicesDrawer }