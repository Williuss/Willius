import React, { useState, useEffect } from "react";
import img1 from "./asset/BGAI1.jpg";
import img2 from "./asset/BGAI2.jpg";
import img3 from "./asset/BGAI3.jpg";
import img4 from "./asset/BGAI4.jpg";
import img5 from "./asset/BGAI5.jpg";

const images = [img1, img2, img3, img4, img5];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-end pr-10">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {/* Frame behind the slideshow */}
        <div
          className="absolute inset-0 rounded-lg bg-black"
          style={{
            zIndex: 0,
          }}
        ></div>

        {/* Slideshow */}
        <img
          src={images[currentIndex]}
          alt="Slideshow"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          } relative z-10`} // Ensure the slideshow is above the frame
        />
      </div>
    </div>
  );
}

export default Slideshow;
