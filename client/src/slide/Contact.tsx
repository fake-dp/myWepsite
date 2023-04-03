import React from "react";
import EmailForm from "../components/EmailForm";
import styled from "styled-components";
import { SlideLayoutWrapper } from "../style/CommonLayout";
const Contact = () => {
  return (
    <SlideLayoutWrapper id="contact">
      <Test>
        <EmailForm />
      </Test>
    </SlideLayoutWrapper>
  );
};

export default Contact;

export const Test = styled.div`
  background-color: red;
  width: 100%;
  height: 1000px;
`;
