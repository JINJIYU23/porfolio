import Somepick from "../assets/images/new_logo.png";
import Emoji from "../assets/images/emoji.png";
import Titae from "../assets/images/titae.png";
import Touchbase from "../assets/images/touchbase.png";
import Cats from "../assets/images/cats.png";

const projectItems = [
  {
    title: "티태",
    description: "챌린지를 통해 자산을 관리하는 실천형 가계부",
    bgColor: "rgba(107, 118, 255, 0.5)",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Figma",
    ],
    logo: Titae,
    url: "https://titae.vercel.app/",
  },
  {
    title: "SomePick",
    description: "커플, 솔로 모두를 위한 연애 플랫폼",
    bgColor: "rgba(255, 199, 237, 0.5)",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Figma",
      "Gemini API",
    ],
    logo: Somepick,
    url: "https://somepick.netlify.app/",
    info: "커플과 솔로 모두를 위한 맞춤형 연애 서비스, 관심사 기반 소개팅, 커플 일정 공유,연애 커뮤니티까지 연애 상황에 따라 맞춤 기능을 제공하는 소개팅 플랫폼",
    infoDetail: [
      "‘SomePick’은 사용자의 연애 상태(솔로/커플)에 따라 맞춤형 기능을 제공하는 연애 기반 플랫폼입니다.",
      "솔로에게는 이상형, 관심사, MBTI, 지역 등을 기반으로 한 소개팅과 하트 보내기/채팅 기능을 제공합니다.",
      "커플에게는 기념일 및 일정공유 캘린더, 커플 프로필 등 연애 기록을 남겨 연인끼리 공유할 수 있습니다.",
      "더불어 커뮤니티, 게시판, 운세 확인, 프로필 탐색 등 다양한 기능을 통해 사용자가 연애의 시작부터 관계의 유지를 모두 경험할 수 있도록 돕는 것이 목적입니다.",
    ],
    role: [
      {
        title: "마이 프로필 / 다른 유저 프로필",
        tasks: [
          {
            name: null,
            details: [
              "Next.js 14 App Router의 동적 라우팅 `[memberId]` 구조 활용",
              "Zustand 기반 전역 상태 관리로 사용자 데이터 캐싱 및 동기화",
              "TanStack Query를 활용한 서버 상태 관리",
              "프로필, 작성 글, 북마크, 챌린지 데이터의 정규화된 구조 관리",
            ],
          },
        ],
      },
      {
        title: "프로필 수정 및 탈퇴",
        tasks: [
          {
            name: "이미지 처리",
            details: [
              "Cloudinary 연동을 통한 이미지 업로드 및 최적화",
              "실시간 미리보기 기능 구현",
            ],
          },
          {
            name: "실시간 유효성 검사",
            details: [
              "Debounced input validation으로 API 호출 최적화",
              "서버 사이드 중복 확인 로직",
              "클라이언트 유효성 검사",
            ],
          },
        ],
      },
      {
        title: "목표 설정 및 칭호 장착",
        tasks: [
          {
            name: null,
            details: [
              "서버의 변경된 데이터를 `refetch()`를 통해 클라이언트 상태에 반영",
              "조건부 렌더링을 통해 불필요한 렌더링 방지",
              "CSS 모듈과 커스텀 hover 제어 기반의 무한 롤링 애니메이션",
              "`TitleSwiper.tsx`에서 칭호 클릭 시 장착 기능 구현",
            ],
          },
        ],
      },
    ],
    review: [
      "Supabase를 활용하여 직접 DB를 설계하고 데이터 간 관계를 정의함으로써 서버적인 사고력을 키웠습니다.",
      "Supabase의 Realtime 기능을 도입하여 알림 발생 시 유저에게 실시간으로 알림이 전달되도록 구현했습니다.",
      "프로젝트 초기에 모든 URL을 router로 연결해두는 방식으로 접근을 허용했지만, 비로그인 시 접속할 수 없는 소개팅 페이지나 커플 캘린더 페이지가 URL 직접 입력으로 접속이 가능한 문제를 확인했습니다. 이를 해결하기 위해 React Router의 loader를 활용하여 인증 기반 접근 제어를 구현했습니다. 이를 통해 보안성과 사용자 흐름을 개선할 수 있었습니다.",
      "html2canvas를 활용하여 운세 결과 캡쳐 기능을 넣고 이미지 파일을 zustand를 통해 전역 상태로 관리하여 운세 공유 페이지로 자연스럽게 전환될 수 있도록 설계해 핵심 기능의 완성도를 높였습니다.",
    ],
    result: [
      {
        title: "메인 페이지",
        img: "",
      },
    ],
  },
  {
    title: "TouchBase",
    description: "KBO팬들을 위한 야구 커뮤니티",
    bgColor: "rgba(0, 51, 160, 1)",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Figma"],
    logo: Touchbase,
    url: "https://kdt-touch-base.netlify.app/",
    info: "KBO 팬들을 위한 야구 커뮤니티",
    infoDetail: [
      "TouchBase 는 야구를 좋아하는 국내 팬들의 소통 창구로 활용할 수 있는 SNS 서비스입니다.",
      "개인의 프로필에서 구단을 선택하여 응원하는 팀을 고르고 자유롭게 글을 쓸 수 있습니다.",
      "사용자를 검색하거나 게시글을 검색할 수 있습니다.",
      "다양한 사용자들을 팔로우하며 마음에 드는 게시글에 '좋아요'를 누르거나 댓글을 작성할 수 있고 DM을 주고받으며 소통할 수 있습니다.",
    ],
    role: [
      {
        title: "마이 프로필 / 다른 유저 프로필",
        tasks: [
          {
            name: null,
            details: [
              "Next.js 14 App Router의 동적 라우팅 `[memberId]` 구조 활용",
              "Zustand 기반 전역 상태 관리로 사용자 데이터 캐싱 및 동기화",
              "TanStack Query를 활용한 서버 상태 관리",
              "프로필, 작성 글, 북마크, 챌린지 데이터의 정규화된 구조 관리",
            ],
          },
        ],
      },
      {
        title: "프로필 수정 및 탈퇴",
        tasks: [
          {
            name: "이미지 처리",
            details: [
              "Cloudinary 연동을 통한 이미지 업로드 및 최적화",
              "실시간 미리보기 기능 구현",
            ],
          },
          {
            name: "실시간 유효성 검사",
            details: [
              "Debounced input validation으로 API 호출 최적화",
              "서버 사이드 중복 확인 로직",
              "클라이언트 유효성 검사",
            ],
          },
        ],
      },
      {
        title: "목표 설정 및 칭호 장착",
        tasks: [
          {
            name: null,
            details: [
              "서버의 변경된 데이터를 `refetch()`를 통해 클라이언트 상태에 반영",
              "조건부 렌더링을 통해 불필요한 렌더링 방지",
              "CSS 모듈과 커스텀 hover 제어 기반의 무한 롤링 애니메이션",
              "`TitleSwiper.tsx`에서 칭호 클릭 시 장착 기능 구현",
            ],
          },
        ],
      },
    ],
    review: [
      "TypeScript를 사용하며 모든 데이터에 타입 명시의 중요성을 깨달았습니다.",
      "REST API 연동 경험이 처음이었기에, Axios를 활용해 API 호출과 응답 처리 방법을 익혔습니다.",
      "공통 설정을 적용한 Axios 인스턴스 구현을 통해 API 호출의 유지보수성과 재사용성을 향상시켰습니다.",
      "다양한 React hook을 사용함으로써 컴포넌트 상태 관리와 라이프 사이클 이해도를 높였습니다.",
      "Github 컨벤션을 기반으로 코드 리뷰를 활발히 진행하며 개발자로서 협업 툴 활용 능력을 향상시켰습니다.",
      "댓글 달기 버튼과 댓글 삭제, 좋아요 버튼을 빠르게 여러번 클릭했을 때 서버가 다운되는 문제가 발생했을 때, 중복 요청을 방지하기 위해 클릭을 막는 로직을 구현하여 해결하였습니다.",
    ],
    result: [
      {
        title: "구단별 펜페이지",
        img: "",
      },
    ],
  },
  {
    title: "이모지 추천기 Emoji",
    description:
      "검색어에 따라 Gemini를 사용해 이모지를 추천해주는 이모지 추천기 emoji",
    bgColor: "rgba(255, 250, 205, 0.5)",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "BootStrap",
      "Figma",
      "Gemini API",
      "Tailwind CSS",
    ],
    logo: Emoji,
    url: "https://emoji-recommender.vercel.app/",
    info: "검색어에 따라 Gemini를 사용한 인공지능으로 이모지를 추천해주는 이모지 추천기 emoji",
    infoDetail: [
      "Notion 문서의 목차에 이모지를 추가하면 시각적으로 더 보기 좋아져서 자주 활용하곤 합니다. 하지만 적절한 이모지를 찾기가 쉽지 않습니다.이러한 불편함을 해소하고자 관련 웹사이트를 직접 개발하게 되었습니다.",
    ],
    role: [
      {
        title: "마이 프로필 / 다른 유저 프로필",
        tasks: [
          {
            name: null,
            details: [
              "Next.js 14 App Router의 동적 라우팅 `[memberId]` 구조 활용",
              "Zustand 기반 전역 상태 관리로 사용자 데이터 캐싱 및 동기화",
              "TanStack Query를 활용한 서버 상태 관리",
              "프로필, 작성 글, 북마크, 챌린지 데이터의 정규화된 구조 관리",
            ],
          },
        ],
      },
      {
        title: "프로필 수정 및 탈퇴",
        tasks: [
          {
            name: "이미지 처리",
            details: [
              "Cloudinary 연동을 통한 이미지 업로드 및 최적화",
              "실시간 미리보기 기능 구현",
            ],
          },
          {
            name: "실시간 유효성 검사",
            details: [
              "Debounced input validation으로 API 호출 최적화",
              "서버 사이드 중복 확인 로직",
              "클라이언트 유효성 검사",
            ],
          },
        ],
      },
      {
        title: "목표 설정 및 칭호 장착",
        tasks: [
          {
            name: null,
            details: [
              "서버의 변경된 데이터를 `refetch()`를 통해 클라이언트 상태에 반영",
              "조건부 렌더링을 통해 불필요한 렌더링 방지",
              "CSS 모듈과 커스텀 hover 제어 기반의 무한 롤링 애니메이션",
              "`TitleSwiper.tsx`에서 칭호 클릭 시 장착 기능 구현",
            ],
          },
        ],
      },
    ],
    review: [
      "Bootstrap을 활용하여 카드 컴포넌트를 다양한 화면 크기에서도 자연스럽게 보이도록 구현하며, 반응형 UI에 대한 이해도를 높였습니다.",
      "초기에는 로딩 없이 검색 결과가 표시되어 약간의 끊김 현상이 발생하는 듯이 보였지만, 검색 시 로딩 화면을 추가하여 UX를 개선하였습니다.",
      "Gemini API를 직접 발급받아 서비스에 연동함으로써, 백엔드 서버 없이도 사용자의 입력에 적절한 이모지를 추천하는 기능 구현하였습니다.",
      "react-copy-to-clipboard 라이브러리를 사용해 클립보드에 복사되는 기능을 구현하며 사용자 편의성을 고려한 인터랙션을 구현하였습니다.",
    ],
    result: [
      {
        title: "구단별 펜페이지",
        img: "",
      },
    ],
  },
  {
    title: "나와 어울리는 고양이 찾기",
    description: "MBTI 테스트로 알아보는 나와 어울리는 고양이 찾기!",
    bgColor: "rgba(255, 205, 188, 0.5)",
    tech: ["React", "JavaScript", "Vite"],
    logo: Cats,
    url: "https://mbti-test-virid.vercel.app/",
    info: "12가지 질문을 통해서 나의 MBTI와 어울리는 고양이를 찾을 수 있는 재미있는 심리 테스트",
    infoDetail: [
      "MBTI 테스트가 유행하던 시기에, 심리 테스트와 고양이를 연결하여 재미있게 경험할 수 있는 테스트를 개발하였습니다.",
      "카카오톡 공유 기능을 구현하여 친구들과 테스트 결과를 쉽게 공유 가능하도록 설계",
    ],
    role: [
      {
        title: "마이 프로필 / 다른 유저 프로필",
        tasks: [
          {
            name: null,
            details: [
              "Next.js 14 App Router의 동적 라우팅 `[memberId]` 구조 활용",
              "Zustand 기반 전역 상태 관리로 사용자 데이터 캐싱 및 동기화",
              "TanStack Query를 활용한 서버 상태 관리",
              "프로필, 작성 글, 북마크, 챌린지 데이터의 정규화된 구조 관리",
            ],
          },
        ],
      },
      {
        title: "프로필 수정 및 탈퇴",
        tasks: [
          {
            name: "이미지 처리",
            details: [
              "Cloudinary 연동을 통한 이미지 업로드 및 최적화",
              "실시간 미리보기 기능 구현",
            ],
          },
          {
            name: "실시간 유효성 검사",
            details: [
              "Debounced input validation으로 API 호출 최적화",
              "서버 사이드 중복 확인 로직",
              "클라이언트 유효성 검사",
            ],
          },
        ],
      },
      {
        title: "목표 설정 및 칭호 장착",
        tasks: [
          {
            name: null,
            details: [
              "서버의 변경된 데이터를 `refetch()`를 통해 클라이언트 상태에 반영",
              "조건부 렌더링을 통해 불필요한 렌더링 방지",
              "CSS 모듈과 커스텀 hover 제어 기반의 무한 롤링 애니메이션",
              "`TitleSwiper.tsx`에서 칭호 클릭 시 장착 기능 구현",
            ],
          },
        ],
      },
    ],
    review: [
      "첫 프로젝트라 컴포넌트를 나누고 props를 전달하는 과정이 어렵게 느껴졌지만, 컴포넌트를 분리하고 재사용 가능한 구조로 만드는 것이더 큰 프로젝트에서 유지보수에 효과적이라는 점을 깨달았습니다.",
      "React Router를 이용해서 페이지 전환 구조를 직접 구현하며 라우팅에 대한 이해도를 높였습니다.",
      "Vercel을 활용해 프로젝트를 최종 배포하면서 CI/CD 흐름을 경험했습니다.",
      "카카오톡 공유하기 기능을 구현하며 API KEY 발급부터 배포 주소 연결까지 직접 설정하고 외부 API 연동 과정을 실습했습니다.",
    ],
    result: [
      {
        title: "구단별 펜페이지",
        img: "",
      },
    ],
  },
];

export default projectItems;
