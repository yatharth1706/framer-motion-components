import React from "react";
import { motion } from "framer-motion";

function GestureButton() {
  return (
    <div className="flex justify-center mt-10">
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "#ffe098",
          borderRadius: ["70%", "40%", "20%", "0%", "30%"],
          transition: {
            duration: 2,
          },
        }}
        whileTap={{
          scale: 0.7,
        }}
        className="bg-white p-2 rounded-lg w-44 text-gray-700 font-bold"
      >
        Submit
      </motion.button>
    </div>
  );
}

export default GestureButton;
