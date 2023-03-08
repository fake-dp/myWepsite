import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "../style/contactStyled";
const EmailForm = () => {
  const form = React.useRef(null);
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      e.currentTarget.user_name.value === "" ||
      e.currentTarget.user_email.value === "" ||
      e.currentTarget.message.value === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    emailjs
      .sendForm(
        `${service_id}`,
        `${template_id}`,
        e.currentTarget,
        `${public_key}`
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일이 성공적으로 전송되었습니다.");
        },
        (error) => {
          console.log(error.text);
          alert("메일 전송에 실패했습니다.");
        }
      );
  };

  return (
    <S.EmailFormWrapper>
      <S.TitleText>📧 Send Email</S.TitleText>
      <S.EmailSubtext>
        메일을 보내주시면, 평일 기준 3일 이내에 답장 드릴게요!
      </S.EmailSubtext>
      <S.FormStyle ref={form} onSubmit={sendEmail}>
        <S.ContactInputWrapper>
          <S.ContactWrapper>
            <S.LabelText>Name</S.LabelText>
            <S.ContactInput type="text" name="user_name" />
          </S.ContactWrapper>

          <S.ContactWrapper>
            <S.LabelText>Email</S.LabelText>
            <S.ContactInput type="email" name="user_email" />
          </S.ContactWrapper>
        </S.ContactInputWrapper>

        <S.ContactWrapper>
          <S.LabelText>Message</S.LabelText>
          <S.ContactTextArea name="message" />
          <S.ContactSumbitBtn type="submit" value="Send" />
        </S.ContactWrapper>
      </S.FormStyle>
    </S.EmailFormWrapper>
  );
};

export default EmailForm;
