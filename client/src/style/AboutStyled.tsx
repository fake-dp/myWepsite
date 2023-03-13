import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #192a56;
  background-color: #fff;
  padding: 7rem 0 7rem 0;
`;

export const AboutContainer = styled.div`
  height: 100%;
  width: 800px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    padding-left: 350px;
  }

  @media screen and (max-width: 800px) {
    padding-left: 450px;
  }
`;

export const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
`;
export const AboutText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-top: 1rem;
  line-height: 2.3rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #192a56;
  padding: 30px;
  background-color: #fbc531;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 300px;
  }

  > div {
    > p {
      margin: 30px;
      font-weight: 600;
      font-size: 1.5rem;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin: 10px;
      }
      > a {
        color: #192a56;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;
