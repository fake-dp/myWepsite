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
      title: "프리온보딩 프론트엔드 챌린지 3월",
      date: "2023.03 ~ 2021.04",
      description: [
        "1. 로그인, 인증, 레이아웃 컴포넌트 학습",
        "2. JWT, 보안, API 호출, 로그아웃",
        "3. 로그인 상태에 따라 라우터 접근 권한 제어",
      ],
      link: ["https://coin-typescript.vercel.app/"],
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
