import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  background-color: #222f3e;
  position: fixed;
  z-index: 1;
  @media screen and (max-width: 800px) {
    width: 100px;
  }
`;

export const SidebarText = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  display: flex;
  padding: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
  color: #fff;

  > p {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  &:hover {
    background-color: #ddd;
    color: #000;
  }
  > svg {
    margin-right: 15px;
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
`;
