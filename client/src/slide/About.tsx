import styled from "styled-components";
import * as S from "../style/CommonLayout";
import * as A from "../style/AboutStyled";
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
          <A.InfoWrapper>
            {MyInfo.map((info, index) => {
              return (
                <A.InfoContent key={index}>
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
                </A.InfoContent>
              );
            })}
          </A.InfoWrapper>
          <A.AboutText>
            <h2>[ React 기반의 2년 차 프론트엔드 개발자 이장희 입니다. ]</h2>
            <p>
              기억보다는 기록을 중요시하며 꾸준함과 성실한 개발자가 되기 위해
              노력합니다. <br />
              어떤 일이든 겸손의 자세로 배움을 게을리하지 않고, 빠르게 변화하는
              트렌드에 맞춰 <br />
              발전하는 프론트엔드 개발자가 되겠습니다.
            </p>
          </A.AboutText>
          <A.AboutText>
            <h2>[ 저는 이런것을 좋아합니다. ]</h2>
            <p>- 성실함과 꾸준함의 가치를 알기에 1일 1커밋 운동을 합니다.</p>
            <p>- 작은 UI라도 만들어보고 고민하는 것을 좋아합니다. </p>
            <p>
              - 새로운 기술에 대한 관심이 많아 학습하고 적용해보는 것을
              좋아합니다.
            </p>
          </A.AboutText>
          <A.AboutText>
            <h2>[ 저는 이런 경험을 하였습니다. ]</h2>
            <p>- 웹 서비스의 프론트엔드 설계 및 개발 경험</p>
            <p>- 사용자 인터렉션을 고려한 다양한 UI 구현 경험 </p>
            <p>- 팀을 구성하여 프로젝트 진행 경험</p>
            <p>- 기획 단계부터 팀원들과 협업 활동 경험</p>
          </A.AboutText>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default About;
