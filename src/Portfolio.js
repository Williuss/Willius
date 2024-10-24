import React, { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiFigma,
  SiTensorflow,
  SiTailwindcss,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiPython,
} from "react-icons/si";

import projectImage1 from "./asset/Project 1.png";
import projectImage2 from "./asset/Project 2.png";
import projectImage3 from "./asset/Project 3.1.png";
import projectImage4 from "./asset/Project 4.png";
import projectImage5 from "./asset/Project 5.jpg";
import projectImage6 from "./asset/Project 6.png";
import projectImage7 from "./asset/Project 7.jpg";
import projectImage8 from "./asset/Project 8.png";
import projectImage9 from "./asset/Project 9.png";
import projectImage10 from "./asset/Project 10.jpg";
import projectImage11 from "./asset/Project 11.png";
import "./index.css";

// Component for displaying icons (tech stack)
function PortfolioIcons({ tech }) {
  return (
    <div className="flex space-x-4 mt-4">
      {/* Icons Mapping */}
      {tech.includes("HTML") && (
        <SiHtml5 size={30} className="text-orange-500" />
      )}
      {tech.includes("CSS") && <SiCss3 size={30} className="text-blue-500" />}
      {tech.includes("JavaScript") && (
        <SiJavascript size={30} className="text-yellow-500" />
      )}
      {tech.includes("MySQL") && (
        <SiMysql size={30} className="text-blue-900" />
      )}
      {tech.includes("Python") && (
        <SiPython size={30} className="text-blue-500" />
      )}
      {tech.includes("TensorFlow") && (
        <SiTensorflow size={30} className="text-orange-600" />
      )}
      {tech.includes("React") && (
        <SiReact size={30} className="text-blue-500" />
      )}
      {tech.includes("Tailwind") && (
        <SiTailwindcss size={30} className="text-teal-500" />
      )}
      {tech.includes("Flutter") && (
        <SiFlutter size={30} className="text-blue-400" />
      )}
      {tech.includes("Firebase") && (
        <SiFirebase size={30} className="text-yellow-500" />
      )}
      {tech.includes("Scikit-learn") && (
        <SiScikitlearn size={30} className="text-orange-400" />
      )}
      {tech.includes("Streamlit") && (
        <SiStreamlit size={30} className="text-pink-400" />
      )}
      {tech.includes("Figma") && (
        <SiFigma size={30} className="text-pink-500" />
      )}
    </div>
  );
}

function Portfolio() {
  const starsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const canvas = starsRef.current;
    const context = canvas.getContext("2d");
    const numStars = 300;
    const stars = [];
    const gradients = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      setIsMobile(window.innerWidth <= 768);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (!isMobile) {
      const starColors = [
        "#ffffff",
        "#ffd700",
        "#00ff00",
        "#ff69b4",
        "#00ffff",
      ];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.5,
          brightness: Math.random(),
          changeRate: Math.random() * 0.02 + 0.01,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          time: Math.random() * Math.PI * 2,
        });
      }
    }

    const gradientColors = ["rgba(0, 0, 139, 0.3)", "rgba(138, 43, 226, 0.3)"];
    for (let i = 0; i < 100; i++) {
      gradients.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 150,
        color: gradientColors[i % gradientColors.length],
      });
    }

    const updateStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      gradients.forEach((gradient) => {
        const radialGradient = context.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.radius
        );
        radialGradient.addColorStop(0, gradient.color);
        radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = radialGradient;
        context.beginPath();
        context.arc(gradient.x, gradient.y, gradient.radius, 0, 2 * Math.PI);
        context.fill();
      });

      if (!isMobile) {
        stars.forEach((star) => {
          star.time += star.changeRate;
          star.brightness = (Math.sin(star.time) + 1) / 2;

          context.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.4})`;
          context.beginPath();
          context.arc(star.x, star.y, star.size * 2, 0, 2 * Math.PI);
          context.fill();

          context.fillStyle = `rgba(${star.color
            .match(/\w\w/g)
            .map((c) => parseInt(c, 16))
            .join(",")}, ${star.brightness})`;
          context.beginPath();
          context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
          context.fill();
        });
      }

      requestAnimationFrame(updateStars);
    };

    updateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isMobile]);

  return (
    <div
      id="Portfolio"
      className="portfolio-section relative w-full min-h-screen text-white py-16"
    >
      <canvas ref={starsRef} className="absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent backdrop-filter backdrop-blur-md z-10"></div>

      <div className="relative z-10 max-w-screen-lg mx-auto px-6">
        <h1
          className="text-5xl text-center font-bold mb-12 mt-8"
          style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)" }}
        >
          Portfolio
        </h1>
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage1}
              alt="Project 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">GuarJIan</h2>
            <p className="font-Code">
              GuarJian is an innovative e-commerce website that is a leader in
              health care and personal care products, aimed at providing users
              with an easy way to find products that meet their needs.
            </p>

            {/* Tech Stack */}
            <PortfolioIcons tech={["HTML", "CSS", "JavaScript", "Figma"]} />

            {/* Source Code and Live Demo Buttons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/GuarJian"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
              <a
                href="https://williuss.github.io/GuarJIan/"
                className="font-Code px-4 py-2 bg-green-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Web Page
              </a>

              <a
                href="https://www.figma.com/design/WDTLE4zVBSmch6ZSBxQCff/GuarJIan?node-id=0-1&t=Fqfow6FPf6LyNbLL-1" // Replace with your Figma link
                className="font-Code ml-2 px-4 py-2 bg-purple-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-item flex flex-col md:flex-row-reverse items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage2}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">Café Artisan</h2>
            <p className="font-Code">
              Café Artisan is a coffeeshop website designed for personal
              branding of our café and to provide detailed information about our
              operations.
            </p>

            {/* Tech Stack */}
            <PortfolioIcons tech={["HTML", "CSS", "JavaScript", "Figma"]} />

            {/* Source Code and Live Demo Buttons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Artisan-Cafe"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
              <a
                href="https://williuss.github.io/Artisan-Cafe/"
                className="font-Code px-4 py-2 bg-green-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Web Page
              </a>
              <a
                href="https://www.figma.com/design/y3ZVsfwq6JsDWvgvgXhZzq/Cafe-Artisan?node-id=0-1&t=PCsPnWc4XVVIazbS-1" // Replace with your Figma link
                className="font-Code ml-2 px-4 py-2 bg-purple-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage11}
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">MyLaundry</h2>
            <p className="font-Code">
              MyLaundry is an innovative website that consolidates local laundry
              services into one application, making it easy for users to find
              and access laundry options through their devices.
            </p>

            {/* Tech Stack */}
            <PortfolioIcons tech={["HTML", "CSS", "Figma"]} />

            {/* Source Code and Live Demo Buttons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/MyLaundry"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
              <a
                href="https://williuss.github.io/MyLaundry/"
                className="font-Code px-4 py-2 bg-green-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Live Demo
              </a>
              <a
                href="https://www.figma.com/design/yIFWumIvWLes7nfavEVPaW/MyLaundry?node-id=4-243&t=r4VFbgqCTgJg9cjy-1" // Replace with your Figma link
                className="font-Code ml-2 px-4 py-2 bg-purple-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 4 (Left Text, Right Image) */}
        <div className="portfolio-item flex flex-col md:flex-row-reverse items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage4}
              alt="Project 4"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">Personal Website</h2>
            <p className="font-Code">
              This is my personal website designed to showcase my skills and
              portfolio of completed projects, provide my personal contact
              information, and enhance my personal branding.
            </p>
            <PortfolioIcons tech={["React", "Tailwind"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Willius"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
              <a
                href="#Home"
                className="font-Code px-4 py-2 bg-green-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 5 (Left Image, Right Text) */}
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage5}
              alt="Project 5"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">
              Urinary Tract Infection Test
            </h2>
            <p className="font-Code">
              The UTI test is built using AI-based technology with a machine
              learning model that predicts whether an individual has a Urinary
              Tract Infection based on the data they input into the system.
            </p>
            <PortfolioIcons tech={["Python", "Scikit-learn", "Streamlit"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Urinary-Tract-Infection-Test"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 6 (Left Text, Right Image) */}
        <div className="portfolio-item flex flex-col md:flex-row-reverse items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage6}
              alt="Project 6"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">
              Home Assistant Automation
            </h2>
            <p className="font-Code">
              Home Assistant Automation is a project aimed at simplifying the
              home automation system by accepting voice input, which is then
              executed as commands.
            </p>
            <PortfolioIcons tech={["Python", "TensorFlow"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Home-Assistant-Automation"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 7 (Left Image, Right Text) */}
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage7}
              alt="Project 7"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">
              Tweets Emotion Detection
            </h2>
            <p className="font-Code">
              Tweets Emotion Detection is a project built with machine learning
              model, designed to analyze emotions in tweets and provide insights
              from the data collected.
            </p>
            <PortfolioIcons tech={["Python", "Scikit-learn"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Tweets-Sentiment-Analysis"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 8 (Left Text, Right Image) */}
        <div className="portfolio-item flex flex-col md:flex-row-reverse items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage8}
              alt="Project 8"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">
              Songs Recommender System
            </h2>
            <p className="font-Code">
              The Songs Recommender System is an AI project that provides song
              recommendations based on the user's preferences, analyzing their
              likes or dislikes through sentiment data they input.
            </p>
            <PortfolioIcons tech={["Python", "Scikit-learn"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/Song-Recommender-System"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 9 (Left Image, Right Text) */}
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage9}
              alt="Project 9"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">
              House Price Prediction
            </h2>
            <p className="font-Code">
              House Price Prediction is a project built using a machine learning
              model that predicts house prices based on various features that
              influence those prices.
            </p>
            <PortfolioIcons tech={["Python", "Scikit-learn"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/House-Price-Prediction"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 10 (Left Text, Right Image) */}
        <div className="portfolio-item flex flex-col md:flex-row-reverse items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage10}
              alt="Project 10"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">ResQ</h2>
            <p className="font-Code">
              ResQ is a mobile app project designed to provide information about
              natural disasters, emergency notifications for impending events,
              and other related resources, enabling users to evacuate as early
              as possible. This application is part of the implementation of the
              Sustainable Development Goals (SDGs).
            </p>
            <PortfolioIcons tech={["Flutter", "Firebase", "Figma"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Williuss/ResQ"
                className="font-Code px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Source Code
              </a>

              <a
                href="https://www.youtube.com/watch?v=9iF7tE6tk98"
                className="font-Code px-4 py-2 bg-green-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Demo Video
              </a>

              <a
                href="https://www.figma.com/design/ASLqSswmOJyXVUZeoNSSyD/ResQ?node-id=0-1&t=LU7npj6ERePRrrjl-1" // Replace with your Figma link
                className="font-Code ml-2 px-4 py-2 bg-purple-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 11 (Left Image, Right Text) */}
        <div className="portfolio-item flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="portfolio-image md:w-2/5 p-4">
            <img
              src={projectImage3}
              alt="Project 11"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="portfolio-description md:w-3/5 p-4 text-left">
            <h2 className="text-xl font-semibold mb-4">Calm</h2>
            <p className="font-Code">
              Calm is a project dedicated to prioritizing users' mental health
              by educating them on its importance, providing assessments for
              mental health issues, and facilitating consultations with
              psychologists and psychiatrists.
            </p>
            <PortfolioIcons tech={["Figma"]} />
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.figma.com/design/kMHmFdCs1cALNnH0OMh47I/Calm?t=Fqfow6FPf6LyNbLL-1" // Replace with your Figma link
                className="font-Code ml-2 px-4 py-2 bg-purple-600 text-white rounded shadow transition duration-300 transform hover:scale-110 animate-colorChange1"
                style={{ textShadow: "0px 0px 15px rgba(255, 255, 255, 3000)" }}
              >
                Figma
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Item 2 */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
}

export default Portfolio;
