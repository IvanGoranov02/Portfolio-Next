"use client";

import Image from "next/image";
import memoji from "@/assets/images/memoji.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <HeroOrbit
          size={800}
          rotation={-72}
          rotationSpeed={30}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          rotationSpeed={32}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          rotationSpeed={34}
          shouldOrbit
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} rotationSpeed={36} shouldOrbit>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} rotationSpeed={38} shouldOrbit>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} rotationSpeed={40} shouldOrbit>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={178} rotationSpeed={42} shouldOrbit>
          <SparkleIcon className="size-3 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} rotationSpeed={0}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} rotationSpeed={0}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-41} rotationSpeed={0}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-5} rotationSpeed={0}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex items-center flex-col">
          <Image src={memoji} className="size-[100px]" alt="memoji" />
          <div className="flex justify-center w-full">
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="relative">
                <div className="bg-green-500 size-2.5 rounded-full"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full animate-[ping-large_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              </div>
              <div className="text-sm font-medium">
                Available for new projects
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">
            I am passionate about front-end development and eager to learn new
            technologies and frameworks.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScroll("projects")}
              className="bg-gray-950 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl font-semibold hover:bg-white/5 transition-colors"
            >
              <span>Explore My Work</span>
              <ArrowDown className="size-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center gap-2 border border-white/15 bg-white text-gray-950 px-6 h-12 rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              <span>👋</span>
              <span>Let's Connect</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
