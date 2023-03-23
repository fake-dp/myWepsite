import styled from "styled-components";
export const ProjectWrapper = styled.div`
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

export const ProjectContainer = styled.div`
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
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
`;
export const ProjectText = styled.p`
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
