import { useState } from "react";
import { motion } from "framer-motion";

function FeedbackPopover() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  return (
    <>
      <div className="relative h-44 w-5/ flex justify-center items-center">
        <motion.div
          layoutId="feedbackpopover"
          className="flex justify-center relative"
        >
          <button
            className="bg-cyan-500 p-2 w-44 rounded-md mt-4"
            onClick={() => setFeedbackOpen(true)}
          >
            Feedback
          </button>
        </motion.div>

        {feedbackOpen && (
          <motion.div
            layoutId="feedbackpopover"
            className="absolute flex flex-col top-0 bottom-0 w-full h-full border-b-2 bg-opacity-50 justify-center items-center"
          >
            <textarea className="border rounded"></textarea>
            <button className="bg-cyan-500 p-2 w-44 rounded-md mt-4">
              Send feedback
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default FeedbackPopover;
