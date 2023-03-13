import EmailForm from "../components/EmailForm";
import * as S from "../style/ContactStyled";
import { SiVelog } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
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
    <S.ContactBackground id="contact">
      <S.ContactMyWrapper>
        <S.TitleText>🤙 Contact me!</S.TitleText>
        <S.InfoBox>
          {contackInfo.map((info, index) => {
            return (
              <S.InfoWrapper key={index}>
                <div>
                  <S.IconSpan>{info.icon}</S.IconSpan>
                </div>
                <div>
                  <S.InfoText>{info.social}</S.InfoText>
                  <S.InfoLink href={info.href} target="_blank">
                    {info.link}
                  </S.InfoLink>
                </div>
              </S.InfoWrapper>
            );
          })}
        </S.InfoBox>
      </S.ContactMyWrapper>
      <EmailForm />
    </S.ContactBackground>
  );
};

export default Contact;
