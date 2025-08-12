import { RiNotionFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Aurora from "../components/Aurora";
import TextType from "../components/TextType";
import Jeongjoo from "../assets/images/jeongjoo.png";
import Main from "../components/Main";

export default function Layout() {
  const iconClass =
    "text-2xl text-[var(--white-color)] cursor-pointer transition-transform duration-300 hover:scale-110";

  return (
    <div className="relative w-full min-h-screen bg-[var(--background)] select-none">
      <div
        className="absolute top-0 left-0 right-0 h-[1000px] z-0 overflow-hidden
                [mask-image:linear-gradient(to_bottom,white,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,white,transparent)]"
      >
        <Aurora
          colorStops={["#fc5185", "#3fc1c9", "#364f6b"]}
          blend={0.5}
          amplitude={0.5}
          speed={1}
        />
      </div>

      <div className="relative z-10 flex flex-row gap-5 py-2 pr-4 items-center justify-end">
        <div className={iconClass}>
          <RiNotionFill />
        </div>
        <div className={iconClass}>
          <IoMail />
        </div>
        <div className={iconClass}>
          <IoLogoGithub />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src={Jeongjoo}
            alt="Logo"
            className="w-[250px] h-auto mt-[250px]"
          />
          <div className="mt-[50px] text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px]  text-center">
            <TextType
              text={[
                "Hello, World!",
                "안녕하세요! 프론트엔드 개발자 정지유입니다.",
              ]}
              typingSpeed={150}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Main />
      </div>
    </div>
  );
}
