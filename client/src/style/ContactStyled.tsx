import styled from "styled-components";

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  color: #d1d5db;
  > h3 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 4rem;
    font-weight: 700;
  }
`;

export const Saygoodbye = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5rem;
  color: #444654;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const ContactInfoBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  > span {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  > p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ContactLinkWrapper = styled.div`
  margin-top: 2rem;
  padding: 20px;
  background-color: #ffffff0d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  > a {
    font-size: 0.91rem;
    font-weight: 400;
    color: #d1d5db;
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(32, 33, 35, 1);
  }
`;
