import SectionLayout from "../layout/SectionLayout";
import ProfileCard from "./ProfileCard";
import jjy from "../assets/images/jiyuyuyu.jpeg";
import useFadeIn from "../hooks/useFadeIn";

export default function Moto() {
  const fadein = useFadeIn();
  return (
    <>
      <div {...fadein}>
        <SectionLayout title="About Me">
          <div className="flex flex-col md:flex-row gap-10 text-[var(--white-color)] items-center justify-center text-[16px]">
            <ProfileCard
              imageSrc={jjy}
              altText="지유의 프로필"
              captionText="지유의 프로필"
              containerHeight="400px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
            <div className="flex flex-col md:ml-[30px] justify-between text-start ">
              <h1 className="text-[20px] mb-[10px] font-semibold text-[var(--point-color-1)]">
                여러 개발 분야 중 프론트엔드를 선택하게 된 이유는 무엇인가요?
              </h1>
              <p className="text-[16px] mb-[20px] leading-[30px]">
                학부시절, 멋쟁이 사자처럼이라는 동아리에서 프론트엔드 분야를
                처음 접하게 되었습니다. <br />
                <span className="rounded-[10px] py-1.5 px-1 bg-neutral-700">
                  내가 구상한 아이디어를 모니터 화면에 그려내는 개발자
                </span>{" "}
                라니, <br /> 정말 매력적인 분야라고 생각이 들어 프론트엔드를
                선택하게 되었습니다.
              </p>

              <h1 className="text-[20px] mb-[10px] font-semibold text-[var(--point-color-1)]">
                앞으로 프론트엔드 개발자로서 어떤 개발자가 되고싶나요?
              </h1>
              <p className="text-[16px] leading-[30px]">
                프론트엔드는 다른 개발 분야보다 더 빠르게 변화하는 기술이라고
                생각합니다. <br /> 저 역시도 그런 흐름을 맞춰가고자 끊임없이
                공부하고 도전했습니다. <br />
                하지만 그 과정에서 한가지 변하지 않는 중요한 가치를
                발견했습니다. <br />
                바로{" "}
                <span className="rounded-[10px] py-1.5 px-1 bg-neutral-700">
                  '사용자를 위한 고민을 끝까지 포기하지 않는 마음'
                </span>{" "}
                입니다. <br />
                저는 앞으로 변화에 민감하게 반응하며 유연하게 성장해 나가되,{" "}
                <br />이 가치를 소중히 여기는 개발자가 되고싶습니다.
              </p>
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
}
