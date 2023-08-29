import React, { useState } from "react";
import { motion } from "framer-motion";

function ToggleBar() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={
        "bg-blue-500 w-20 h-10 rounded-full flex items-center p-1 cursor-pointer" +
        (isToggleOn ? " justify-end" : " justify-start")
      }
      onClick={() => setIsToggleOn(!isToggleOn)}
    >
      <motion.div
        className="rounded-full w-7 h-7 bg-white"
        layout
        transition={spring}
      ></motion.div>
    </div>
  );
}

export default ToggleBar;
