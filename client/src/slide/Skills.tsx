import React from "react";
import { SlideLayoutWrapper } from "../style/CommonLayout";
import styled from "styled-components";
const Skills = () => {
  return (
    <SlideLayoutWrapper id="skills">
      <Test>skill</Test>
    </SlideLayoutWrapper>
  );
};

export default Skills;

export const Test = styled.div`
  background-color: blue;
  width: 100%;
  height: 700px;
`;
