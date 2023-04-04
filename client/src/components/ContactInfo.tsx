import { SiVelog } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import * as S from "../style/ContactStyled";

const ContactInfo = () => {
  const contackInfo = [
    {
      icon: <AiOutlineMail />,
      social: "email",
      link: "babybye777@gmail.com",
      href: "mailto:babybye777@gmail.com",
    },
    {
      icon: <BsGithub />,
      social: "github",
      link: "fake-dp",
      href: "https://github.com/fake-dp",
    },

    {
      icon: <SiVelog />,
      social: "blog",
      link: "velog @leecodeh",
      href: "https://velog.io/@leecodeh",
    },

    {
      icon: <RiKakaoTalkFill />,
      social: "kakao",
      link: "kakao open chat",
      href: "https://open.kakao.com/o/scu5eL8e",
    },
  ];

  return (
    <S.ContactInfoWrapper>
      <S.Saygoodbye>좋은 인연이 되어 함께 성장하고 싶습니다.</S.Saygoodbye>
      <h3>Contact me!</h3>
      <S.ContactInfoItem>
        {contackInfo.map((info, index) => {
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
