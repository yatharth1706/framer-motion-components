import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExitAndEnterAnimation() {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

  useEffect(() => {
    setTimeout(() => setRemoveInnerCircle(true), 7000);
  });

  return (
    <div>
      <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
        <AnimatePresence>
          {removeInnerCircle === false && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                y: 40,
                scale: [null, 1.2, 0.5, 0.1, 1],
                backgroundColor: [null, "#111111", "#12ab12", "#111111"],
                borderRadius: [null, "40%", "10%", "100%"],
              }}
              transition={{
                duration: 5,
              }}
              exit={{ opacity: 0, y: 200 }}
              className="bg-red h-24 w-24 rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExitAndEnterAnimation;
