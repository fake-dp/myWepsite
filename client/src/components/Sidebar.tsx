import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdWorkspacesOutline } from "react-icons/md";
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  position: fixed;
`;

const SidebarText = styled(Link)`
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

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarText to="/">
        <AiOutlineHome />
        Home
      </SidebarText>
      <SidebarText to="/about">
        <CgProfile />
        About
      </SidebarText>

      <SidebarText to="/projects">
        <GrProjects />
        Project
      </SidebarText>

      <SidebarText to="/experience">
        <MdWorkspacesOutline />
        Experience
      </SidebarText>

      <SidebarText to="/education">
        <MdOutlineCastForEducation />
        Education
      </SidebarText>

      <SidebarText to="/blog">
        <TbBrandBlogger />
        Blog
      </SidebarText>

      <SidebarText to="/contact">
        <RiContactsBook2Line />
        Contact
      </SidebarText>
    </SidebarContainer>
  );
}

export default Sidebar;
