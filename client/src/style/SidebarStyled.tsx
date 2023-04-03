import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: rgba(32, 33, 35, 1);
  color: #fff;
  border-right: 1px solid #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15%;
  max-width: 320px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #343541;
  }
  & > svg {
    font-size: 1.5rem;
    margin-right: 10px;
  }
  & > p {
    font-size: 1rem;
    font-weight: 600;
  }
`;
