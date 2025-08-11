import Figma from "../assets/images/figma.png";
import Git from "../assets/images/git.png";
import Github from "../assets/images/github.png";
import Js from "../assets/images/js.png";
import Next from "../assets/images/next.png";
import React from "../assets/images/react.png";
import Slack from "../assets/images/slack.png";
import Supabase from "../assets/images/supabase.png";
import Tailwind from "../assets/images/tailwind.png";
import Tanstack from "../assets/images/tanstack.png";
import Ts from "../assets/images/ts.png";
import Vite from "../assets/images/vite.png";
import Zustand from "../assets/images/zustand.png";

const skills = [
  { src: Js, alt: "JavaScript" },
  { src: Ts, alt: "TypeScript" },
  { src: React, alt: "React" },
  { src: Next, alt: "Next.js" },
  { src: Tailwind, alt: "TailwindCSS" },
  { src: Vite, alt: "Vite" },
  { src: Zustand, alt: "Zustand" },
  { src: Tanstack, alt: "TanStack Query" },
  { src: Supabase, alt: "Supabase" },
  { src: Git, alt: "Git" },
  { src: Github, alt: "Github" },
  { src: Figma, alt: "Figma" },
  { src: Slack, alt: "Slack" },
];

export default function Skills() {
  return (
    <div className="px-[200px] flex flex-col justify-center items-center pb-[250px]">
      <h1 className="text-[24px] text-[var(--main-color-1)] py-[50px]">
        기술 스택 및 도구
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <button className="w-[60px] h-[60px] rounded-[10px] bg-white/20 hover:shadow-[0_8px_15px_var(--main-color-1)] transition-shadow duration-300 flex items-center justify-center backdrop-blur-sm">
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-[40px] h-[40px] object-cover"
              />
            </button>
            <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 px-2 py-1 text-[12px] text-[var(--white-color)] bg-[var(--main-color-1)] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              {skill.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
