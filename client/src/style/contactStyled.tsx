import styled from "styled-components";

export const ContactBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #006266;
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
  padding: 15rem;
  /* background-color: #006266; */
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const EmailText = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  min-width: 250px;
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
