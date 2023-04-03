import styled from "styled-components";
import * as S from "../style/CommonLayout";
const Skills = () => {
  return (
    <S.SlideLayoutWrapper id="skills">
      <S.BackgroundWrapper props={"#444654"}>
        <S.PaddingWrapper>
          <S.Title>Skills</S.Title>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Skills;

export const Test = styled.div`
  background-color: blue;
  width: 100%;
  height: 700px;
`;
