import styled from "styled-components";

interface IProps {
  props: string | number;
}

export const MainBodyLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  margin-left: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

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
