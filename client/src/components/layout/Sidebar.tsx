import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  padding: 20px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Project</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/education">Education</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </SidebarContainer>
  );
}

export default Sidebar;
