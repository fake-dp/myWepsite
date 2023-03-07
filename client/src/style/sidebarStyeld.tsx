import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  position: fixed;
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
  &:hover {
    background-color: #ddd;
  }
  > svg {
    margin-right: 15px;
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
`;
