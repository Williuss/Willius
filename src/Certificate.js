import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Certificate1 from "./asset/Certi1.png";
import Certificate2 from "./asset/Certi2.png";
import Certificate3 from "./asset/Certi3.png";
import Certificate4 from "./asset/Certi4.1.png";
import Certificate5 from "./asset/Certi5.png";
import Certificate6 from "./asset/Certi6.png";

function Certificate() {
  const starsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update mobile state on resize
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const canvas = starsRef.current;
      const context = canvas.getContext("2d");
      const numStars = 300;
      const stars = [];

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();

      window.addEventListener("resize", resizeCanvas);

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }

      const updateStars = () => {
        context.fillStyle = "rgba(0, 0, 20, 0.8)"; // Darker background color
        context.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          star.z -= 2;
          if (star.z <= 0) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
            star.z = canvas.width;
          }

          const sx = (star.x - canvas.width / 2) * (canvas.width / star.z);
          const sy = (star.y - canvas.height / 2) * (canvas.width / star.z);
          const size = Math.max(0, 2 - star.z / canvas.width);

          context.fillStyle = "white";
          context.beginPath();
          context.arc(
            sx + canvas.width / 2,
            sy + canvas.height / 2,
            size,
            0,
            2 * Math.PI
          );
          context.fill();
        });

        requestAnimationFrame(updateStars);
      };

      updateStars();
    }
  }, [isMobile]); // Depend on isMobile to control star effect rendering

  return (
    <section
      id="Certificate"
      className="relative flex flex-col justify-center items-center min-h-screen"
    >
      {!isMobile && <canvas ref={starsRef} className="absolute inset-0 z-0" />} {/* Render stars only on PC */}

      {/* Gradient Block at the Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent backdrop-filter backdrop-blur-md z-10"></div>

      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 60%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 40%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 text-center mb-10">
        <h1
          className="font-bold text-5xl text-white"
          style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)" }}
        >
          Certification
        </h1>
        <p
          className="font-semibold font-Code mt-4 text-2xl text-white"
          style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)" }}
        >
          Achievement Unlocked!
        </p>
      </div>

      <div className="container mx-2 relative z-10 md:mx-auto lg:mx-auto xl:mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1} // Set default for mobile view
          spaceBetween={10} // Set space for mobile view
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10, // Smaller space on mobile
            },
            640: {
              slidesPerView: 1, // Still 1 slide on mobile devices
              spaceBetween: 20, // Increase space for slightly larger mobile screens
            },
            1024: {
              slidesPerView: 2, // Keep it 2 for tablets and larger
              spaceBetween: 40,
            },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              src={Certificate1}
              alt="Python Certificate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Certificate2}
              alt="Python Certificate 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Certificate3}
              alt="Python Certificate 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Certificate4}
              alt="HackFest Certificate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Certificate5}
              alt="Certificate 5"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Certificate6}
              alt="Certificate 6"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Gradient Block at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Navigation Arrows Custom Styles */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 60px;
          height: 60px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -20px;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .swiper-button-next {
          right: 30px;
        }

        .swiper-button-prev {
          left: 30px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: white;
          color: black;
        }
      `}</style>
    </section>
  );
}

export default Certificate;
