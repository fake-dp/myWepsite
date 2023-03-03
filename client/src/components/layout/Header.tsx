import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  /* height: 100px; */
  background-color: #192a56;
  padding: 30px;
  display: flex;

  font-weight: 600;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 0.5px;
  color: #fff;
`;

function Header() {
  return <HeaderWrapper>Test</HeaderWrapper>;
}

export default Header;
