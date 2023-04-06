import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SlPaperPlane } from "react-icons/sl";
import * as S from "../style/ContactStyled";

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
    <S.EmailWrapper>
      <h4>📧 Send Email</h4>
      <p>메일을 보내주시면, 평일 기준 3일 이내에 답장 드릴게요!</p>
      <S.FormSubmit ref={form} onSubmit={sendEmail}>
        <S.InputWrapper>
          <S.BoxWrapper>
            <label>Name</label>
            <S.Input
              type="text"
              name="user_name"
              placeholder="write your name..."
            />
          </S.BoxWrapper>

          <S.BoxWrapper marginLeft={true}>
            <label>Email</label>
            <S.Input
              type="email"
              name="user_email"
              placeholder="write your email..."
            />
          </S.BoxWrapper>
        </S.InputWrapper>

        <S.TextAreaWrapper>
          <label>Message</label>
          <S.TextArea name="message" placeholder="Send a message..." />
          <button type="submit" value="Send">
            <SlPaperPlane />
          </button>
        </S.TextAreaWrapper>
      </S.FormSubmit>
      <S.CopyRightText>
        © Copyright 2023 fake-dp. All rights reserved
      </S.CopyRightText>
    </S.EmailWrapper>
  );
};

export default EmailForm;
