import * as S from "../style/ContactStyled";
import { ContackInfo } from "../infoData/InfoMyData";

const ContactInfo = () => {
  return (
    <S.ContactInfoWrapper>
      <S.Saygoodbye>좋은 인연이 되어 함께 성장하고 싶습니다.</S.Saygoodbye>
      <h3>Contact me!</h3>
      <S.ContactInfoItem>
        {ContackInfo.map((info, index) => {
          return (
            <S.ContactInfoBox key={index}>
              <span>{info.icon}</span>
              <p>{info.social}</p>
              <S.ContactLinkWrapper>
                <a href={info.href} target="_blank">
                  {info.link}
                </a>
              </S.ContactLinkWrapper>
            </S.ContactInfoBox>
          );
        })}
      </S.ContactInfoItem>
    </S.ContactInfoWrapper>
  );
};

export default ContactInfo;
