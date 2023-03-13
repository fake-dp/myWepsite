import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdWorkspacesOutline } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import * as S from "../style/SidebarStyled";
function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.SidebarText to="/">
        <AiOutlineHome />
        <p>Home</p>
      </S.SidebarText>
      <S.SidebarText to="/about">
        <CgProfile />
        <p>About Me</p>
      </S.SidebarText>

      <S.SidebarText to="/experience">
        <MdWorkspacesOutline />
        <p>Experience</p>
      </S.SidebarText>

      <S.SidebarText to="/projects">
        <VscProject />
        <p>Project</p>
      </S.SidebarText>

      <S.SidebarText to="/education">
        <MdOutlineCastForEducation />
        <p>Education</p>
      </S.SidebarText>

      <S.SidebarText to="/contact">
        <RiContactsBook2Line />
        <p>Contact</p>
      </S.SidebarText>
    </S.SidebarContainer>
  );
}

export default Sidebar;
