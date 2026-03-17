import { RotateWords } from "@/components/ui/rotate-words";
import { motion } from "motion/react";

export function HomeFooter() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-10 text-center text-gray-500">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium tracking-wide text-gray-500"
      >
        <img src="https://www.athayush.com/wp-content/uploads/2025/11/Trust-Badge.png" className="w-40 object-contain" alt="" />
      </motion.p>
      <RotateWords text="Live" words={["Life", "Healthy", "Freely"]} />
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

        >
          <img src={"/heart.png"} className="size-5" alt="heart" />
        </motion.span>
        <span>
          in
          {" "}
          {" "}
          India
        </span>
      </motion.div>
    </footer>
  );
}
