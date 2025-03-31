"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const experiences = [
  {
    period: "March 2024 - Present",
    role: "Front-End Developer",
    company: "FibWeb",
    description:
      "Specializing in building and enhancing mobile applications, web-based solutions, and large-scale enterprise software. The team consists of multidisciplinary talents - software engineers, developers, designers, and specialists working together to deliver exceptional digital solutions.",
    technologies: ["React.js", "Redux", "JavaScript", "MUI", "Bootstrap"],
  },
  {
    period: "2024 - 2025 (6 months)",
    role: "Front-End Developer",
    company: "Hight.IO",
    description:
      "Leading front-end development for enterprise-level applications, specializing in ERP and CRM solutions. Successfully implemented Open Banking finance integration and developed a no-code app builder for JD Edwards. Focused on creating intuitive user interfaces and optimizing application performance.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
  },
  {
    period: "2022 - 2024 (2 years)",
    role: "Front-End Developer",
    company: "Euroins Insurance Bulgaria",
    description:
      "Played a key role in developing and maintaining insurance web applications. Created comprehensive solutions for car insurance (both liability and comprehensive), health insurance, and travel insurance platforms. Improved user experience and implemented responsive design across all applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React.js", "JavaScript", "MUI", "HTML", "CSS", "Redux.js"],
  },
  {
    period: "2020 - 2021",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description:
      "Successfully delivered multiple web development projects for various clients. Specialized in creating custom websites for marketing campaigns and company portfolios. Managed entire project lifecycles from initial client consultation to final deployment. Built a strong client base through referrals and consistently delivered projects on time and within budget.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    rotateX: 90,
    translateY: -50,
    translateZ: -100,
    transformPerspective: 1000,
  }),
  visible: {
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateZ: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1], // Cubic bezier for smooth animation
      staggerChildren: 0.1,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 perspective-1000">
      <div className="container">
        <SectionHeader
          title="Work Experience"
          description="My professional journey in web development."
          eyebrow="Career"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <Card
                className="sticky px-8 pt-8 pb-8 md:pt-12 md:px-12 lg:px-16 transition-transform duration-500 hover:scale-[1.02] group-hover:shadow-2xl"
                style={{
                  top: `${64 + index * 40}px`,
                }}
              >
                <motion.div variants={contentVariants}>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase text-sm gap-2 tracking-widest text-transparent bg-clip-text">
                    <span>{experience.company}</span>
                    <span className="text-white/60 mx-2">&bull;</span>
                    <span>{experience.period}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mt-4 md:mt-5 md:text-4xl">
                      {experience.role}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <p className="text-white/60 text-lg mt-6 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
