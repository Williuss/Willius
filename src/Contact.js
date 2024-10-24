import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const starsRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const canvas = starsRef.current;
    const context = canvas.getContext("2d");
    const numStars = 100; // Number of stars to display
    const stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // Set canvas height to window height
    };
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Initialize star positions
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width, // Random horizontal position
        y: Math.random() * (canvas.height / 2), // Random vertical position in the top half
        speed: Math.random() * 2 + 1, // Star speed
        size: Math.random() * 2 + 1, // Star size
      });
    }

    // Update and draw stars
    const updateStars = () => {
      context.fillStyle = "rgba(0, 0, 10, 0.8)"; // Darker background color
      context.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move stars towards the center of the canvas
        const targetX = canvas.width / 2; // Target x is the center of the canvas
        const targetY = canvas.height / 1; // Target y is also the center of the canvas
        const dx = targetX - star.x;
        const dy = targetY - star.y;

        // Calculate the angle towards the target
        const angle = Math.atan2(dy, dx);
        star.x += star.speed * Math.cos(angle); // Move towards target x
        star.y += star.speed * Math.sin(angle); // Move towards target y

        // If the star exceeds the canvas, reset its position
        if (star.y > canvas.height) {
          star.x = Math.random() * canvas.width; // Reset horizontal position
          star.y = Math.random() * (canvas.height / 2); // Reset to the top half
        }

        // Draw the star
        context.fillStyle = "rgba(255, 255, 255, 0.8)";
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        context.fill();
      });

      requestAnimationFrame(updateStars);
    };

    updateStars();

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: fullName,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_luspkhp", // Replace with your EmailJS service ID
        "template_vlur8yw", // Replace with your EmailJS template ID
        templateParams,
        "dUOddxS7Z4dSin84D" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage("Your message has been sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage(
          "There was an error sending your message. Please try again."
        );
      });
  };

  return (
    <section
      id="Contact"
      className="relative flex flex-col items-center justify-center min-h-screen p-5"
    >
      {/* Gradient Overlay at the Top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent backdrop-filter backdrop-blur-md z-10"></div>

      {/* Falling Stars Canvas */}
      <canvas ref={starsRef} className="absolute inset-0 z-0" />

      {/* Contact form and heading */}
      <h2
        className="relative z-10 text-5xl font-bold mb-10 text-white text-center"
        style={{
          textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)",
          marginTop: "20px",
        }}
      >
        Contact Me
      </h2>

      {/* Glowing text */}
      <p
        className="font-Code font-semibold relative z-10 text-white text-xl text-center mb-10"
        style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 1)" }}
      >
        Let's Connect With Me!
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex space-x-8 w-full max-w-3xl bg-gray-800 bg-opacity-90 backdrop-blur-lg p-10 rounded-lg shadow-lg"
      >
        <div className="flex flex-col space-y-4 w-1/2">
          <div>
            <label className="block text-gray-300 font-Code" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Input your name"
              className="border rounded w-full py-2 px-3 text-white bg-gray-700 placeholder-gray-400 font-Code"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-Code" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Input your email"
              className="border rounded w-full py-2 px-3 text-white bg-gray-700 placeholder-gray-400 font-Code"
            />
          </div>
        </div>
        <div className="flex-grow">
          <div>
            <label className="block text-gray-300 font-Code" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Input your message"
              className="border rounded w-full py-2 px-3 text-white bg-gray-700 placeholder-gray-400 font-Code"
              rows="4"
            />
          </div>
        </div>
      </form>
      {successMessage && (
        <div className="relative z-10 text-green-500 mb-4">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="relative z-10 text-red-500 mb-4">{errorMessage}</div>
      )}
      <button
        onClick={handleSubmit}
        className="font-Code ml-2 text-xl mt-6 border-2 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 animate-colorChange relative z-10 bg-green-500"
        style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
      >
        Send Message
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}

export default ContactMe;
