"use client";

import { PropsWithChildren, useEffect, useState } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  rotationSpeed,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration = "6s",
}: PropsWithChildren<{
  size: number;
  rotation: number;
  rotationSpeed: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  const [randomOffset, setRandomOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random offset between -50 and 50 pixels
    setRandomOffset({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    });
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={shouldOrbit ? "animate-spin-orbit" : ""}
        style={
          {
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg) translate(${randomOffset.x}px, ${randomOffset.y}px)`,
            "--orbit-speed": `${rotationSpeed}s`,
          } as any
        }
      >
        <div
          className={
            shouldSpin ? "inline-flex animate-spin-slow" : "inline-flex"
          }
          style={{
            transform: `rotate(${rotation * -1}deg)`,
            animationDuration: spinDuration,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
