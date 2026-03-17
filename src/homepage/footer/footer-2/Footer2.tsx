import { motion } from "motion/react";
import { Noise } from "./Noise";

type FooterProps = {
  version?: string;
  message?: string;
  country?: string;
};

export function Footer2({
  version = "PROD - v 8.7.2 (570)",
  message = "Live Healthy",
  country = "India",
}: FooterProps) {
  return (
    <footer className="relative w-screen flex flex-col h-1/2 items-center justify-center py-10 text-center text-gray-500 overflow-hidden">
      {/* ✅ Noise Background Layer */}
      <Noise patternAlpha={20} patternRefreshInterval={3} />

      {/* ✅ Footer Content Layer */}
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-wide text-gray-500"
        >
          {version}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-6xl md:text-8xl font-semibold text-gray-400 select-none"
        >
          {message.split(" ").map((word, idx) => (
            <span key={idx} className="block">
              {word}
            </span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="my-16 flex items-center justify-center gap-2 text-lg font-medium text-gray-500"
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
      </div>
    </footer>
  );
}