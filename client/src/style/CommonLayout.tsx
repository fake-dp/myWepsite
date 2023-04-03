import styled from "styled-components";

interface IProps {
  props: string | number;
}

export const SlideLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundWrapper = styled.div<IProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => props.props};
`;

export const PaddingWrapper = styled.div`
  padding: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-width: 800px;
  @media (max-width: 1024px) {
    min-width: 600px;
  }
  @media (max-width: 768px) {
    min-width: 400px;
  }
  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #d1d5db;
  padding-left: 7px;
  border-left: 5px solid #d1d5db;
  line-height: 1;
  animation: blink 0.8s infinite;
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
