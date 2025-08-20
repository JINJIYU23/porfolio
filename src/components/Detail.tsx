import type { ProjectItem } from "../types/projectType";
import React from "react";

export default function Detail({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center z-50 p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        onClick={onClose}
      >
        <div
          className="hide-scrollbar bg-[var(--background)] h-[90vh] rounded-[10px] p-8 max-w-[800px] w-full relative overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-[var(--white-color)] text-2xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <Icon className="w-20 h-20" style={{ color: project.textColor }} />
          <h1
            className="text-[32px] font-semibold my-4"
            style={{ color: project.textColor }}
          >
            {project.title}
          </h1>
          <div className="text-[var(--white-color)] text-[16px] my-[20px]">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <h2 className="text-[24px] text-[var(--main-color-1)] w-[120px]">
                  Tech
                </h2>
                <p className="flex-1">{project.tech.join(", ")}</p>
              </li>
              <li className="flex items-center gap-4">
                <h2 className="text-[24px] text-[var(--main-color-1)] w-[120px]">
                  Date
                </h2>
                <p className="flex-1">{project.date}</p>
              </li>
              <li className="flex items-center gap-4">
                <h2 className="text-[24px] text-[var(--main-color-1)] w-[120px]">
                  GitHub
                </h2>
                <a
                  className="flex-1"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-4">
                <h2 className="text-[24px] text-[var(--main-color-1)] w-[120px]">
                  Page
                </h2>
                <a
                  className="flex-1"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </li>
            </ul>
          </div>

          <hr className="text-[var(--white-color)]" />

          <div className="text-[var(--white-color)] my-[20px]">
            <h2 className="text-[24px] text-[var(--main-color-1)]">
              프로젝트 소개
            </h2>
            <p className="text-semibold text-[18px]">{project.info}</p>
            <ul className="ml-4 list-disc">
              {project.infoDetail?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="text-[var(--white-color)]">
            <h2 className="text-[24px] text-[var(--main-color-1)]">역할</h2>
            {project.role?.map((roleItem, index) => (
              <div key={index} className="mb-[20px]">
                <p className="font-semibold mb-1">{`${index + 1}. ${
                  roleItem.title
                }`}</p>
                <ul className="ml-4 list-disc">
                  {roleItem.tasks.map((task, taskIndex) => (
                    <React.Fragment key={taskIndex}>
                      {task.name ? (
                        <li>
                          <p className="font-medium">{task.name}</p>
                          <ul className="ml-4 list-disc">
                            {task.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        task.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-[var(--white-color)]">
            <h2 className="text-[24px] text-[var(--main-color-1)]">배운점</h2>
            <ul className="ml-4 list-disc">
              {project.review?.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </div>

          <div className="text-[var(--white-color)] my-[20px]">
            <h2 className="text-[24px] text-[var(--main-color-1)]">
              페이지별 구현 결과
            </h2>
            <ul className="ml-4 list-disc">
              {project.result?.map((img) => (
                <li>
                  <p className="font-medium text-[16px] my-[10px]">
                    {img.title}
                  </p>{" "}
                  <img
                    src={img.img}
                    alt={`${project.title} 마이 프로필`}
                    className="object-contain rounded-[10px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
