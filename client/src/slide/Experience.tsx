import * as S from "../style/CommonLayout";
import * as E from "../style/ExperienceStyled";
import { WorkExperience } from "../infoData/InfoMyData";

const Experience = () => {
  return (
    <S.SlideLayoutWrapper id="experience">
      <S.BackgroundWrapper props={"#444654"}>
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
