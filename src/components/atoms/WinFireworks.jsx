"use client"; 

import { Fireworks } from "@fireworks-js/react";

export default function WinFireworks() {
  return (
    <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, 
        background: "transparent",
      }}
    />
  );
}
