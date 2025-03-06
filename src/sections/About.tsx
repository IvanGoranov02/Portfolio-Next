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
  },
  {
    name: "Gaming",
    iconType: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    name: "Cars",
    iconType: "🚗",
    left: "10%",
    top: "35%",
  },
  {
    name: "Music",
    iconType: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    name: "Watches",
    iconType: "⏱️",
    left: "70%",
    top: "45%",
  },
  {
    name: "Gym",
    iconType: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    name: "Reading",
    iconType: "📚",
    left: "35%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28 lg:px-20">
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
          <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Discover the tools that fuel my creativity and productivity."
            />
            <div className="">
              <ToolboxItems toolboxItems={toolboxItems} />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
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
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {item.iconType}
                  </span>
                  <span className="">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              className="w-full h-full object-cover object-left-top"
              alt="Map"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image
                src={memoji}
                className="w-20 h-20 object-cover"
                alt="Memoji"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
