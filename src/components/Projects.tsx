import SpotlightCard from "./SpotlightCard.tsx";
import projectItems from "../data/project.ts";
import type { ProjectItem } from "../types/projectType.ts";
import Detail from "./Detail.tsx";
import SectionLayout from "../layout/SectionLayout";
import { useState, useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  const fadein = useFadeIn();
  return (
    <>
      <div {...fadein}>
        <SectionLayout title="Projects">
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
                        className="py-1 px-2 md:px-3 bg-neutral-600 text-base rounded-[10px] break-words"
                        style={{ color: item.textColor }}
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
                    onClick={() => openModal(item)}
                    className="text-base flex w-fit my-1 transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  >
                    자세히 보기
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {selectedProject && (
            <Detail onClose={closeModal} project={selectedProject} />
          )}
        </SectionLayout>
      </div>
    </>
  );
}
