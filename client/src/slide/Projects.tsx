import React from "react";
import styled from "styled-components";
import * as S from "../style/CommonLayout";
const Projects = () => {
  return (
    <S.SlideLayoutWrapper id="project">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Project</S.Title>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Projects;
