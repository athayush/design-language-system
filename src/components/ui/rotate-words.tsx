"use client";
import { AnimatePresence } from "motion/react";
import {motion} from "motion/react";
import * as React from "react";

const wordsArray = ["Word 1", "Word 2", "Word 3"];

export function RotateWords({
  text = "Rotate",
  words = wordsArray,
}: {
  text: string;
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <div className=" text-center mt-8 text-primary  font-bold tracking-tight text-5xl md:text-6xl leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5">
      {text}
      {" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
