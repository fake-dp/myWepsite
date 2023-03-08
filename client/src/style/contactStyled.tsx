import styled from "styled-components";

export const ContactBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #006266;
  min-width: 1200px;
`;

export const ContactMyWrapper = styled.div`
  padding-left: 15rem;
  padding-top: 5rem;
`;

export const InfoBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  min-width: 800px;
  max-width: 1000px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 1.5rem;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
  :last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const IconSpan = styled.span`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  background-color: #1289a7;
  display: flex;
  align-items: center;
  border-radius: 50%;
  > svg {
    margin: 0 auto;
    font-size: 2rem;
    color: #fff;
  }
`;

export const InfoText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InfoLink = styled.a`
  font-size: 1rem;
  color: #868e96;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
`;

export const EmailFormWrapper = styled.div`
  height: 100%;
  padding-left: 15rem;
  padding-top: 5rem;
  /* background-color: #006266; */
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const TitleText = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  min-width: 500px;
`;

export const EmailSubtext = styled.p`
  font-size: 0.8rem;
  color: rgb(163, 163, 163);
  margin-bottom: 3em;
  margin-top: 1rem;
  font-style: italic;
  width: 100%;
  min-width: 300px;
`;

export const ContactInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  min-width: 800px;
  max-width: 1000px;
`;

export const ContactWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const LabelText = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5em;
`;

export const ContactInput = styled.input`
  height: 3em;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  padding: 0.5em;
  background-color: transparent;
  box-sizing: border-box;
  color: #fff;
  font-size: 1rem;
  &:focus {
    border-color: rgba(255, 255, 255, 1);
    outline: none;
  }
`;

export const ContactTextArea = styled.textarea`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  min-width: 800px;
  max-width: 1000px;
  padding: 0.5em;
  margin-top: 10px;
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  height: 20em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  font-size: 1rem;
  &:focus {
    border-color: rgba(255, 255, 255, 1);
    outline: none;
  }
`;

export const ContactSumbitBtn = styled.input`
  box-sizing: border-box;
  height: 3em;
  margin-bottom: 5rem;
  cursor: pointer;
  min-width: 800px;
  max-width: 1000px;
  border: 0;
  background-color: #009432;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5em;
  &:hover {
    background-color: #fff;
    color: #1b1464;
  }
`;
