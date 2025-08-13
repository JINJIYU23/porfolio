import SpotlightCard from "../components/SpotligthCard";
import projectItems from "../data/project.ts";
import Detail from "../components/Datail.tsx";
import SectionLayout from "../layout/SectionLayout";
import { useState, useEffect } from "react";

interface Task {
  name: string | null;
  details: string[];
}

interface Role {
  title: string;
  tasks: Task[];
}

interface Result {
  title: string;
  img: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  bgColor: string;
  tech: string[];
  logo: string;
  url: string;

  // 새로 추가된 필드
  info?: string;
  infoDetail?: string[];
  role?: Role[];
  review?: string[];
  result?: Result[];
}

export default function Projects() {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const openModal = () => setShowDetail(true);

  useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showDetail]);
  return (
    <>
      <SectionLayout title="프로젝트 상세">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((item: ProjectItem) => (
            <SpotlightCard
              className="w-full h-auto bg-[var(--main-color-1)]"
              spotlightColor={item.bgColor}
            >
              <div className="text-[var(--white-color)]">
                <div className="flex justify-start mb-3">
                  <img
                    src={item.logo}
                    alt={`${item.title} 로고`}
                    className="w-[80px] md:w-[120px] h-auto object-contain"
                  />
                </div>
                <h2 className="text-lg md:text-2xl">{item.title}</h2>
                <p className="text-sm md:text-lg mt-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 my-3">
                  {item.tech.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className="py-1 px-2 md:px-3 bg-neutral-800 text-base rounded-[10px] break-words"
                      style={{ color: item.bgColor }}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:scale-110 transition text-base"
                  style={{ display: "inline-block" }}
                >
                  사이트 바로가기
                </a>
                <button
                  onClick={openModal}
                  className="text-base flex w-fit my-1 transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                >
                  자세히 보기
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {showDetail && <Detail onClose={() => setShowDetail(false)} />}
      </SectionLayout>
    </>
  );
}
