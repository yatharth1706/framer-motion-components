import React, { useState } from "react";
import { motion } from "framer-motion";

const Variant1 = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const Variant2 = {
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hide: {
    opacity: 0,
    x: -100,
  },
};

const emojisArr = ["😆", "💯", "❤️", "😇", "👍"];

function EmojisAnimation() {
  const [showEmojis, setShowEmojis] = useState(false);

  return (
    <div>
      <motion.div
        initial={false}
        animate={showEmojis ? "show" : "hide"}
        className="mt-10 flex flex-col items-center space-y-6 justify-center"
      >
        <motion.div
          variants={Variant1}
          className="flex rounded-full p-4 items-center text-3xl justify-evenly w-64 h-12 bg-white"
        >
          {/* some emojis */}
          {emojisArr.map((emoji, index) => {
            return (
              <motion.span
                key={index}
                custom={index}
                variants={Variant2}
                className="bg-transparent"
              >
                {emoji}
              </motion.span>
            );
          })}
        </motion.div>
        <button
          className="bg-sky-500 text-white cursor-pointer font-semibold py-2 px-8 rounded-md"
          onClick={() => setShowEmojis(!showEmojis)}
        >
          {!showEmojis ? "Show Emojis" : "Hide Emojis"}
        </button>
      </motion.div>
    </div>
  );
}

export default EmojisAnimation;
