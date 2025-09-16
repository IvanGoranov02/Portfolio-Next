import { SectionHeader } from "@/components/SectionHeader";
import darkSaasLandingPage from "@/assets/images/blog.png";
import mealPlanner from "@/assets/images/meal-planner.png";
import aiStartupLandingPage from "@/assets/images/portfolio.png";
import forumProject from "@/assets/images/forum.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Blog with React.js",
    results: [
      { title: "Built a social media-like application with React.js" },
      { title: "Implemented user authentication and profile management" },
      { title: "Added post creation, reactions, and comments functionality" },
    ],
    link: "https://github.com/IvanGoranov02/Blog-with-React_JS/tree/main/ui",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Nutrition Calculator",
    results: [
      { title: "Developed a personalized nutrition calculator" },
      { title: "Implemented BMR and TDEE calculations" },
      { title: "Created meal plans based on user goals (bulk/cut/maintain)" },
    ],
    link: "https://github.com/IvanGoranov02/Nutritions/tree/ig-/nutrition-calculator",
    image: mealPlanner,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Portfolio Website",
    results: [
      { title: "Built with Next.js and TypeScript" },
      { title: "Implemented responsive design with Tailwind CSS" },
      { title: "Added smooth animations with Framer Motion" },
    ],
    link: "https://github.com/IvanGoranov02/Portfolio-Next",
    image: aiStartupLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Forum Application",
    results: [
      { title: "Built a modern forum platform with Next.js" },
      { title: "Implemented user authentication and role management" },
      { title: "Added real-time messaging and discussion threads" },
    ],
    link: "https://github.com/IvanGoranov02/Portfolio-Next",
    image: forumProject,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
          eyebrow="Real-world Results"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16"
              style={{
                top: `${64 + projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase text-sm gap-2 tracking-widest text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span className="text-white/60 mx-2">&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mt-4 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                          key={result.title}
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span className="text-white/60">{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4"
                      aria-label={`View ${project.title} project on GitHub`}
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:w-auto md:px-6 hover:bg-emerald-300 transition-colors">
                        <span>View Project</span>
                        <ArrowUpIcon className="size-4" aria-hidden="true" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title} - ${project.company} project`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
