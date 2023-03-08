import { AiOutlineHome } from "react-icons/ai";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdWorkspacesOutline } from "react-icons/md";
import * as S from "../style/sidebarStyled";

function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.SidebarText to="/">
        <AiOutlineHome />
        Home
      </S.SidebarText>
      <S.SidebarText to="/about">
        <CgProfile />
        About
      </S.SidebarText>

      <S.SidebarText to="/projects">
        <GrProjects />
        Project
      </S.SidebarText>

      <S.SidebarText to="/experience">
        <MdWorkspacesOutline />
        Experience
      </S.SidebarText>

      <S.SidebarText to="/education">
        <MdOutlineCastForEducation />
        Education
      </S.SidebarText>

      <S.SidebarText to="/blog">
        <TbBrandBlogger />
        Blog
      </S.SidebarText>

      <S.SidebarText to="/contact">
        <RiContactsBook2Line />
        Contact
      </S.SidebarText>
    </S.SidebarContainer>
  );
}

export default Sidebar;
