import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Slideshow from "./Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CV from "../src/asset/cvup.pdf";

function Hero() {
  const [stars, setStars] = useState([]);
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
    const generateStars = () => {
      const starArray = [];
      const starCount = isMobile ? 50 : 100; // Adjust star count based on screen size
      for (let i = 0; i < starCount; i++) {
        starArray.push({
          id: i,
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          delay: `${Math.random() * 5}s`,
          speed: Math.random(),
          directionX: Math.random() < 0.5 ? -1 : 1,
          directionY: Math.random() < 0.5 ? -1 : 1,
        });
      }
      setStars(starArray);
    };

    if (!isMobile) {
      generateStars();
    } else {
      setStars([]); // Clear stars when on mobile
    }

    // Clean up on component unmount
    return () => setStars([]);
  }, [isMobile]); // Dependency on isMobile to regenerate stars

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.setAttribute("download", "Wilsen_Julius_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Cleanup after the click
  };

  return (
    <div
      id="Home"
      className="relative flex items-center h-screen font-Code font-bold overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 5% 7%, rgba(255, 87, 51, 0.4), transparent 20%), radial-gradient(circle at 5% 30%, rgba(0, 93, 255, 0.5), transparent 30%), radial-gradient(circle at 26% 7%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 80% 137%, rgba(255, 87, 51, 0.4), transparent 25%), radial-gradient(circle at 100% 137%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 90% -40%, rgba(255, 87, 51, 0.4), transparent 25%), radial-gradient(circle at 90% -40%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 50% 110%, rgba(255, 87, 51, 0.4), transparent 25%)",
      }}
    >
      {/* Starry Night Background - only render if not mobile */}
      {!isMobile && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                "--random-speed": star.speed,
                "--random-direction-x": star.directionX,
                "--random-direction-y": star.directionY,
                willChange: "transform, opacity", // Optimizing CSS animation performance
              }}
            />
          ))}
        </div>
      )}

      {/* Notification for Mobile Users */}
      {isMobile && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 backdrop-blur-lg text-white p-3 rounded-md shadow-md z-20">
          <strong>Announcement :</strong> This page is optimized for PC layout.
        </div>
      )}

      {/* Text Section - Adjusted for Mobile */}
      <div className={`ml-4 ${isMobile ? "w-2/3" : "w-1/2"} p-10 z-10`}>
        <h2
          className={`text-2xl ${
            isMobile ? "text-3xl mb-4" : "md:text-5xl"
          } font-bold text-white font-code`} // Added mb-4 for mobile
          style={{
            textShadow:
              "4px 4px 12px rgba(0, 0, 0, 100), 2px 2px 4px rgba(0, 0, 0, 1)",
          }}
        >
          Hi, It's Wilsen Julius
        </h2>
        <h2
          className={`text-lg ${
            isMobile ? "text-xl mb-2" : "md:text-3xl"
          } font-bold text-white`}
        >
          {" "}
          I Am{" "}
          <ReactTyped
            className="gradient-text"
            strings={[
              "AI Engineer",
              "Data Scientist",
              "Software Engineer",
              "Web Developer",
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
          <h2
            className={`text-sm ${
              isMobile ? "text-lg mt-4" : "md:text-xl"
            } font-medium`} // Adjusted mt for mobile
            style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 500)" }}
          >
            Press The Button Below to Start Our Journey!
          </h2>
        </h2>

        {/* CV Download Button */}
        <button
          onClick={handleDownload}
          className="ml-2 text-sm md:text-lg mt-6 border-2 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-110 animate-colorChange"
          style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
        >
          Download CV
        </button>
      </div>

      {/* Slideshow Section - Adjusted for Mobile */}
      <div className={`w-1/2 z-10 ${isMobile ? "w-full" : "w-1/2"}`}>
        <Slideshow />
      </div>

      {/* Social Media Icons Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/wilsen-julius"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/Williuss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="mailto:wilsen.wj@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>

      {/* Gradient Blur Block */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent backdrop-filter backdrop-blur-md"></div>
    </div>
  );
}

export default Hero;
