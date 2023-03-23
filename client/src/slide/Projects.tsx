import * as S from "../style/ProjectStyled";
import styled from "styled-components";
const Projects = () => {
  const projectData = [
    {
      id: 0,
      title: "🍒 Challenge JS 14",
      subdescription: "자바스크립트 학습을 위한 미니 프로젝트 입니다.",
      gitlink: "https://github.com/fake-dp/Js-Challenge14-Mini-Project",
      depoloylink: "https://js-challenge14-mini-project.vercel.app/",
      description:
        "이프로젝트를 통해 자바스크립트에 대한 재미를 느꼈습니다. 돔을 조작하고 함수를 만들어서 다양한 웹 어플리케이션을 만들었습니다.",
    },
  ];

  return (
    <S.ProjectWrapper id="project">
      <S.ProjectContainer>
        <S.TitleText>🍒 Project</S.TitleText>
        <S.ProjectText>
          프로젝트를 통해 조금 더 성장 할 수 있었습니다.
        </S.ProjectText>
        {projectData.map((info) => (
          <EducationWrapper key={info.id}>
            <SubText>{info.title}</SubText>
            <p>{info.subdescription}</p>
            <ContentsWrapper>
              <StyledPtag>
                🔗 링크{" "}
                <a href={info.gitlink}>
                  <li>Git</li>
                </a>
                <a href={info.depoloylink}>
                  <li>Deploy</li>
                </a>
              </StyledPtag>
              <StyledPtag>
                🍏 학습내용
                <p>{info.description}</p>
              </StyledPtag>
            </ContentsWrapper>
          </EducationWrapper>
        ))}
      </S.ProjectContainer>
    </S.ProjectWrapper>
  );
};

export default Projects;

export const EdueText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-top: 1rem;
  line-height: 2.3rem;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const EducationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 15px;
  transition: 0.3s;
  margin-top: 10px;
  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    padding: 30px;
    width: 550px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    width: 300px;
  }
`;

export const SubText = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  letter-spacing: 0.1rem;
  @media (max-width: 1200px) {
    min-width: 300px;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    min-width: 100px;
  }
`;

export const DateText = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 30px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  > p {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  > ul {
    line-height: 1.3;
    margin-bottom: 10px;
    > li {
      font-size: 1.1rem;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 1200px) {
    > p {
      font-size: 1rem;
    }
    > ul {
      > li {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 800px) {
    > p {
      font-size: 0.9rem;
    }
    > ul {
      > li {
        font-size: 0.8rem;
      }
    }
  }
`;

export const StyledPtag = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 10px;
  > a {
    text-decoration: none;
    color: black;
    > li {
      margin-top: 10px;
      font-size: 0.9rem;
    }
  }
`;
