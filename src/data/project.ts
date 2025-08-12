import Somepick from "../assets/images/new_logo.png";
import Emoji from "../assets/images/emoji.png";
import Titae from "../assets/images/titae.png";
import Touchbase from "../assets/images/touchbase.png";

const projectItems = [
  {
    title: "티태",
    description: "챌린지를 통해 자산을 관리하는 실천형 가계부",
    bgColor: "var(--main-color-1)",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Figma",
    ],
    logo: Titae,
    url: "https://titae.vercel.app/",
  },
  {
    title: "SomePick",
    description: "커플, 솔로 모두를 위한 연애 플랫폼",
    bgColor: "var(--point-color-1)",
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Figma",
      "Gemini API",
    ],
    logo: Somepick,
    url: "https://somepick.netlify.app/",
  },
  {
    title: "TouchBase",
    description: "KBO팬들을 위한 야구 커뮤니티",
    bgColor: "var(--main-color-1)",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Figma"],
    logo: Touchbase,
    url: "https://kdt-touch-base.netlify.app/",
  },
  {
    title: "이모지 추천기 Emoji",
    description:
      "검색어에 따라 Gemini를 사용한 인공지능으로 이모지를 추천해주는 이모지 추천기 emoji",
    bgColor: "var(--point-color-1)",
    tech: [
      "React",
      "JavaScript",
      "BootStrap",
      "Figma",
      "Gemini API",
      "Tailwind CSS",
    ],
    logo: Emoji,
    url: "https://emoji-recommender.vercel.app/",
  },
];

export default projectItems;
