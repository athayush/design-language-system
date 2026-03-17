import { Button } from "@/general/atoms/button/Button";
import { Drawer } from "@/general/atoms/drawer/Drawer"
import { Section } from "@/general/atoms/section/Section";
import type { SpecialityCardProps } from "@/homepage/cards/speciality-card/SpecialityCard";
import { AutoCompleteSearchBar } from "@/homepage/searchbar/AutoCompleteSearchBar";
import { useState } from "react";

const specialities: SpecialityCardProps[] = [
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png",
    title: "Fever",
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6411b8078b757.png",
    title: "Chest Pain"
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/640f30b65e3b6.png",
    title: "Cough & Cold"
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6411b8282b4f8.png",
    title: "Constipation",
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6411ae36e0280.png",
    title: "Sore Throat",
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6411aeb1257bf.png",
    title: "Infertility",
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6411ae08a0cd0.png",
    title: "Irregular Periods"
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/6419869900be0.png",
    title: "Headache"
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/641964e0538e5.png",
    title: "Abdominal Pain"
  },
  {
    url: "#",
    image: "https://helma.healthians.com/stationery/mailer-assets/64196532ea9d9.png",
    title: "Itching"
  }
]

function SpecialityDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      trigger={<Button variant={"outline"} className="text-xs rounded-xl">View All</Button>}
      title="All Specialities"
      description="Choose speciality according to your health needs"
      open={open}
      onOpenChange={setOpen}
      className={{
        content: "h-[75vh] md:w-1/2 mx-auto",
        scroll: "h-full max-h-[calc(90vh-150px)]",
      }}
    >
      <div className="m-4">
        <AutoCompleteSearchBar />
      </div>
      <Section asDiv className={{ section: "flex flex-col   divide-primary" }}>
        {/* <div className=""> */}
        {specialities.map(speciality => (
          <a href={speciality.url} className="border-b border-primary/10 hover:bg-secondary/10" key={speciality.title}>
            <div className="flex items-center gap-4 py-2" >
              <img src={speciality.image} alt={speciality.title} className="rounded-full shadow-sm size-13" />
              <p className="font-semibold text-primary/90">{speciality.title}</p>
            </div>
          </a>
        ))}
        {/* </div> */}
      </Section>

    </Drawer>
  )
}

export { SpecialityDrawer }