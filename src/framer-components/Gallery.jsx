import React, { useState } from "react";
import Photo1 from "../assets/Photo1.webp";
import Photo2 from "../assets/Photo2.jpeg";
import Photo3 from "../assets/Photo3.jpeg";
import Photo4 from "../assets/Photo4.webp";
import { motion, AnimatePresence } from "framer-motion";

const arrOfPhotos = [Photo1, Photo2, Photo3, Photo4];

function Gallery() {
  const [currActivePhoto, setCurrActivePhoto] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    if (currActivePhoto > 0) {
      setCurrActivePhoto(currActivePhoto - 1);
    }
    setDirection(+1);
  };

  const handleForward = () => {
    if (currActivePhoto < arrOfPhotos.length - 1) {
      setCurrActivePhoto(currActivePhoto + 1);
    }
    setDirection(-1);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 1,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: direction < 0 ? 200 : -200,
      display: "none",
    },
  };

  return (
    <div className="flex space-x-4 w-full h-[600px] p-10">
      <div
        className="flex flex-col justify-center cursor-pointer text-white"
        onClick={handlePrev}
      >
        {"<"}
      </div>
      <div className="grow">
        {/* <AnimatePresence> */}
        <motion.img
          key={currActivePhoto}
          src={arrOfPhotos[currActivePhoto]}
          className="w-full h-full object-cover object-bottom rounded"
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
        />
        {/* </AnimatePresence> */}
      </div>
      <div
        className="flex flex-col justify-center cursor-pointer text-white"
        onClick={handleForward}
      >
        {">"}
      </div>
    </div>
  );
}

export default Gallery;
