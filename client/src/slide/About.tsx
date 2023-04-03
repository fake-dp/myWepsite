import React from "react";
import styled from "styled-components";
import { SlideLayoutWrapper } from "../style/CommonLayout";
const About = () => {
  return (
    <SlideLayoutWrapper id="about">
      <Test>dfasdf</Test>
    </SlideLayoutWrapper>
  );
};

export default About;

export const Test = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  background-color: red;
  height: 800px;
`;
