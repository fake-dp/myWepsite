import styled from "styled-components";

export const DescriptionText = styled.div`
  margin-top: 3rem;
  > p {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #d1d5db;
  }
`;

export const ContentsWrapper = styled.div`
  color: #d1d5db;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #d1d5db;
  }

  span {
    font-size: 1rem;
    font-weight: 300;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    color: #d1d5db;
  }

  a {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #d1d5db;
    text-decoration: none;
    &:hover {
      color: rgba(32, 33, 35, 1);
    }
  }

  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #d1d5db;
  }

  li {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 1rem;
    color: #d1d5db;
  }
`;

export const SubTitleP = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
