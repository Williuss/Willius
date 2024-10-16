// src/ParticlesBackground.js
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            out_mode: "out",
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
