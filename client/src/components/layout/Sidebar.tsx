import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/about">Page A</Link>
      <Link to="/projects">Page B</Link>
      <Link to="/contact">Page C</Link>
    </SidebarContainer>
  );
}

export default Sidebar;
