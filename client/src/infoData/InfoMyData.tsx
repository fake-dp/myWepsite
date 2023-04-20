import {
  IAboutInfo,
  IWorkExperience,
  IEducationInfo,
  IContactInfo,
  ISkillsInfo,
  IOtherSkills,
  IProjectInfo,
} from "../types/InfoTypes";
import { SiVelog } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

// About
export const MyInfo: IAboutInfo[] = [
  {
    name: "이장희",
    email: "babybye777@gmail.com",
    phone: "010-6812-3470",
    github: "https://github.com/fake-dp",
    location: "서울 광진구",
  },
];

// Skills
export const SkillsInfo: ISkillsInfo[] = [
  {
    id: 1,
    title: "[ JavaScript ]",
    description: [
      "- 자바스크립트를 활용하여 html & css를 조작하여 동적인 웹 페이지를 만들 수 있습니다.",
      "- 기본적인 문법에 대한 이해가 있으며 함수를 만들어 사용 할 수 있습니다.",
      "- 비동기 처리에 대한 이해가 있으며 Promise, async/await를 사용 할 수 있습니다.",
      "- DOM 조작에 대한 이해가 있으며 이벤트 핸들링을 할 수 있습니다.",
      "- 자바스크립트를 활용하여 다양한 토이 프로젝트를 진행 한 경험이 있습니다.",
    ],
  },
  {
    id: 2,
    title: "[ React ]",
    description: [
      "- 상태관리를 통해 데이터를 다룰수 있습니다.",
      "- React Hooks를 사용하여 컴포넌트를 만들 수 있습니다.",
      "- React Router를 사용하여 SPA를 만들 수 있습니다.",
      "- 필요에 따라 Hook을 사용하여 개발 할 수 있습니다.",
      "- http 통신은 axios를 사용하며 데이터 바인딩을 할 수 있습니다.",
      "- Context Api & recoil을 활용하여 전역 상태 관리를 할 수 있습니다.",
    ],
  },
  {
    id: 3,
    title: "[ Styled-components ]",
    description: [
      "- 컴포넌트 단위로 스타일을 관리 할 수 있습니다.",
      "- props를 활용하여 동적인 스타일을 적용 할 수 있습니다.",
      "- 재사용과 확장성을 고려하여 스타일을 작성 할 수 있습니다.",
    ],
  },
];

export const OtherSkills: IOtherSkills[] = [
  {
    id: 1,
    title: "[ Other Skills ]",
    description: [
      "- Node.js, Express를 활용하여 서버를 구축 할 수 있습니다.",
      "- 백엔드와 협업하기 위한 Swagger와 Postman을 사용 할 수 있습니다.",
      "- Git과 GitLab을 사용하여 협업을 할 수 있습니다.",
      "- Jira를 사용하여 프로젝트를 관리 할 수 있습니다.",
      "- Figma와 illustrator를 사용하여 간단한 웹 디자인을 할 수 있습니다.",
      "- Axios와 GraphQL을 사용하여 데이터를 받아올 수 있습니다.",
    ],
  },
];

// Expreience
export const WorkExperience: IWorkExperience[] = [
  {
    link: "https://detta.design/",
    position: "#1. detta! 서비스 프론트 개발 (React)",
    linkName: "Detta",
    mainDecsription:
      "- detta 서비스 프론트 엔드 개발을 메인으로 담당하여 프로젝트 구조 설계 및 컴포넌트 개발",
    stack: "react, styled-components, redux & context api",
    description: [
      "- 전반적인 웹 프론트 전체 개발",
      "- 웹 퍼블리싱 작업",
      "- 작업 효율을 고려하여 재사용과 확장성을 고려한 컴포넌트 개발 (모달, 버튼)",
      "- 디자이너와 클라이언트를 구분하여 리다이렉트 훅 개발",
      "- 로그인 & 회원가입 등 기본적인 crud 개발 및 구현",
      "- 관리자 페이지 UI 제작",
      "- 베타 서비스 출시 후 신규 가입 120명 달성",
    ],
  },
  {
    link: "https://www.vivivik.com/",
    position: "#2. 비비빅 닷컴 유지보수",
    linkName: "Vivivik",
    mainDecsription: "- UI 개선 및 유지보수 작업",
    stack: "javascript, css, html",
    description: [
      "- 팝업 및 모달 & 이벤트 페이지 UI 개선",
      "- 고객 cs문의 감소",
    ],
  },
];

// Projects
export const ProjectInfo: IProjectInfo[] = [
  {
    id: 0,
    title: "Dev Log (팀프로젝트)",
    period: "2023.03 ~ ",
    subdescription:
      "Velog를 모티브로 하여 개발 공부를 기록 할 수 있는 기슬 블로그를 제작하였습니다. 이프로젝트를 통해 recoil을 사용하여 전역 상태 관리를 할 수 있었고, toast ui editor를 사용하여 블로그 포스팅 기능을 구현 할 수 있었습니다.",
    stack: "react, styled-components, recoil",
    deploy: "http://52.79.183.224/",
    image:
      "https://user-images.githubusercontent.com/75570030/233391277-da0e96b5-bb7a-42bc-8812-6aea493f1c2f.png",
    github: "https://github.com/fake-dp/Belog_front",
    blog: "",
    description: [
      "- toast ui editor를 사용하여 블로그 포스팅 기능 구현",
      "- 로그인 & 회원가입 기능 구현",
      "- 무한스크롤 기능 구현",
    ],
  },
  {
    id: 1,
    title: "My Portfolio Website (개인)",
    period: "2023.03 ~ 2023.04",
    subdescription:
      "Chat gpt의 컨셉의 포트폴리오 웹사이트를 만들어보았습니다. 타입스크립트를 활용하여 데이터에 타입을 지정하였고, 폴더의 컨셉에 맞게 컴포넌트를 분류하였습니다. 또 한 미디어 쿼리를 적용하여 반응형으로 만들었으며 중간 중간 인터렉티브한 효과를 넣어 재미를 더했습니다.",
    stack: "react, styled-components, typescript",
    deploy: "https://my-wepsite-fake-dp.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/123337284/230784980-4829764b-f9c7-4852-bda7-00b35c2592ca.png",
    github: "https://github.com/fake-dp/myWepsite",
    blog: "test",
    description: [
      "- Tab Scroll 기능 구현",
      "- 반응형 웹사이트 & 미디어쿼리 적용",
      "- 이메일 전송 기능 구현",
    ],
  },
  {
    id: 2,
    title: "JS Challenge 14 (개인)",
    period: "2022.12-2023.02",
    subdescription:
      "자바스크립트 학습을 목표로한 미니 프로젝트 입니다. 오직 자바스크립트만을 활용하여 14가지의 사이드 프로젝트를 만들어보는 챌린지이며, 챌린지를 통해 자바스크립트의 기본적인 문법과 돔을 조작하고 다양한 함수와 이벤트를 활용하여 프로젝트를 진행하였습니다.",
    stack: " javascript, css, html",
    deploy: "https://js-challenge14-mini-project.vercel.app/",
    image:
      "https://velog.velcdn.com/images/leecodeh/post/5dd6426b-d3d9-4cc5-92ba-f4364d1654fa/image.gif",
    github: "https://github.com/fake-dp/Js-Challenge14-Mini-Project",
    blog: "https://velog.io/@leecodeh/series/JS-Challenge14",
    description: [
      "- 로컬 스토리지를 활용한 투두 리스트 구현",
      "- 드래그 칸반보드 구현",
      "- canvas를 활용한 아트보드 구현",
      "- 이미지필터기능구현",
      "- 각종 다양한 효과 및 애니메이션 적용 및 구현",
    ],
  },
];

//  EducationInfo
export const EducationInfo: IEducationInfo[] = [
  {
    id: 0,
    title: "프리온보딩 프론트엔드 챌린지 3월",
    date: "2023.03 ~ 2021.04",
    description: ["1. 로그인 상태에 따른 리다이렉트", "2. 기본적인 CRUD 구현"],
    link: ["https://github.com/fake-dp/wanted-pre-onboarding-frontend"],
  },
  {
    id: 1,
    title: "노마드 코더 리엑트 마스터 첼린지 코스",
    date: "2022.12 ~ 2021.02",
    description: [
      "1. 타입스크립트 학습",
      "2. Framer animaitons 학습",
      "3. react query & recoil 학습",
    ],
    link: [
      "https://coin-typescript.vercel.app/",
      "https://netflex-clone-zeta.vercel.app/",
    ],
  },
  {
    id: 2,
    title: "코드스테이츠 (Software Engineering 31기 수료)",
    date: "2021.04 ~ 2021.11",
    description: [
      "1. Javascript 기반으로 풀스택 과정 학습",
      "2. 프론트엔드는 React, 백엔드는 Node.js 학습",
      "3. 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험",
      "4. 협업 프로젝트 2회 진행",
    ],
    link: [
      "https://codestates.notion.site/10-Touch-Touch-61663b8512e14e11a20b0b0114b6978a",
    ],
  },
  {
    id: 3,
    title: "패스트 캠퍼스 - 프론트엔드 개발 초격차 패키지",
    date: "2021.01 ~ 2021.07",
    description: [
      "1. html, css, javascript 개념 학습",
      "2. 스타벅스 클론 코딩",
    ],
    link: ["https://starbucks-cloncoding.vercel.app/"],
  },
];

// Contact
export const ContackInfo: IContactInfo[] = [
  {
    icon: <AiOutlineMail />,
    social: "email",
    link: "babybye777@gmail.com",
    href: "mailto:babybye777@gmail.com",
  },
  {
    icon: <BsGithub />,
    social: "github",
    link: "fake-dp",
    href: "https://github.com/fake-dp",
  },

  {
    icon: <SiVelog />,
    social: "blog",
    link: "velog @leecodeh",
    href: "https://velog.io/@leecodeh",
  },

  {
    icon: <RiKakaoTalkFill />,
    social: "kakao",
    link: "kakao open chat",
    href: "https://open.kakao.com/o/scu5eL8e",
  },
];
