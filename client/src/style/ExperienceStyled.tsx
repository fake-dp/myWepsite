import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #341f97;
`;

export const ExperienceContainer = styled.div`
  height: 100%;
  padding-top: 5rem;
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
  /* color: #fff; */
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 30px;
  /* border-bottom: 2px solid #fff; */

  > h3 {
    border-left: 5px solid #fff;
    padding-left: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 50px;
    /* margin-bottom: 40px; */
  }
  > p {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 1.3rem;
    &:nth-child(2) {
      font-size: 1rem;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  > ul {
    /* margin-left: 20px; */
    font-size: 1.2rem;
    font-weight: 600;
    > li {
      margin-bottom: 7px;
    }
  }
`;

export const LinkText = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  > a {
    margin-top: 20px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const LineSpan = styled.span`
  width: 700px;
  margin-top: 3rem;
  height: 2px;
  background-color: #fff;
`;

export const ProjectImg = styled.img`
  width: 800px;
  height: 100%;
  object-fit: cover;
  margin-bottom: 30px;
  filter: grayscale(0.9);
  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
