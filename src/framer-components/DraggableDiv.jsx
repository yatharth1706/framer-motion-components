import React from "react";
import { motion } from "framer-motion";

function DraggableDiv() {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2, backgroundColor: "deepskyblue" }}
      dragConstraints={{
        left: -100,
        right: 400,
        top: -100,
        bottom: 400,
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragSnapToOrigin={true}
      dragElastic={0.2}
      className="w-44 h-44 rounded-full bg-white mt-20 mx-auto flex flex-col items-center justify-center"
      dragPropagation
    >
      <h2 className="bg-transparent text-gray-800">Circle</h2>
    </motion.div>
  );
}

export default DraggableDiv;
