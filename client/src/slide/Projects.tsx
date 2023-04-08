import * as S from "../style/CommonLayout";
import * as P from "../style/ProjectStyled";
import { ProjectInfo } from "../infoData/InfoMyData";
const Projects = () => {
  return (
    <S.SlideLayoutWrapper id="project">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Project</S.Title>
          {ProjectInfo.map((info) => (
            <P.ProjectsWrapper key={info.id}>
              <P.ProjectImgs src={info.image} alt={info.image} />
              <P.ProjectContent>
                <h4>{info.title}</h4>
                <span>{info.period}</span>
                <p>{info.subdescription}</p>
                <p>기술 스택 : {info.stack}</p>
                <P.LinkWrapper>
                  <p>관련 링크 : </p>
                  <a href={info.deploy} target="_blank" rel="noreferrer">
                    배포링크
                  </a>
                  <a href={info.github} target="_blank" rel="noreferrer">
                    깃허브
                  </a>
                  <a href={info.blog} target="_blank" rel="noreferrer">
                    블로그
                  </a>
                </P.LinkWrapper>
                <ul>
                  {info.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </P.ProjectContent>
            </P.ProjectsWrapper>
          ))}
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Projects;
