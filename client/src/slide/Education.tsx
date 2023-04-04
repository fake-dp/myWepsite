import * as S from "../style/CommonLayout";
import * as E from "../style/EducationStyled";
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
        "1. 로그인 상태에 따른 리다이렉트",
        "2. 기본적인 CRUD 구현",
      ],
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

  return (
    <S.SlideLayoutWrapper id="education">
      <S.BackgroundWrapper props={"#444654"}>
        <S.PaddingWrapper>
          <S.Title>Education</S.Title>
          <E.DescriptionText>
            <p>
              코딩 전문 교육기관 코드스테이츠에서 프론트엔드 개발자로서의 기초를
              다졌습니다.
              <br />
              뿐만 아니라 각종 온라인 이나 코딩 커뮤니티를 통해 다양한 기술을
              학습하고 있습니다.
            </p>
          </E.DescriptionText>
          {EducationInfo.map((info) => (
            <E.ContentsWrapper key={info.id}>
              <h4>{info.title}</h4>
              <span>{info.date}</span>
              <ul>
                <E.SubTitleP>학습 내용</E.SubTitleP>
                {info.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              <E.SubTitleP>링크</E.SubTitleP>
              {info.link.map((link) => (
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              ))}
            </E.ContentsWrapper>
          ))}
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Education;
