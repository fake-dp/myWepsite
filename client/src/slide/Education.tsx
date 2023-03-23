import * as S from "../style/EducationStyled";

interface IEducationInfo {
  id: number;
  title: string;
  date: string;
  description: string[];
  link: string[];
}

const Education = () => {
  const EducationInfo: IEducationInfo[] = [
    {
      id: 0,
      title: "프리온보딩 프론트엔드 챌린지 - (Todo List)",
      date: "2023.02 ~ 2021.03",
      description: ["1. CRUD 기능 구현", "2. 토큰 유무에 따른 리다이렉트"],
      link: [
        " https://wanted-fake-dp.vercel.app/",
        "https://github.com/fake-dp/wanted-pre-onboarding-frontend",
      ],
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

  return (
    <S.EdueWrapper id="education">
      <S.EdueContainer>
        <S.TitleText>🍉 Education</S.TitleText>
        <S.EdueText>코딩 교육기관 및 강의를 통해 학습을 하였습니다.</S.EdueText>
        {EducationInfo.map((info) => (
          <S.EducationWrapper key={info.id}>
            <S.SubText>{info.title}</S.SubText>
            <S.DateText>{info.date}</S.DateText>
            <S.ContentsWrapper>
              <p>🍏 학습내용</p>
              <ul>
                {info.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <S.StyledPtag>
                🔗 링크{" "}
                {info.link.map((link, index) => (
                  <a href={link}>
                    <li key={index}>{link}</li>
                  </a>
                ))}
              </S.StyledPtag>
            </S.ContentsWrapper>
          </S.EducationWrapper>
        ))}
      </S.EdueContainer>
    </S.EdueWrapper>
  );
};

export default Education;
