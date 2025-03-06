import { twMerge } from "tailwind-merge";
import { SVGProps } from "react";

export const TechIcon = ({
  component: Component,
}: {
  component: React.ComponentType<SVGProps<SVGElement>>;
}) => {
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(110 231 183)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(56 189 248)", stopOpacity: 1 }}
          />
        </linearGradient>
      </svg>
    </>
  );
};
