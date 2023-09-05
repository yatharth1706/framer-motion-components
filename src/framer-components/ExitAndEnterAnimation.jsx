import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExitAndEnterAnimation() {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

  useEffect(() => {
    setTimeout(() => setRemoveInnerCircle(true), 10000);
  });

  return (
    <div>
      <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
        <AnimatePresence>
          {removeInnerCircle === false && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 40 }}
              transition={{
                duration: 5,
              }}
              exit={{ opacity: 0, y: 1000 }}
              className="bg-red h-24 w-24 rounded-full"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExitAndEnterAnimation;
