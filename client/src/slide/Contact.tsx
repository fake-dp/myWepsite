import EmailForm from "../components/EmailForm";
import * as S from "../style/CommonLayout";
import ContactInfo from "../components/ContactInfo";
const Contact = () => {
  return (
    <S.SlideLayoutWrapper id="contact">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Contact</S.Title>
          <ContactInfo />
          <EmailForm />
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Contact;
