import { SVGProps } from "react";

export const TechIcon = ({
  component: Component,
}: {
  component: React.ComponentType<SVGProps<SVGElement>>;
}) => {
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="tech-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "rgb(110 231 183)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(56 189 248)" }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
