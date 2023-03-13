import React from "react";
import * as S from "../style/AboutStyled";
const Projects = () => {
  return (
    <S.AboutWrapper id="project">
      <S.AboutContainer>
        <S.TitleText>🍒 Project</S.TitleText>

        <S.AboutText>
          성장의 원동력은 성실과, 꾸준함이라고 생각합니다. <br />
          성실함과 꾸준함의 가치를 알기에 1일 1커밋 운동을 합니다. <br />
          어떤 일이든 겸손의 자세로 배움을 게을리하지 않고, <br />
          빠르게 변화하는 트렌드에 맞춰 발전하는 프론드 앤드 개발자가
          되겠습니다.
        </S.AboutText>
      </S.AboutContainer>
    </S.AboutWrapper>
  );
};

export default Projects;
