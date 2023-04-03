import React from "react";
import styled from "styled-components";
import { SlideLayoutWrapper } from "../style/CommonLayout";
const Education = () => {
  return (
    <SlideLayoutWrapper id="education">
      <Test>Education</Test>
    </SlideLayoutWrapper>
  );
};

export default Education;

export const Test = styled.div`
  background-color: blue;
  width: 100%;
  height: 700px;
`;
