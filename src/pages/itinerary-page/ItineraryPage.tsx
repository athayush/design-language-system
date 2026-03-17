
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Breadcrumb } from "@/general/atoms/breadcrumb/Breadcrumb";
import car from "./car.svg"
import stay from "./stay.svg"
import { Section } from "@/general/atoms/section/Section";
import { ReviewsMarquee } from "./ReviewsMarquee";
import { HomeFooter } from "@/homepage/footer/home-footer/HomeFooter";
import { Layout } from "@/general/templates/layout/Layout";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Button } from "@/general/atoms/button/Button";
import { GalleryTabs } from "./GalleryTabs";

function ItineraryPage() {
    const overviewMarkdown = `
Nestled in the **foothills of the Himalayas**, Buxa Tiger Reserve in West Bengal is one of India's most scenic and biodiverse forest reserves. 
Rich with wildlife, historical ruins, and tribal culture, it offers a perfect escape for nature lovers and adventure seekers alike.

From **lush green forests** to **hidden trekking trails** leading to Bhutan borders, the reserve lets you experience a beautiful mix of nature, history, and mystery.
`;

    const highlightsMarkdown = `
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
        <Layout
        >
            <AppBarWithBack
                title="Buxa Tiger Reserve"
                subTitle="Wellness Plan"
            ><Button>Book Now</Button></AppBarWithBack>

            <main className="w-full space-y-6 md:max-w-3xl bg-surface-bright lg:max-w-4xl mx-auto">
                <Breadcrumb currentPage="Buxa Tiger Reserve" className="p-4 pb-0 mb-2" links={[
                    { to: "#", children: "Home" },
                    { to: "#", children: "Wellness Programs" },
                ]} />
                <div className="mx-4">
                    <Section className={{ section: "relative w-full h-[400px] mx-0 rounded-2xl overflow-hidden" }}>
                        <img
                            src="https://hblimg.mmtcdn.com/content/hubble/img/dooars/mmt/activities/m_activities_dooars_buxa_tiger_reserve_l_368_552.jpg"
                            alt="Buxa Tiger Reserve"
                            className="absolute inset-0 w-full h-full object-cover "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                            <div className="text-white space-y-2">
                                <h1 className="text-3xl font-semibold">Buxa Tiger Reserve</h1>
                                <p className="text-lg opacity-90">Alipurduar, West Bengal, India</p>
                                <Badge>
                                    ⭐ 4.7 / 5 (523 Reviews)
                                </Badge>
                            </div>
                        </div>
                    </Section>
                </div>
                <Section>
                    <h3 className="text-3xl font-bold">Glimpse of Buxa Tiger Reserve with FREE Whale Watching Tour</h3>
                    <Badge variant={"outline"} className="mb-2">6D/5N</Badge>
                </Section>
                <Section className={{ section: "flex gap-6" }} >
                    <div className="flex items-center gap-1">
                        <img src={car} alt="car" />
                        <p className="font-semibold">Transfer Included</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={stay} alt="svg" />
                        <p className="font-semibold">Stay Included</p>
                    </div>
                </Section>
                <Section title="Overview" >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                        {overviewMarkdown}
                    </ReactMarkdown>
                </Section>
                <Section title="Highlights" >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {highlightsMarkdown}
                    </ReactMarkdown>
                </Section>
                <Section className={{ section: "grid md:grid-cols-2 gap-6" }}>
                    <Card className="p-0 gap-0">
                        <CardContent className="p-6">
                            <div className="prose prose-gray max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {bestTimeMarkdown}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="p-0 gap-0">
                        <CardContent className="p-6 prose prose-gray max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                                {reachMarkdown}
                            </ReactMarkdown>
                        </CardContent>
                    </Card>
                </Section>
                <Card className="mx-4 gap-2 p-4">
                    <h2 className="text-2xl font-semibold">Suggested Itinerary</h2>
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
                </Card>
                <Section title="Photo Gallery">
                    <GalleryTabs />
                </Section>
                <Section title="Reviews">
                    <ReviewsMarquee />
                </Section>
            </main>
            <HomeFooter />
        </Layout>
    );
}

export { ItineraryPage }