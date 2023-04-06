import {
  IAboutInfo,
  IWorkExperience,
  IEducationInfo,
  IContactInfo,
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
