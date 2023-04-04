import styled from "styled-components";

export const InfoWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  color: #d1d5db;
  padding: 30px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoContent = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #d1d5db;
  & > p {
    margin: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    & > a {
      color: #d1d5db;
      text-decoration: none;
      &:hover {
        color: rgba(32, 33, 35, 1);
      }
    }
  }
`;

export const AboutText = styled.div`
  color: #d1d5db;
  max-width: 800px;
  margin-top: 30px;
  > p {
    line-height: 2.3rem;
    font-size: 1.1rem;
    font-weight: 300;
  }
  > h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
