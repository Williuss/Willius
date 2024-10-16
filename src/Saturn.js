import React, { useEffect, useRef } from "react";
import "./index.css"; // Assuming you will create a CSS file for styling
import rocketImage from "./asset/Rocket.png"; // Import the rocket image

function Saturn() {
  const starsRef = useRef(null);

  useEffect(() => {
    // Create falling star effect
    const canvas = starsRef.current;
    const context = canvas.getContext("2d");
    const numStarsLeft = 100; // Reduced number of stars on the left
    const numStarsRight = 400; // Reduced number of stars on the right
    const stars = [];
    const diagonalStars = []; // Array for diagonal stars

    // Set canvas size to cover the full document
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize star positions from the lower half of the page
    for (let i = 0; i < numStarsLeft; i++) {
      stars.push({
        x: canvas.width, // Start from the right
        y: Math.random() * (canvas.height / 2) + canvas.height / 2 - 2600, // Appear from the lower half
        speed: Math.random() * 2 + 0.5, // Speed of the stars
        size: Math.random() * 2 + 0.5, // Size of the stars
      });
    }

    // Initialize diagonal stars
    for (let i = 0; i < numStarsRight; i++) {
      diagonalStars.push({
        x: Math.random() * canvas.width + canvas.width, // Start from outside right
        y: Math.random() * (canvas.height / 2) - 100, // Appear from above
        speed: Math.random() * 2 + 0.5, // Speed of the stars
        size: Math.random() * 2 + 0.5, // Size of the stars
      });
    }

    // Update and draw stars
    let frameCount = 0; // Initialize frame count
    const updateStars = () => {
      if (frameCount % 2 === 0) { // Update every other frame
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw stars from below
        stars.forEach((star) => {
          star.x -= star.speed; // Move left
          star.y += star.speed * -0.8; // Move slightly down

          // Reset star position if it goes beyond the left canvas
          if (star.x < 0) {
            star.x = canvas.width; // Reset to right
            star.y = Math.random() * (canvas.height / 2) + canvas.height / 2 - 1600; // Random vertical position in the lower half
          }

          // Draw the star
          context.fillStyle = "rgba(255, 255, 255, 0.8)";
          context.beginPath();
          context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
          context.fill();
        });

        // Draw stars from the top right
        diagonalStars.forEach((star) => {
          star.x -= star.speed; // Move left
          star.y += star.speed * 0.65; // More pronounced downward movement

          // Reset star when it reaches the center of the page
          if (star.x < canvas.width / 2) {
            star.x = Math.random() * canvas.width + canvas.width; // Reset to outside right
            star.y = Math.random() * (canvas.height / 2); // Reset to random position above
          }

          // Draw diagonal star
          context.fillStyle = "rgba(255, 255, 255, 0.8)";
          context.beginPath();
          context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
          context.fill();
        });
      }
      frameCount++;
      requestAnimationFrame(updateStars);
    };

    updateStars();

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className="portfolio-section relative w-full min-h-screen text-white py-16"
      style={{ backgroundColor: "rgba(0, 0, 20, 0.8)" }} // Dark blue color
    >
      {/* Background Falling Stars */}
      <canvas ref={starsRef} className="absolute inset-0" />

      {/* Gradient Radial Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% -20%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 30%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% -20%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 30%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% -20%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 30%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% -20%, rgba(255, 255, 153, 0.5) 10%, rgba(255, 255, 153, 0.1) 30%, transparent 50%)",
          }}
        />
      </div>

      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full bg-black opacity-70 blur-xl z-0"
        style={{
          transform: "rotate(-50deg) translateY(-20%)", // Added rotation for angle adjustment
        }}
      ></div>

      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full bg-black opacity-70 blur-xl z-0"
        style={{
          transform: "rotate(50deg) translateY(-20%)", // Added rotation for angle adjustment
        }}
      ></div>

      {/* Rocket Image */}
      <img
        src={rocketImage}
        alt="Rocket"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-48 h-auto z-10" // Increased width from w-32 to w-48
      />

      {/* Glowing Text */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-xl font-semibold font-Code text-white z-10 glow-text">
        Let's take a moment to enjoy Saturn...
      </div>

      {/* Gradient Blur Block at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent backdrop-filter backdrop-blur-md"></div>
    </div>
  );
}

export default Saturn;
