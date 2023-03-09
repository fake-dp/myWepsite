import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-image: url("https://raw.githubusercontent.com/leejanghe/My_Website/main/my-website/public/img/intro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: grayscale();
`;

export const MyNameText = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const AutoText = styled.p`
  /* width: 550px; */
  overflow: hidden;
  font-size: 2.5rem;
  border-right: 0.15em solid #f79f1f;
  white-space: nowrap;
  margin: 0 auto;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(20, end), blink-caret 0.75s step-end infinite;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 550px;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #f79f1f;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
