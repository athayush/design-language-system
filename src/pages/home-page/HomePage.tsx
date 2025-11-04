import { Icon } from "@/design-tokens/icon/Icon";
import { Section } from "@/general/atoms/section/Section";
import { HomeLayout } from "@/general/templates/home-layout/HomeLayout";
import { Banner } from "@/homepage/banner/banner1/Banner";
import { FeaturedCard } from "@/homepage/cards/featured-card/FeaturedCard";
import { ServiceCard } from "@/homepage/cards/service-card/ServiceCard";
import { UpcomingAppointmentCard, type UpcomingAppointmentCardProps } from "@/homepage/cards/upcoming-appointment-card/UpcomingAppointmentCard";
import { UserBriefCard, type subscriber } from "@/homepage/cards/user-brief-card/UserBriefCard";
import { ExpandableCardsCarousel } from "@/homepage/carousels/expendable-card-carousel/ExpendableCardsCarousel";
import { ProductShowcaseCarousel } from "@/homepage/carousels/product-showcase-carousel/ProductShowcaseCarousel";
import { HomeFooter } from "@/homepage/footer/home-footer/HomeFooter";
import { AutoCompleteSearchBar } from "@/homepage/searchbar/AutoCompleteSearchBar";
import { ShoppingCart } from "lucide-react";
import { NotificationCard } from "@/homepage/cards/notification-card/NotificationCard";
import { SpecialityCard, type SpecialityCardProps } from "@/homepage/cards/speciality-card/SpecialityCard";
import { ProductShowcaseDialog } from "@/homepage/cards/product-showcase-dialog/ProductShowcaseDialog";
import { SpecialityDrawer } from "@/homepage/drawer/speciality-drawer/SpecialityDrawer";

const servicesList = [
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-female-character-speaking-smartphone_23-2148938894.jpg?t=st=1761653111~exp=1761656711~hmac=7ca447baa50ae96d4037964c86c3aa1db17646ae4138892d9067716d253d61e8&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Blood Tests",
        description: "Get full body checkup at 60% off",
        feature: "Popular",
    },
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg?t=st=1761653173~exp=1761656773~hmac=63cd2ac5d6b6f233f54d88db612bf0e97447835c0ba3236a8fe84fc613ea6365&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Diabetes Care",
        description: "Includes HbA1c & glucose testing",
        feature: "New",
    },
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-female-character-with-superhero-cape-launching-into-flight_23-2148938887.jpg?t=st=1761653212~exp=1761656812~hmac=bfdbbe0b66067677cc75e3476bcc916f9667054561427871139d725be0b465bc&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Vitamin Profile",
        description: "Check Vitamin D, B12 & more",
        feature: "Trending",
    },
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-woman-sitting-chair-with-smartphone_23-2149485783.jpg?t=st=1761653325~exp=1761656925~hmac=167667e0abe3a46a2be3b9bfb9ceb532f3ff1ac7b2149e3ca839303f534379cb&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Thyroid Panel",
        description: "TSH, T3 & T4 in one test",
    },
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-female-character-with-superhero-cape-launching-into-flight_23-2148938887.jpg?t=st=1761653212~exp=1761656812~hmac=bfdbbe0b66067677cc75e3476bcc916f9667054561427871139d725be0b465bc&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Vitamin Profile",
        description: "Check Vitamin D, B12 & more",
        feature: "Trending",
    },
    {
        url: "#",
        image: "https://img.freepik.com/free-psd/3d-woman-sitting-chair-with-smartphone_23-2149485783.jpg?t=st=1761653325~exp=1761656925~hmac=167667e0abe3a46a2be3b9bfb9ceb532f3ff1ac7b2149e3ca839303f534379cb&w=2000",
        bgColor: "bg-tertiary-container",
        title: "Thyroid Panel",
        description: "TSH, T3 & T4 in one test",
    },
];

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
        progress: 22,
    },
    {
        id: "2",
        name: "Priya Sharma",
        username: "priya_s",
        relation: "Wife",
        avatar: "https://i.pravatar.cc/150?img=2",
        progress: 65,
    },
    {
        id: "3",
        name: "Rohan Kumar",
        username: "rohan_k",
        relation: "Son",
        avatar: "https://i.pravatar.cc/150?img=3",
        progress: 45,
    },
    {
        id: "4",
        name: "Anita Devi",
        username: "anita_d",
        relation: "Mother",
        avatar: "https://i.pravatar.cc/150?img=4",
        progress: 80,
    },
];

function HomePage() {
    const primaryUser = mockSubscribers.find(user => user.relation === "Self");
    return (
        <HomeLayout>
            <Section>
                <div className="w-full flex justify-center gap-4 items-center mt-4">
                    <AutoCompleteSearchBar />
                    <Icon icon={ShoppingCart} rounded="xl" className={{ container: " bg-surface-container shadow" }} />
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
            <FeaturedCard imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1399" title="Exploring the best Wellness Programs" features={["Nature", "Relief", "Adventure"]} ctaText="More Details" />
            <Section title="Our Services" >
                <div className="grid grid-cols-3  md:grid-cols-4 gap-4 ">
                    {servicesList.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </div>
            </Section>
            <ExpandableCardsCarousel />
            <Section title="All Specialities" className={{ section: "relative mb-0", secondarySection: "mb-0" }} dialog={<SpecialityDrawer />}>
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {specialities.map(speciality => (
                        <SpecialityCard key={speciality.title} image={speciality.image} title={speciality.title} url={speciality.url} />
                    ))}
                </div>
            </Section>
            <ProductShowcaseCarousel />
            <Section title="Featured Products" buttonClassName="text-xs rounded-xl" buttonVariant={"outline"} buttonTitle="View All">
                <div className="w-full flex flex-col items-center justify-center">
                    <ProductShowcaseDialog />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[...new Array(4)].map((_, index) => (
                            <ProductShowcaseDialog key={index} />
                        ))}
                    </div>
                </div>
            </Section>
            <Section>
                <Banner />
            </Section>
            <HomeFooter />
        </HomeLayout>
    )
}

export { HomePage }