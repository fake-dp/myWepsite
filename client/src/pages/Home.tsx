import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <MyNameText>LEE JANG HE</MyNameText>

      <AutoText></AutoText>
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
