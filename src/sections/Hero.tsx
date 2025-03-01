import Image from "next/image";
import memoji from "@/assets/images/memoji.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
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
        <HeroOrbit size={800} rotation={-72} rotationSpeed={10}>
          <StarIcon className="size-28 text-emerald-300  " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} rotationSpeed={10}>
          <StarIcon className="size-12 text-emerald-300  " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} rotationSpeed={10}>
          <StarIcon className="size-8 text-emerald-300  " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} rotationSpeed={0}>
          <SparkleIcon className="size-8 text-emerald-300/20  " />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} rotationSpeed={0}>
          <SparkleIcon className="size-5 text-emerald-300/20  " />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} rotationSpeed={0}>
          <SparkleIcon className="size-10 text-emerald-300/20  " />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={178} rotationSpeed={0}>
          <SparkleIcon className="size-3 text-emerald-300/20  " />
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
      <div className="container">
        <div className="flex items-center flex-col">
          <Image src={memoji} className="size-[100px]" alt="memoji" />
          <div className="flex justify-center w-full">
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full"></div>
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
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/15 bg-white text-gray-950 px-6 h-12 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
