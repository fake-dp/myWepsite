import styled from "styled-components";
import * as S from "../style/SkillsStyled";
import { SiAxios } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
const Skills = () => {
  return (
    <S.AboutWrapper id="skill">
      <S.AboutContainer>
        <S.TitleText>🍋 Skills</S.TitleText>
        <S.AboutText>저는 이런 기술을 즐겨 사용합니다.</S.AboutText>
        <ContentsWrapper>
          <SkillsTextTitle>#1. JavaScript</SkillsTextTitle>
          <SkillsTextPtag>
            - 자바스크립트를 활용하여 html & css를 제어 할 수 있습니다. <br />
            - 기본적인 문법에 대한 이해가 있으며 함수를 만들어 사용 할 수
            있습니다. <br />
            - 로컬스토리지를 활용하여 데이터를 저장 할 수 있습니다. <br />
            - 자바스크립트를 활용하여 다양한 토이 프로젝트를 진행 한 경험이
            있습니다. <br />
            <br />
          </SkillsTextPtag>
        </ContentsWrapper>
        <ContentsWrapper>
          <SkillsTextTitle>#2. React</SkillsTextTitle>
          <SkillsTextPtag>
            - 상태관리를 통해 데이터를 다룰수 있습니다. <br />
            - 필요에 따라 훅을 사용하여 개발할수 있습니다. <br />
            - 라우터를 활용한 spa 개발을 할 수 있습니다. <br />
            - 함수형 컴포넌트를 만들어 props를 전달하고 받을 수 있습니다. <br />
            - http 통신은 axios를 즐겨사용하며 데이터 바인딩을 할 수 있습니다.
            <br />
            <br />
          </SkillsTextPtag>
        </ContentsWrapper>
        <ContentsWrapper>
          <SkillsTextTitle>#3. Styled-Components</SkillsTextTitle>
          <SkillsTextPtag>
            - 컴포넌트 단위로 css를 수월하게 관리 할 수 있습니다. <br />
            - props를 활용하여 스타일을 조절 할 수 있습니다.
            <br />
            - 재사용과 확장성을 고려하여 사용할 수 있습니다. <br />
            - 조건부 스타일링을 할 수 있습니다. <br />
            <br />
          </SkillsTextPtag>
        </ContentsWrapper>

        <S.AboutText>최근에는 이런 공부를 하고 있어요!</S.AboutText>
      </S.AboutContainer>
    </S.AboutWrapper>
  );
};

export default Skills;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillsTextTitle = styled.p`
  display: flex;

  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-top: 1rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  > svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

export const SkillsTextPtag = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-top: 1rem;
  line-height: 2.3rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
