import React from "react";
import { Particles } from "./Particles.styles";

export default () => {
  return (
    <Particles
      params={{
        particles: {
          color: {
            value: "#E74C3C",
          },
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              speed: 3,
              size_min: 1,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 100,
              duration: 1,
            },
          },
        },
      }}
    />
  );
};
