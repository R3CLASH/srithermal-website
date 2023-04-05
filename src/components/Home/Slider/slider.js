import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SliderData } from "./sliderData";

function slider() {
  return (
    <div id="gallery">
      <h2 className="text-4xl text-center h-20 mt-10">Gallery</h2>
      <motion.div className="carousel overflow-hidden cursor-grab">
        <motion.div drag="x" className="inner-carousel flex min-w-10">
          {SliderData.map((slide) => {
            return (
              <motion.div className="item p-1">
                <img className="br-5 object-cover" src={slide.image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default slider;
