import * as S from "../style/ExperienceStyled";

interface WorkExperience {
  company: string;
  link: string;
  position: string;
  period: string;
  linkName: string;
  description: string[];
  src: string;
}

const Experience = () => {
  const WorkExperience: WorkExperience[] = [
    {
      company: "브랜뉴 테크",
      link: "https://detta.design/",
      position: "detta! 서비스 프론트 개발 (React)",
      period: "2022.04.05 ~ 2022.11.16",
      linkName: "Detta",
      src: "https://detta.design/image-seo-commision-platform-detta.png",
      description: [
        "1. UI 최신화 퍼블리싱 & 개발",
        "2. portpolio 이미지 등록",
        "3. redux & context api를 통한 상태 관리",
        "4. paaaafdafdf",
        "5. adfasdfasdfasdfadfs",
      ],
    },
  ];

  return (
    <S.ExperienceWrapper>
      <S.ExperienceContainer>
        <S.TitleText>🍎 Experience</S.TitleText>
        {WorkExperience.map((work, index) => (
          <S.ContentsWrapper key={index}>
            <h3>{work.company}</h3>
            <p>{work.period}</p>
            <p>{work.position}</p>
            <S.LinkText>
              서비스 링크 :{" "}
              <a href={work.link} target="_blank">
                {" "}
                {work.linkName}
              </a>
            </S.LinkText>
            <S.ProjectImg src={work.src} />
            <p>🍏 기여한일</p>
            <ul>
              {work.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <S.LineSpan></S.LineSpan>
          </S.ContentsWrapper>
        ))}
      </S.ExperienceContainer>
    </S.ExperienceWrapper>
  );
};

export default Experience;
