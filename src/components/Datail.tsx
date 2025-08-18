import { LuMessageCircleHeart } from "react-icons/lu";
import type { ProjectItem } from "../types/projectType";

export default function Detail({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        onClick={onClose}
      >
        <div
          className="bg-[var(--background)] rounded-[10px] p-8 max-w-lg w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-[var(--white-color)] text-2xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <LuMessageCircleHeart className="w-20 h-20 text-pink-400" />
          <h1 className="text-[32px] font-semibold my-4 text-[var(--white-color)]">
            {project.title}
          </h1>
          <div className="text-[var(--white-color)]">
            <ul>
              <li>
                <h2>Tech</h2>
                <p>React TypeScript TailWindCss</p>
              </li>
              <li>
                <h2>Date</h2>
                <p>2025.05.19 - 2025.06.18</p>
              </li>{" "}
              <li>
                <h2>Detail in GitHub</h2>
                <a
                  href="https://github.com/run3go/Devcourse_SomePick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <h2>Page</h2>
                <a
                  href="https://somepick.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SomePick
                </a>
              </li>
            </ul>
          </div>

          <hr />

          <div className="text-[var(--white-color)]">
            <h2>프로젝트 소개</h2>
            <p>
              커플과 솔로 모두를 위한 맞춤형 연애 서비스, 관심사 기반 소개팅,
              커플 일정 공유,연애 커뮤니티까지 연애 상황에 따라 맞춤 기능을
              제공하는 소개팅 플랫폼
            </p>
            <ul>
              <li>
                ‘SomePick’은 사용자의 연애 상태(솔로/커플)에 따라 맞춤형 기능을
                제공하는 연애 기반 플랫폼입니다.
              </li>
            </ul>
          </div>

          <div className="text-[var(--white-color)]">
            <h2>역할</h2>
            <ul>
              <li></li>
            </ul>
          </div>

          <div className="text-[var(--white-color)]">
            <h2>배운점</h2>
            <ul>
              <li></li>
            </ul>
          </div>

          <div className="text-[var(--white-color)]">
            <h2>페이지별 구현 결과</h2>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
