import { useState } from "react";
import SectionLayout from "../layout/SectionLayout";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import projectItems from "../data/project.ts";
import Detail from "../components/Datail.tsx";

interface ProjectItem {
  title: string;
  description: string;
  bgColor: string;
  tech: string[];
  logo: string;
  url: string;
}

export default function Project() {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const openModal = () => setShowDetail(true);
  const closeModal = () => setShowDetail(false);

  return (
    <SectionLayout title="프로젝트 상세">
      <div className="w-full h-[600px]">
        <ScrollStack>
          {projectItems.map((item: ProjectItem, index: number) => (
            <ScrollStackItem
              key={index}
              itemClassName="text-[var(--white-color)] flex flex-col justify-between h-full p-[20px]"
              style={{ background: item.bgColor }}
            >
              <div>
                <div className="flex justify-start mb-[10px]">
                  <img
                    src={item.logo}
                    alt={`${item.title} 로고`}
                    className="w-[120px] h-auto object-contain"
                  />
                </div>
                <h2 className="text-[24px]">{item.title}</h2>
                <p className="text-[18px] mt-[10px]">{item.description}</p>

                <div className="flex gap-2 my-[10px]">
                  {item.tech.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className="py-1 px-3 bg-[var(--white-color)] text-[16px] rounded-[10px]"
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
                  className="cursor-pointer hover:text-black transition text-[16px]"
                >
                  사이트 바로가기
                </a>

                <button
                  onClick={openModal}
                  className="text-[16px] flex w-[100px] my-[5px] transition-all duration-300 ease-in-out hover:text-black cursor-pointer"
                >
                  자세히 보기
                </button>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {showDetail && <Detail />}
    </SectionLayout>
  );
}
