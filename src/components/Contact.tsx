import Nayo from "../assets/images/nayo.png";
import toast from "react-hot-toast";
import SectionLayout from "../layout/SectionLayout";
import useFadeIn from "../hooks/useFadeIn";

export default function Contact() {
  const fadein = useFadeIn();
  const email = "dhkswksla22@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.success("이메일이 복사되었어요!");
    });
  };

  return (
    <div {...fadein}>
      <SectionLayout title="감사합니다!">
        <div className="flex flex-col md:flex-row items-center justify-center mb-[100px] md:mb-[250px]">
          <div className="flex-shrink-0 px-[50px] mb-[50px] md:mb-[20px]">
            <img src={Nayo} alt="나요" className="w-[200px] h-auto" />
          </div>

          <div className="flex flex-col text-left px-[50px]">
            <h1 className="text-[20px] text-[var(--main-color-1)] mb-[20px]">
              다른 궁금한 점이 있다면,
            </h1>
            <ul className="space-y-3 text-[16px] text-[var(--white-color)]">
              <li
                onClick={handleCopyEmail}
                className="cursor-pointer hover:text-[var(--point-color-1)] transition"
              >
                Email : {email}
              </li>
              <li>Phone : 010-3013-7923</li>
              <li>
                <a
                  href="https://github.com/JINJIYU23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--point-color-1)] transition"
                >
                  GitHub : github.com/JINJIYU23
                </a>
              </li>
              <li>
                <a
                  href="https://flint-megaraptor-562.notion.site/1480d2b6eed180b9a46ded03bd59370d?pvs=74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--point-color-1)] transition"
                >
                  Notion : 포트폴리오 바로가기
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
