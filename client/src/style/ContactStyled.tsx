import styled from "styled-components";
import { HTMLAttributes } from "react";
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
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  &:hover {
    color: #d1d5db;
    transition: all 0.3s ease-in-out;
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
  width: 130px;
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

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  marginLeft?: boolean;
}

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  color: #d1d5db;

  > h4 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
  }
  > p {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 300;
    margin-bottom: 4rem;
  }
`;

export const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const BoxWrapper = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.marginLeft ? "2rem" : "0")};
  > label {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 300;
  }
`;

export const TextAreaWrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  > label {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 300;
  }
  > button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: none;
    border: none;
    color: #d1d5db;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  overflow-y: hidden;
  resize: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  color: #d1d5db;
  background-color: rgba(64, 65, 79, 1);
  &:focus {
    outline: none;
  }
  &::placeholder {
    padding: 0.51rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  max-width: 400px;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  color: #d1d5db;
  background-color: rgba(64, 65, 79, 1);

  &:focus {
    outline: none;
  }
`;

export const CopyRightText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 2.5rem;
  font-weight: 300;
  color: #d1d5db;
  text-align: center;
`;
