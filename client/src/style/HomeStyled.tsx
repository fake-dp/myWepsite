import styled, { keyframes } from "styled-components";
import { SlideLayoutWrapper } from "./CommonLayout";
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
`;

export const HomeWrapper = styled(SlideLayoutWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://raw.githubusercontent.com/leejanghe/My_Website/main/my-website/public/img/intro.jpg");
  background-size: cover;
  background-position: center;
  filter: grayscale();
  div {
    text-align: center;
    h2 {
      font-size: 5rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      margin-bottom: 1rem;
      @media screen and (max-width: 1000px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 2.5rem;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      color: #d1d5db;
      letter-spacing: 0.15em;
      border-right: 0.15em solid orange;
      animation: ${typing} 2s steps(20, end), ${blink} 0.75s step-end infinite;
      @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }
  }
`;
