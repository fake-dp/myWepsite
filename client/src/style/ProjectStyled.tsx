import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  margin-top: 3.5rem;
  margin-bottom: 3rem;
  width: 100%;
  min-height: 430px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 100%;
  }
`;

export const ProjectImgs = styled.img`
  width: 250px;
  margin-right: 20px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #d1d5db;
  padding: 1rem;
  max-width: 460px;
  > h4 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > span {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 300;
  }
  > p {
    max-width: 460px;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }
  > ul {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  > ul > li {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  > p {
    font-size: 1rem;
    font-weight: 300;
  }
  > a {
    margin-left: 8px;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #d1d5db;
    text-decoration: none;
    &:hover {
      color: rgba(32, 33, 35, 1);
    }
  }
`;
