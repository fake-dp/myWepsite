import React from "react";
import styled from "styled-components";
import { SlideLayoutWrapper } from "../style/CommonLayout";
const Experience = () => {
  return (
    <SlideLayoutWrapper id="experience">
      <Test>Experience</Test>
    </SlideLayoutWrapper>
  );
};

export default Experience;

export const Test = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  background-color: red;
  height: 500px;
`;
