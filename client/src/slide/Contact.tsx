import EmailForm from "../components/EmailForm";
import styled from "styled-components";
import * as S from "../style/CommonLayout";
const Contact = () => {
  return (
    <S.SlideLayoutWrapper id="contact">
      <S.BackgroundWrapper props={"#444654"}>
        <S.PaddingWrapper>
          <S.Title>Contact</S.Title>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Contact;
