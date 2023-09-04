import React from "react";
import { motion } from "framer-motion";

function ProgressBar() {
  return (
    <div className="mt-6">
      <div className="w-full h-2 rounded bg-white">
        <motion.div
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 10,
          }}
          className="w-1/12 h-full bg-cyan-300"
        ></motion.div>
      </div>
    </div>
  );
}

export default ProgressBar;
