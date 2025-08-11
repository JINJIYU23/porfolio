import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
// Project.tsx (외부 div도 스크롤 제한 없도록 변경)
export default function Project() {
  return (
    <>
      <div className="px-[200px] flex flex-col justify-center items-center pb-[250px]">
        <h1 className="text-[24px] text-[var(--main-color-1)] py-[50px]">
          프로젝트 상세
        </h1>

        <div className="w-full h-[600px]">
          <ScrollStack>
            <ScrollStackItem itemClassName="bg-[var(--main-color-1)] text-[var(--white-color)]">
              <h2 className="text-[24px]">티태</h2>
              <p className="text-[16px] mt-[10px]">
                챌린지를 통해 자산을 관리하는 실천형 가계부
              </p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[var(--point-color-1)] text-[var(--white-color)]">
              <h2 className="text-[24px]">SomePick</h2>
              <p className="text-[16px] mt-[10px]">
                커플, 솔로 모두를 위한 연애 플랫폼
              </p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[var(--main-color-1)] text-[var(--white-color)]">
              <h2 className="text-[24px]">TouchBase</h2>
              <p className="text-[16px] mt-[10px]">
                KBO팬들을 위한 야구 커뮤니티
              </p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="bg-[var(--point-color-1)] text-[var(--white-color)]">
              <h2 className="text-[24px]">이모지 추천기 Emoji</h2>
              <p className="text-[16px] mt-[10px]">
                검색어에 따라 Gemini를 사용한 인공지능으로 이모지를 추천해주는
                이모지 추천기 emoji
              </p>
            </ScrollStackItem>
            {/* <ScrollStackItem itemClassName="bg-[var(--main-color-1)] text-[var(--white-color)]">
              <h2 className="text-[24px]">나와 어울리는 고양이 찾기</h2>
              <p className="text-[16px] mt-[10px]">
                MBTI 테스트로 알아보는 나와 어울리는 고양이 찾기!
              </p>
            </ScrollStackItem> */}
          </ScrollStack>
        </div>
      </div>
    </>
  );
}
