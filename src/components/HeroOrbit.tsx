import { PropsWithChildren } from "react";

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
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={shouldOrbit ? "animate-spin-orbit" : ""}
        style={
          {
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
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
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
