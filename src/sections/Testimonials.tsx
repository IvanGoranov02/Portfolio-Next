"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const achievements = [
  {
    title: 'National competition "Technology, Creativity, Entrepreneurship"',
    place: "I",
    category: "Website category",
    years: "2020, 2021",
  },
  {
    title: "11th National IT competition, Blagoevgrad",
    place: "II",
    years: "2019",
  },
  {
    title: "12th and 13th National IT competition, Blagoevgrad",
    place: "I",
    years: "2019, 2018",
  },
  {
    title: 'National competition "IT-Znayko"',
    place: "I",
    years: "2017",
  },
  {
    title: 'National competition "John Atanasov"',
    place: "I",
    years: "2017",
  },
  {
    title: "Fifth Session of the Student Institute of BAS",
    place: "II",
    years: "2019",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="achievements" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Achievements & Competitions"
          description="A collection of my accomplishments in various IT competitions."
          eyebrow="Recognition"
        />
      </div>
      <div className="mt-10 md:mt-20 relative">
        <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-gray-900 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-gray-900 to-transparent z-20" />
        <div className="overflow-x-clip py-4 -my-4">
          <div className="flex gap-8 hover:[&>*]:pause-animation hover:[&>*]:-rotate-3 hover:[&>*]:transition-transform px-[200px]">
            {new Array(2).fill(0).map((_, arrayIndex) => (
              <div
                key={arrayIndex}
                className="flex flex-none gap-8 animate-move-left md:animation-duration-[90s] animation-duration-[180s]"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={`${achievement.title}-${achievement.years}-${arrayIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[400px] flex-none"
                  >
                    <Card className="p-6 transition-transform duration-300">
                      <div className="flex flex-col h-full">
                        <span className="text-5xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4">
                          {achievement.place}
                        </span>
                        <div className="space-y-2">
                          <h3 className="text-xl font-medium">
                            {achievement.title}
                          </h3>
                          {achievement.category && (
                            <p className="text-white/60 text-lg">
                              {achievement.category}
                            </p>
                          )}
                          <p className="text-white/40 text-sm">
                            {achievement.years}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
