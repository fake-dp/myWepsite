import styled from "styled-components";

export const EdueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #192a56;
  background-color: #dcdde1;
  padding: 7rem 0 7rem 0;
`;

export const EdueContainer = styled.div`
  height: 100%;
  width: 800px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    /* padding-left: 350px; */
    width: 600px;
  }

  @media screen and (max-width: 800px) {
    padding-left: 250px;
  }
`;

export const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  margin-bottom: 50px;
  letter-spacing: 0.1rem;
`;

export const EducationWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 15px;
  transition: 0.3s;
  margin-top: 10px;
  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    padding: 30px;
    width: 550px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    width: 300px;
  }
`;

export const SubText = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
  letter-spacing: 0.1rem;
  @media (max-width: 1200px) {
    min-width: 300px;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    min-width: 100px;
  }
`;

export const DateText = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 30px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  > p {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  > ul {
    line-height: 1.3;
    margin-bottom: 10px;
    > li {
      font-size: 1.1rem;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 1200px) {
    > p {
      font-size: 1rem;
    }
    > ul {
      > li {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 800px) {
    > p {
      font-size: 0.9rem;
    }
    > ul {
      > li {
        font-size: 0.8rem;
      }
    }
  }
`;

export const StyledPtag = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 10px;
  > a {
    text-decoration: none;
    color: black;
    > li {
      margin-top: 10px;
      font-size: 0.9rem;
    }
  }
`;
