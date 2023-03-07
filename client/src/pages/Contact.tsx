import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef(null);
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
