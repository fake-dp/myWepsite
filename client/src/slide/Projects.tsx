import React from "react";
import styled from "styled-components";
import { SlideLayoutWrapper } from "../style/CommonLayout";
const Projects = () => {
  return (
    <SlideLayoutWrapper id="project">
      <Test>Testprojectㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇ</Test>
    </SlideLayoutWrapper>
  );
};

export default Projects;

export const Test = styled.div`
  background-color: blue;
  width: 100%;
  height: 700px;
`;
