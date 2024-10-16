import React from "react";
import { ReactTyped } from "react-typed";
import Slideshow from "./Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import LinkedIn icon
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the email icon

function Hero() {
  const handleDownload = () => {
    const cvLink = "/path/to/your/cv.pdf"; // Replace with your actual CV path
    const link = document.createElement("a");
    link.href = cvLink;
    link.setAttribute("download", "Wilsen_Julius_CV.pdf"); // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id = 'Home'
      className="relative flex items-center h-screen font-Code font-bold overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 5% 7%, rgba(255, 87, 51, 0.4), transparent 20%), radial-gradient(circle at 5% 30%, rgba(0, 93, 255, 0.5), transparent 30%), radial-gradient(circle at 26% 7%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 80% 137%, rgba(255, 87, 51, 0.4), transparent 25%), radial-gradient(circle at 100% 137%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 90% -40%, rgba(255, 87, 51, 0.4), transparent 25%), radial-gradient(circle at 90% -40%, rgba(0, 93, 255, 0.5), transparent 25%), radial-gradient(circle at 50% 110%, rgba(255, 87, 51, 0.4), transparent 25%)",
      }}
    >
      {/* Starry Night Background */}
      <div className="absolute inset-0">
        {/* Limit to 100 stars for better performance */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              "--random-speed": Math.random(),
              "--random-direction-x": Math.random() < 0.5 ? -1 : 1,
              "--random-direction-y": Math.random() < 0.5 ? -1 : 1,
              willChange: "transform, opacity", // Optimize animations
            }}
          />
        ))}
      </div>

      {/* Text Section - Half of the page */}
      <div className="ml-16 w-1/2 p-10 z-10">
        <h2
          className="text-5xl font-bold text-white font-code"
          style={{
            textShadow:
              "4px 4px 12px rgba(0, 0, 0, 100), 2px 2px 4px rgba(0, 0, 0, 1)",
          }}
        >
          Hi, It's Wilsen Julius
        </h2>
        <h2 className="text-3xl font-bold text-white">
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
          <h2 className="text-xl font-medium mt-3" style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 500)" }}>Press The Button Below to Start Our Journey !</h2>
        </h2>

        {/* CV Download Button */}
        <button
          onClick={handleDownload}
          className="ml-2 text-xl mt-6 border-2 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 animate-colorChange"
          style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
        >
          Download CV
        </button>
      </div>

      {/* Slideshow Section - Half of the page */}
      <div className="w-1/2 z-10">
        <Slideshow />
      </div>

      {/* Social Media Icons Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/wilsen-julius" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/Williuss" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="mailto:wilsen.wj@gmail.com" // Replace with your email
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full transition duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>

      {/* Gradient Blur Block at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent backdrop-filter backdrop-blur-md"></div>
    </div>
  );
}

export default Hero;
