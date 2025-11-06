import { CustomCarousel, CarouselCard } from "@/components/ui/custom-carousel/CustomCarousel";
import { Heading } from "@/general/typography/heading/Heading";


function ProductShowcaseCarousel() {
    const cards = data.map((card, index) => (
        <CarouselCard key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-fit ">
           <Heading hTag="h4" className="mx-4 mt-4 text-2xl border-b-[1.5px] border-b-ath-outline/15">Curated For You</Heading>
            <CustomCarousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Get On With Your Upgrade",
        title: "Your Arsenal For APEX Performance",
        src: "https://www.athayush.com/wp-content/uploads/2025/07/dashboard-mobile-1-scaled.png",
        content: <DummyContent />,
    },
    {
        category: "Engineer Fuel On Demand",
        title: "Imagine Eating All Your Favorite Food.",
        src: "https://www.athayush.com/wp-content/uploads/2025/07/mobile-size-card-3.png",
        content: <DummyContent />,
    },
    {
        category: "Precision Data. Total Control",
        title: "Track Records Of Your Fitness Journey.",
        src: "https://www.athayush.com/wp-content/uploads/2025/07/mobile-size-card-1.png",
        content: <DummyContent />,
    },

    {
        category: "Your Personal Unfaif Advantage",
        title: "Access To Expert Training Plans.",
        src: "https://www.athayush.com/wp-content/uploads/2025/07/mobile-hero-4-scaled.jpeg",
        content: <DummyContent />,
    },
];

export { ProductShowcaseCarousel }