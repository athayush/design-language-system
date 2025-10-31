import { TextShimmer } from "@/components/ui/text-shimmer";
import { motion } from "motion/react";

type FooterProps = {
  version?: string;
  message?: string;
  country?: string;
}

export function HomeFooter({
  version = "PROD - v 8.7.2 (570)",
  message = "Live Healthy",
  country = "India",
}: FooterProps) {
  return (
    // <BackgroundBeamsWithCollision>
      <footer className="w-full flex flex-col h-1/2 items-center justify-center py-10 text-center text-gray-500">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-wide text-gray-500"
        >
          {version}
        </motion.p>

         <TextShimmer
      duration={8}
      className='text-5xl mt-16 font-bold [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      {message}
    </TextShimmer>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="my-16 flex items-center gap-2 text-lg font-medium text-gray-500"
        >
          <span>Crafted with</span>
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-red-500"
          >
            ❤️
          </motion.span>
          <span>in {country}</span>
        </motion.div>
      </footer>
  );
}