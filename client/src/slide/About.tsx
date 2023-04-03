import styled from "styled-components";
import * as S from "../style/CommonLayout";

const About = () => {
  const MyInfo = [
    {
      name: "이장희",
      email: "babybye777@gmail.com",
      phone: "010-6812-3470",
      github: "https://github.com/fake-dp",
      location: "서울 광진구",
    },
  ];

  return (
    <S.SlideLayoutWrapper id="about">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>About Me!</S.Title>
          <div>
            {MyInfo.map((info, index) => {
              return (
                <div key={index}>
                  <p>👨‍💻 Name: {info.name}</p>
                  <p>📧 Email: {info.email}</p>
                  <p>📱 Phone: {info.phone}</p>
                  <p>
                    🐙 Github:{" "}
                    <a href={info.github} target="_blank">
                      {info.github}
                    </a>
                  </p>
                  <p>📍 Location: {info.location}</p>
                </div>
              );
            })}
          </div>
          <p>
            성장의 원동력은 성실과, 꾸준함이라고 생각합니다. <br />
            성실함과 꾸준함의 가치를 알기에 1일 1커밋 운동을 합니다. <br />
            어떤 일이든 겸손의 자세로 배움을 게을리하지 않고, <br />
            빠르게 변화하는 트렌드에 맞춰 발전하는 프론드 앤드 개발자가
            되겠습니다.
          </p>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default About;
