import styled from "styled-components";
import Typical from "react-typical";
const Home = () => {
  return (
    <HomeWrapper>
      <MyNameText>LEE JANG HE</MyNameText>

      <AutoText>
        {"  "}
        <Typical
          loop={Infinity}
          wrapper="border"
          steps={[
            "안녕하세요! 코딩하기 좋은 날입니다~",
            2000,
            "저는 프론트 개발자를 꿈꾸는 이장희입니다.",
            3000,
            "제 웹사이트에 오신 것을 환영합니다 :)",
            5000,
          ]}
        />
      </AutoText>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-image: url("https://raw.githubusercontent.com/leejanghe/My_Website/main/my-website/public/img/intro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MyNameText = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

const AutoText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid #fff;
  > p {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: 2px solid #fff;
  }
`;
