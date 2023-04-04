import * as S from "../style/CommonLayout";
import * as E from "../style/ExperienceStyled";
interface WorkExperience {
  link: string;
  position: string;
  linkName: string;
  mainDecsription: string;
  description: string[];
  stack: string;
}

const Experience = () => {
  const WorkExperience: WorkExperience[] = [
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

  return (
    <S.SlideLayoutWrapper id="experience">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Experience</S.Title>
          <E.CompanyText>
            {" "}
            브랜뉴테크 (비비빅닷컴)
            <p>2022.04.05 ~ 2022.11.16</p>
          </E.CompanyText>
          {WorkExperience.map((work, index) => (
            <E.ContentsWrapper key={index}>
              <div>
                <h4>{work.position}</h4>
                <p>{work.mainDecsription}</p>
              </div>

              <div>
                <p>기술 : {work.stack}</p>
                <a href={work.link} target="_blank" rel="noreferrer">
                  링크 : {work.linkName}
                </a>
              </div>
              <ul>
                <p>성과 및 구현 사항</p>
                {work.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </E.ContentsWrapper>
          ))}
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Experience;
