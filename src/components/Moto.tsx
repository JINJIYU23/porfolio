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
            <div className="flex flex-col md:ml-[30px] justify-between text-start">
              <p className="mb-[20px]">
                빠르게 변화하는 기술과 트렌드 속에서 살아가는 개발자에게 <br />{" "}
                ‘적응’은 더 이상 선택이 아닌 생존의 조건입니다. <br />
                특히 프론트엔드는 하루가 다르게 변화하는 만큼, <br /> 늘 새로운
                것을 배우고 적용해야 합니다.
              </p>
              <p className="mb-[20px]">
                저 또한 그런 흐름 속에서 발맞춰 나가고자 끊임없이 공부하고
                도전해 왔습니다. <br />
                하지만 그 과정에서 한 가지 변하지 않는 중요한 가치를
                발견했습니다.
              </p>
              <p className="mb-[20px]">
                바로 <br />
                <span className="text-[20px] text-[var(--point-color-1)]">
                  사용자를 위한 고민을 끝까지 포기하지 않는 마음
                </span>
                <br />
                그리고 <br />
                <span className="text-[20px] text-[var(--point-color-1)]">
                  더 나은 경험을 위한 집요한 개선의지
                </span>
              </p>
              <p className="mb-[20px]">
                저는 앞으로도 변화에 민감하게 반응하며 유연하게 성장해 나가되,{" "}
                <br /> 이 소중한 마음만큼은 절대 가볍게 여기지 않는 개발자가
                되고싶습니다.
              </p>
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
}
