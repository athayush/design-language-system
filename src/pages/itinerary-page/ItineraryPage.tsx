
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Breadcrumb } from "@/general/atoms/breadcrumb/Breadcrumb";
import { ServiceLayout } from "@/general/templates/service-layout/ServiceLayout";
import car from "./car.svg"
import stay from "./stay.svg"

function ItineraryPage() {
    const overviewMarkdown = `
## Overview

Nestled in the **foothills of the Himalayas**, Buxa Tiger Reserve in West Bengal is one of India's most scenic and biodiverse forest reserves. 
Rich with wildlife, historical ruins, and tribal culture, it offers a perfect escape for nature lovers and adventure seekers alike.

From **lush green forests** to **hidden trekking trails** leading to Bhutan borders, the reserve lets you experience a beautiful mix of nature, history, and mystery.

`;

    const highlightsMarkdown = `
## Highlights

- Home to over **200 species of birds** and **40 species of mammals** including tigers, elephants, and leopards  
- Explore **Buxa Fort**, a historic site with Bhutanese origins  
- Visit **Jayanti River** — famous for its pebbled riverbed and serene views  
- Trek through **Sikiajhora River Safari** and **Raimatang Village**  
- Perfect destination for **trekking, birdwatching, and camping**
`;

    const reachMarkdown = `
### How to Reach

- **By Air:** Nearest airport is *Bagdogra Airport (160 km)*  
- **By Train:** Alipurduar Junction (20 km) is the closest railhead  
- **By Road:** Well connected via NH-31 to Siliguri and Cooch Behar
`;

    const bestTimeMarkdown = `
### Best Time to Visit

- **October to April** — Ideal for wildlife sightings and pleasant weather  
- **Avoid monsoon (June to September)** as heavy rainfall can disrupt safaris
`;

    const itineraryDays = [
        {
            day: "Day 1",
            title: "Arrival & Forest Introduction",
            description: `
**Arrive at Alipurduar**, followed by transfer to Buxa Tiger Reserve.  
Check-in at a forest lodge and enjoy your first jungle walk along the Buxa foothills.  
Evening bonfire with local cultural interactions.
      `,
        },
        {
            day: "Day 2",
            title: "Buxa Fort Trek & Jayanti River",
            description: `
After breakfast, start your **trek to Buxa Fort (5 km)** through dense sal forests.  
Enjoy panoramic views of Bhutan hills and have a riverside picnic at **Jayanti River**.
      `,
        },
        {
            day: "Day 3",
            title: "Raimatang Safari & Departure",
            description: `
Early morning **jeep safari to Raimatang**, known for elephant herds and birdlife.  
Return to lodge for breakfast and proceed for departure.
      `,
        },
    ];

    return (
        <ServiceLayout
            AppBar={{
                title: "Buxa Tiger Reserve",
                subTitle: "7 Days Wellness Programs",
            }}
        >
            <Breadcrumb currentPage="Buxa Tiger Reserve" className="p-4 pb-0" links={[
                { to: "#", children: "Home" },
                { to: "#", children: "Wellness Programs" },
            ]} />
            <main className="mx-auto max-w-6xl px-4  space-y-6">
                {/* Hero Section */}
                <section className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <img
                        src="https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/m_activities_dooars_buxa_tiger_reserve_l_368_552.jpg"
                        alt="Buxa Tiger Reserve"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white space-y-2">
                            <h1 className="text-3xl font-semibold">Buxa Tiger Reserve</h1>
                            <p className="text-lg opacity-90">Alipurduar, West Bengal, India</p>
                            <Badge >
                                ⭐ 4.7 / 5 (523 Reviews)
                            </Badge>
                        </div>
                    </div>
                </section>
                <section className="space-y-2 border-b">
                    <h3 className="text-3xl font-bold ">Glimpse of Buxa Tiger Reserve with FREE Whale Watching Tour</h3>
                    <Badge  className="mb-2">6D/5N</Badge>
                </section>
                <section className="space-y-2 pb-2 border-b">
                    <div className="flex items-center gap-1">
                        <img src={car} alt="car" />
                        <p className="font-semibold">Transfer Included</p>
                    </div>
                      <div className="flex items-center gap-1">
                        <img src={stay} alt="svg" />
                        <p className="font-semibold">Stay Included</p>
                    </div>
                </section>
                <section className="prose prose-gray max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                        {overviewMarkdown}
                    </ReactMarkdown>
                </section>
                <Separator />
                <section className="prose prose-gray max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {highlightsMarkdown}
                    </ReactMarkdown>
                </section>
                <Separator />
                <section className="grid md:grid-cols-2 gap-8">
                    <Card className="p-0">
                        <CardContent className="p-6">
                            <div className="prose prose-gray max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {bestTimeMarkdown}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="p-0">
                        <CardContent className="p-6 prose prose-gray max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                                {reachMarkdown}
                            </ReactMarkdown>
                        </CardContent>
                    </Card>
                </section>
                <Separator />
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Suggested Itinerary</h2>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {itineraryDays.map((day, idx) => (
                            <AccordionItem key={idx} value={`day-${idx}`}>
                                <AccordionTrigger className="text-lg font-medium">
                                    {day.day}: {day.title}
                                </AccordionTrigger>
                                <AccordionContent className="prose prose-gray max-w-none">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {day.description}
                                    </ReactMarkdown>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
                <Separator />
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/t_ufs/m_Neora%20Valley%20National%20Park_p_496_372.jpg",
                            "https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/t_ufs/m_activities_dooars_samsing_l_441_657.jpg",
                            "https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/t_ufs/m_activities_dooars_gorumara_national_park_l_303_456.jpg",
                            "https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/t_ufs/m_activities_dooars_lava_lolegaon_l_446_595.jpg",
                        ].map((src, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${i + 1}`}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </ServiceLayout>
    );
}

export { ItineraryPage }