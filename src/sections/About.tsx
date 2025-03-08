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
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import VSCodeIcon from "@/assets/icons/vscode.svg";
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
    name: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    name: "React",
    iconType: ReactIcon,
  },
  {
    name: "Next.js",
    iconType: NextJSIcon,
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
    name: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    name: "VS Code",
    iconType: VSCodeIcon,
  },
  {
    name: "GitHub",
    iconType: GithubIcon,
  },
  {
    name: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    name: "Reading",
    iconType: "📚",
    left: "5%",
    top: "10%",
    floatDelay: 0,
  },
  {
    name: "Problem Solving",
    iconType: "🧩",
    left: "35%",
    top: "5%",
    floatDelay: 0.2,
  },
  {
    name: "Tech Blogs",
    iconType: "💻",
    left: "70%",
    top: "12%",
    floatDelay: 0.3,
  },
  {
    name: "Traveling",
    iconType: "🌍",
    left: "20%",
    top: "25%",
    floatDelay: 0.4,
  },
  {
    name: "Photography",
    iconType: "📸",
    left: "85%",
    top: "22%",
    floatDelay: 0.5,
  },
  {
    name: "Gym",
    iconType: "🏋️‍♀️",
    left: "55%",
    top: "35%",
    floatDelay: 0.6,
  },
  {
    name: "Mindfulness",
    iconType: "🧘‍♂️",
    left: "15%",
    top: "45%",
    floatDelay: 0.7,
  },
  {
    name: "Languages",
    iconType: "🗣️",
    left: "45%",
    top: "50%",
    floatDelay: 0.8,
  },
  {
    name: "Chess",
    iconType: "♟️",
    left: "75%",
    top: "42%",
    floatDelay: 0.9,
  },
  {
    name: "Writing",
    iconType: "✍️",
    left: "30%",
    top: "65%",
    floatDelay: 1.0,
  },
  {
    name: "Public Speaking",
    iconType: "🎤",
    left: "60%",
    top: "60%",
    floatDelay: 1.1,
  },
  {
    name: "Networking",
    iconType: "🤝",
    left: "82%",
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
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          description="Here's a little more about me."
          eyebrow="About"
        />
        <div className="flex justify-center mt-6">
          <a
            href="/Ivan_Goranov_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-950 rounded-xl font-medium hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15l-4-4h2.5V7h3v6H16l-4 4z" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
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
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
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
            <div className="relative flex-1 h-[200px]" ref={constraintRef}>
              {hobbies.map((item) => (
                <motion.div
                  key={item.name}
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute cursor-grab active:cursor-grabbing hover:shadow-lg"
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
              className="w-full h-full object-cover object-[45%_55%] scale-110 transform"
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
