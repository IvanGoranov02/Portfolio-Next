import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-10 overflow-hidden after:z-20 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
