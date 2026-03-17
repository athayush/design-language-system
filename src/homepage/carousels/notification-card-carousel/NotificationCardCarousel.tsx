import { CustomCarousel } from "@/components/ui/custom-carousel/CustomCarousel";
import { NotificationCard2 } from "@/homepage/banner/notification-card2/NotificationCard2"; 

function NotificationCardCarousel() {
    const cards = notificationData.map((item, index) => (
        <NotificationCard2 key={index} {...item} />
    ));

    return (
        <div className="w-full h-full ">
            <CustomCarousel items={cards} />
        </div>
    );
}

const notificationData = [
    {
        title: "New Feature Released",
        description: "Explore our brand new dashboard with enhanced analytics.",
        path: "/features",
        points: [
            "Real-time insights",
            "Custom reporting available",
        ],
        buttonText: "Explore Now",
    },
    {
        title: "Security Alert Issue",
        description: "We detected unusual account activity. Anything Works",
        path: "/security",
        points: ["Reset your password", "Enable two-factor authentication"],
        buttonText: "Secure Account",
    },
];

export { NotificationCardCarousel };