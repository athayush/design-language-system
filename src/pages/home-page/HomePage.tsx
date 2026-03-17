// import { Icon } from "@/design-tokens/icon/Icon";
import { Section } from "@/general/atoms/section/Section";
import { HomeLayout } from "@/general/templates/home-layout/HomeLayout";
import { Banner } from "@/homepage/banner/banner1/Banner";
import { FeaturedCard } from "@/homepage/cards/featured-card/FeaturedCard";
import { UpcomingAppointmentCard, type UpcomingAppointmentCardProps } from "@/homepage/cards/upcoming-appointment-card/UpcomingAppointmentCard";
import { UserBriefCard, type subscriber } from "@/homepage/cards/user-brief-card/UserBriefCard";
import { ExpandableCardsCarousel } from "@/homepage/carousels/expendable-card-carousel/ExpendableCardsCarousel";
import { ProductShowcaseCarousel } from "@/homepage/carousels/product-showcase-carousel/ProductShowcaseCarousel";
import { HomeFooter } from "@/homepage/footer/home-footer/HomeFooter";
import { AutoCompleteSearchBar } from "@/homepage/searchbar/AutoCompleteSearchBar";
// import { ShoppingCart } from "lucide-react";
import { NotificationCard } from "@/homepage/cards/notification-card/NotificationCard";
import { SpecialityCard, type SpecialityCardProps } from "@/homepage/cards/speciality-card/SpecialityCard";
import { ProductShowcaseDialog } from "@/homepage/cards/product-showcase-dialog/ProductShowcaseDialog";
import { SpecialityDrawer } from "@/homepage/drawer/speciality-drawer/SpecialityDrawer";
import { ChartPieDonut } from "@/general/charts/ChartPieDonut";
import { Heading } from "@/general/typography/heading/Heading";
import { Button } from "@/general/atoms/button/Button";
import { ServicesDrawer } from "@/homepage/drawer/services-drawer/ServicesDrawer";
import Folder from "@/general/icon/folder/Folder";
import { BlogsMarquee } from "@/homepage/marquee/BlogsMarquee";
// import { RadarChartDemo } from "@/general/charts/RadarChartDemo";
import { lazy, Suspense } from "react";

export const description = "A bar chart"

// const servicesList = [
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-female-character-speaking-smartphone_23-2148938894.jpg?t=st=1761653111~exp=1761656711~hmac=7ca447baa50ae96d4037964c86c3aa1db17646ae4138892d9067716d253d61e8&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Blood Tests",
//         description: "Get full body checkup at 60% off",
//         feature: "Popular",
//     },
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg?t=st=1761653173~exp=1761656773~hmac=63cd2ac5d6b6f233f54d88db612bf0e97447835c0ba3236a8fe84fc613ea6365&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Diabetes Care",
//         description: "Includes HbA1c & glucose testing",
//         feature: "New",
//     },
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-female-character-with-superhero-cape-launching-into-flight_23-2148938887.jpg?t=st=1761653212~exp=1761656812~hmac=bfdbbe0b66067677cc75e3476bcc916f9667054561427871139d725be0b465bc&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Vitamin Profile",
//         description: "Check Vitamin D, B12 & more",
//         feature: "Trending",
//     },
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-woman-sitting-chair-with-smartphone_23-2149485783.jpg?t=st=1761653325~exp=1761656925~hmac=167667e0abe3a46a2be3b9bfb9ceb532f3ff1ac7b2149e3ca839303f534379cb&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Thyroid Panel",
//         description: "TSH, T3 & T4 in one test",
//     },
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-female-character-with-superhero-cape-launching-into-flight_23-2148938887.jpg?t=st=1761653212~exp=1761656812~hmac=bfdbbe0b66067677cc75e3476bcc916f9667054561427871139d725be0b465bc&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Vitamin Profile",
//         description: "Check Vitamin D, B12 & more",
//         feature: "Trending",
//     },
//     {
//         url: "#",
//         image: "https://img.freepik.com/free-psd/3d-woman-sitting-chair-with-smartphone_23-2149485783.jpg?t=st=1761653325~exp=1761656925~hmac=167667e0abe3a46a2be3b9bfb9ceb532f3ff1ac7b2149e3ca839303f534379cb&w=2000",
//         bgColor: "bg-tertiary-container",
//         title: "Thyroid Panel",
//         description: "TSH, T3 & T4 in one test",
//     },
// ];

const blogs = [
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/august/behavioral-health-physicians-web.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/october/breast-cancer-genetics-web.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/september/healthy-aging-blog-web.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/august/back-to-school-germs.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/september/radiation-therapy.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
    {
        image: "https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2025/august/behavioral-health-physicians-web.jpg",
        title: "Healthy Living Tips",
        date: "Jan 12, 2025",
        author: "John Doe",
        description: "Learn ways to improve your day with simple habits.",
        categories: ["Health", "Lifestyle"],
    },
]

const videos = [
    "/dr-ambuj_c.mp4",
    "/dummy-video.mp4",
    "/dr-ambuj_c.mp4",
    "/dummy-video.mp4",
    "/dr-ambuj_c.mp4",
    "/dummy-video.mp4",
]

const appointmentList: UpcomingAppointmentCardProps[] = [
    {
        doctorName: "Dr. Strange",
        doctorSpeciality: "Neurosurgeon",
        case: { summary: [{ brief: "Follow-up for brain scan analysis." }] },
        serviceDetail: [{ status: "Upcoming" }],
        appointmentFor: { name: "Tony Stark" },
        appointmentBy: { name: "Pepper Potts" },
        place: "In Clinic",
        date: "Wednesday, 15",
        time: "10:00 AM",
    },
    {
        doctorName: "Dr. Meredith Grey",
        doctorSpeciality: "General Surgeon",
        case: { summary: [{ brief: "Consultation regarding surgery recovery." }] },
        serviceDetail: [{ status: "Confirmed" }],
        appointmentFor: { name: "Cristina Yang" },
        appointmentBy: { name: "Derek Shepherd" },
        place: "Online",
        date: "Friday, 18",
        time: "02:00 PM",
    },
    {
        doctorName: "Dr. House",
        doctorSpeciality: "Diagnostics",
        case: { summary: [{ brief: "Investigation of complex symptoms." }] },
        serviceDetail: [{ status: "Pending" }],
        appointmentFor: { name: "Wilson" },
        appointmentBy: { name: "Thirteen" },
        place: "At Home",
        date: "Monday, 21",
        time: "06:00 PM",
    },
];

const notifications = [
    {
        title: "New Appointment Available",
        description: "Dr. Smith has opened new slots for tomorrow. Book now to secure your spot.",
        btnTitle: "Book Now",
    },
    {
        title: "Upcoming Checkup Reminder",
        description: "You have a scheduled health checkup next week. Make sure to confirm.",
        btnTitle: "View",
    },
    {
        title: "Limited Time Offer",
        description: "Get 20% off on first consultation with our top specialists.",
        btnTitle: "Grab Offer",
    },
];

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
    }
]

const mockSubscribers: subscriber[] = [
    {
        id: "1",
        name: "Ankush Kumar",
        username: "ankush123",
        email: "ankush@example.com",
        relation: "Self",
        avatar: "https://i.pravatar.cc/150?img=1",
        progress: 0,
    },
    {
        id: "2",
        name: "Priya Sharma",
        username: "priya_s",
        relation: "Wife",
        avatar: "https://i.pravatar.cc/150?img=2",
        progress: 20,
    },
    {
        id: "3",
        name: "Rohan Kumar",
        username: "rohan_k",
        relation: "Son",
        avatar: "https://i.pravatar.cc/150?img=3",
        progress: 60,
    },
    {
        id: "4",
        name: "Anita Devi",
        username: "anita_d",
        relation: "Mother",
        avatar: "https://i.pravatar.cc/150?img=4",
        progress: 90,
    },
];

const RadarTracker = lazy(() => import("@/general/charts/RadarTrackerCard").then(module => ({ default: module.RadarTrackerCard })));

function HomePage() {
    const primaryUser = mockSubscribers.find(user => user.relation === "Self");
    return (
        <HomeLayout>
            <Section>
                <div className="w-full flex justify-center gap-4 items-center pt-4">
                    <AutoCompleteSearchBar />
                </div>
                <UserBriefCard subscribers={mockSubscribers} userId={primaryUser?.id} />
            </Section>
            <Section title="Top Actions For You" className={{ title: "mb-0" }} scroll="horizontal">
                {notifications.map((item, index) => (
                    <NotificationCard
                        key={index}
                        title={item.title}
                        description={item.description} 
                        btnTitle={item.btnTitle}
                    />
                ))}
            </Section>
            <Section title="Upcoming Appointments"
                className={{ title: "mb-0" }} scroll="horizontal">
                {appointmentList.map((appointment, index) => (
                    <a href="#" key={index} title="Appointment Details">
                        <UpcomingAppointmentCard key={index} {...appointment} />
                    </a>
                ))}
            </Section>
            <FeaturedCard imageUrl="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370" title="Exploring the best Wellness Programs" features={["Nature", "Relief", "Adventure"]} ctaText="More Details" />
            <Section className={{ section: "flex flex-col md:flex-row justify-between items-center mb-10 md:mb-0  md:py-20" }}>
                <ChartPieDonut />
                <div className="w-full text-center md:text-left md:w-1/2 space-y-3">
                    <Heading>Your Health Foresight is 0% Complete</Heading>
                    <p>Standard tests see the surface. Our Complete Health Foresight analyzes 122 hidden markers for predictive insights. Stop guessing.</p>
                    <Button>Unlock Your Full Health Report (Book CHF)</Button>
                </div>
            </Section>
            {/* <Section title="Our Services" >
                <div className="grid grid-cols-3 place-items-center gap-4">
                    {servicesList.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </div>
            </Section> */}
            <Section title="Your Free Tools" className={{ section: " py-6 " }}>
                <div className="flex justify-center md:flex-row flex-col md:gap-10 gap-4">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-40 relative">
                            <Folder size={2} color="#aec7fe" className="custom-folder absolute top-16 -left-8" />
                        </div>
                        <p className="text-sm font-semibold text-center mt-2">You have used 0 MB of your 500 MB free storage.</p>
                    </div>
                    <div className="mx-auto mt-4 space-y-2 md:mx-0 w-80">
              <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
                <RadarTracker />
              </Suspense>
            </div>
                </div>
            </Section>
            <ExpandableCardsCarousel />
            <Section title="All Specialities" className={{ section: "relative mb-0", secondarySection: "mb-0" }} dialog={<SpecialityDrawer />}>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-4">
                    {specialities.map(speciality => (
                        <SpecialityCard key={speciality.title} image={speciality.image} title={speciality.title} url={speciality.url} />
                    ))}
                </div>
            </Section>
            <ProductShowcaseCarousel />
            <Section className={{ section: "flex flex-col md:flex-row justify-between gap-6 items-center my-10 mb-10 md:mb-0 " }}>
                <img src="/health.jpg" alt="health" className="h-full w-full md:w-1/2 object-cover rounded-2xl mb-10" />
                <div className="w-full text-center md:text-left md:w-1/2 space-y-3">
                    <Heading>Need Something Now?</Heading>
                    <p>Choose the service according to your need. We have multiple options that will take care of your health.</p>
                    <ServicesDrawer />
                </div>
            </Section>
            <Section title="Featured Products" buttonClassName="text-xs rounded-xl">
                <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row">
                    {/* <ProductShowcaseDialog />
                    <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0 md:ml-4"> */}
                        {[...new Array(2)].map((_, index) => (
                            <ProductShowcaseDialog key={index} />
                        ))}
                    {/* </div> */}
                </div>
            </Section>
            <Section title="Insights from Our Experts" className={{ section: "mx-4", title: "ml-4 mt-6" }}>
                <BlogsMarquee blogs={blogs} videos={videos} />
            </Section>
            {/* <Section title="Insights from Our Experts" className={{ section: "mx-4", title: "ml-4 mt-6" }}>
                <BlogsCarousel blogs={blogs} />
            </Section> */}
            <Section>
                <Banner />
            </Section>
            <HomeFooter />
        </HomeLayout>
    )
}

export { HomePage }


