import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

type CategoryKey = "all" | "rooms" | "exterior" | "events";

const galleryData: Record<string, string[]> = {
    all: [
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/luxury-premium-riverview-with-balcony1.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/uploads/2024/08/lotus_suite5.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-13.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/luxury-premium-riverview-with-balcony1.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/uploads/2024/08/lotus_suite5.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-13.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-5.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-6.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-12.jpg",
    ],
    rooms: [
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/luxury-premium-riverview-with-balcony1.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/uploads/2024/08/lotus_suite5.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-13.jpg",
    ],
    exterior: [
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-3.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-7.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-7.jpg",
    ],
    dining: [
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-5.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-6.jpg",
        "https://www.gangakinare.com/ganga-kinare-rishikesh-hotel-resort/wp-content/themes/gangakinare/assets/images/home-gallery/home-gallery-12.jpg",
    ],
};



export function GalleryTabs() {
 const [active, setActive] = useState<CategoryKey>("all");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // ✅ Detect screen size dynamically
  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreen(); // run once initially
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const imagesToDisplay =
    active === "all" && isSmallScreen
      ? galleryData[active].slice(0, 3)
      : galleryData[active];

  const categories = Object.keys(galleryData) as CategoryKey[];


  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <Button
                key={cat}
                variant={isActive ? "primary" : "outline"}
                onClick={() => setActive(cat)}
                className={`capitalize px-5 py-2 transition-transform duration-150 ${
                  isActive ? "scale-105 shadow-lg" : "hover:scale-105"
                }`}
              >
                {cat}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active + (isSmallScreen ? "-sm" : "-lg")}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delayChildren: 0.05, staggerChildren: 0.05 },
            }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {imagesToDisplay.map((src, idx) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -6 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl"
              >
                <div className="w-full aspect-[4/3]">
                  <img
                    src={src}
                    alt={`${active}-${idx}`}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
