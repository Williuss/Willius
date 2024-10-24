import React, { useEffect, useRef, useState } from "react";
import img8 from "./asset/Photos.jpg"; // Ensure this path is correct

function AboutMe() {
  const starsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  useEffect(() => {
    // Handle window resize to check for mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Create a star field with stars moving toward the viewer only if not mobile
    if (!isMobile) {
      const canvas = starsRef.current;
      const context = canvas.getContext("2d");
      const numStars = 300;
      const stars = [];

      // Set canvas size to full screen
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();

      window.addEventListener("resize", resizeCanvas);

      // Initialize star positions
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }

      // Update and draw stars
      const updateStars = () => {
        context.fillStyle = "rgba(0, 0, 30, 0.8)"; // Darker background color
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

      // Clean up on component unmount
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, [isMobile]); // Dependency on isMobile to control the star animation

  return (
    <div
      id="About"
      className="relative flex flex-col items-center justify-start pt-24 h-screen font-Code font-bold text-white overflow-hidden"
    >
      {/* Warp Speed Effect - Starry Background - only render if not mobile */}
      {!isMobile && <canvas ref={starsRef} className="absolute inset-0" />}

      {/* Multiple Circular Gradient Backgrounds */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 120%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 30%, transparent 50%)`,
          }}
        />
      </div>

      {/* Gradient Blur Block at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent backdrop-filter backdrop-blur-md z-10"></div>

      {/* About Me Title */}
      <h1
        className="text-5xl mb-8 z-10 md:text-5xl text-2xl"
        style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)" }}
      >
        About Me
      </h1>

      {/* Content Section: Photo on the Left and Text on the Right */}
      <div className={`flex flex-col md:flex-row items-center justify-center z-10 mt-10 w-4/5 md:w-3/4 lg:w-2/3 space-x-8 ${isMobile ? 'mt-6' : ''}`}>
        {/* Photo without Frame */}
        <div className={`${isMobile ? "w-48 h-48 mb-8" : "w-screen h-96 mb-8"}`}>
          <img
            src={img8}
            alt="Wilsen Julius"
            className="w-full h-full object-cover rounded-lg" // Keep original size for PC
          />
        </div>

        {/* Divider Line */}
        <div className="w-2 h-48 md:h-80 bg-gray-400 hidden md:block"></div>

        {/* Additional Description */}
        <div className="flex flex-col items-start space-y-4 text-lg md:text-lg text-sm text-justify leading-relaxed px-4">
          {isMobile ? (
            <p className="text-sm">
              Wilsen Julius is a Computer Science student at Bina Nusantara
              University, specializing in Intelligent Systems. He is passionate
              about AI, Machine Learning, and Big Data Analytics, and aims to
              contribute to impactful projects while continuously growing in his
              field.
            </p>
          ) : (
            <>
              <p className="text-lg">
                Hi there, my name is Wilsen Julius, and I am currently pursuing
                a degree in Computer Science with a specialization in
                Intelligent Systems at Bina Nusantara University. I have a
                strong passion for Artificial Intelligence, Machine Learning,
                Big Data Analytics, and Data Science. I am dedicated to
                continuously learning and pushing beyond existing boundaries.
              </p>
              <p className="text-lg">
                I have worked on a range of projects, from machine learning to
                automation, and my goal is to continuously grow as a
                professional while contributing to meaningful and impactful
                projects.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Glowing Quote - only render if not mobile */}
      {!isMobile && (
        <div className="absolute bottom-16 text-center font-semibold z-10">
          <p
            className={`text-white ${isMobile ? "text-sm" : "text-xl"}`} // Change size based on mobile state
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(0, 123, 255, 0.5)",
            }}
          >
            "To Infinity and Beyond! - Buzz Lightyear"
          </p>
        </div>
      )}

      {/* Black Blur on Left and Right */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full bg-black opacity-70 blur-xl z-0"
        style={{
          transform: "rotate(-20deg) translateY(-50%)",
        }}
      ></div>

      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full bg-black opacity-70 blur-xl z-0"
        style={{
          transform: "rotate(20deg) translateY(-50%)",
        }}
      ></div>

      {/* Gradient Blur Block at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-transparent to-transparent backdrop-filter backdrop-blur-md z-10"></div>
    </div>
  );
}

export default AboutMe;
