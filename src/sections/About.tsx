"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import memoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    name: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    name: "React",
    iconType: ReactIcon,
  },
  {
    name: "HTML5",
    iconType: HTML5Icon,
  },
  {
    name: "CSS3",
    iconType: CSS3Icon,
  },
  {
    name: "Chrome",
    iconType: ChromeIcon,
  },
  {
    name: "GitHub",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    name: "Traveling",
    iconType: "🌍",
    left: "5%",
    top: "5%",
    floatDelay: 0,
  },
  {
    name: "Gaming",
    iconType: "🎮",
    left: "50%",
    top: "5%",
    floatDelay: 0.2,
  },
  {
    name: "Cars",
    iconType: "🚗",
    left: "10%",
    top: "35%",
    floatDelay: 0.4,
  },
  {
    name: "Music",
    iconType: "🎵",
    left: "35%",
    top: "40%",
    floatDelay: 0.6,
  },
  {
    name: "Watches",
    iconType: "⏱️",
    left: "70%",
    top: "45%",
    floatDelay: 0.8,
  },
  {
    name: "Gym",
    iconType: "🏋️‍♀️",
    left: "5%",
    top: "65%",
    floatDelay: 1,
  },
  {
    name: "Reading",
    iconType: "📚",
    left: "35%",
    top: "70%",
    floatDelay: 1.2,
  },
];

const floatingAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  whileHover: { scale: 1.1, y: -5 },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <div id="about" className="py-20 lg:py-28 lg:px-20">
      <div className="container"></div>
      <SectionHeader
        title="A Glimpse Into My World"
        description="Here's a little more about me."
        eyebrow="About"
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center h-full">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book" />
              </div>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2 ">
            <CardHeader
              title="My Toolbox"
              description="Discover the tools that fuel my creativity and productivity."
            />
            <div className="flex flex-col items-center justify-center">
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="animate-move-left animation-duration-[30s]"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6 animate-move-right animation-duration-[15s]"
                reverse
              />
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Discover my interests and hobbies outside of coding."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((item) => (
                <motion.div
                  key={item.name}
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute cursor-grab active:cursor-grabbing"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                  initial="initial"
                  animate={["animate", "float"]}
                  whileHover="whileHover"
                  variants={floatingAnimation}
                  transition={{
                    duration: 0.5,
                    delay: item.floatDelay,
                  }}
                  drag
                  dragConstraints={constraintRef}
                  whileDrag={{ scale: 1.1 }}
                >
                  <span className="font-medium text-gray-950">
                    {item.iconType}
                  </span>
                  <span className="">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              className="w-full h-full object-cover object-left-top"
              alt="Map"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10 animate-ping-large" />
              <div className="absolute inset-0 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={memoji}
                  className="w-20 h-20 object-cover"
                  alt="Memoji"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
