import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdWorkspacesOutline } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { BsStack } from "react-icons/bs";
import * as S from "../style/SidebarStyled";

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const location = document.getElementById(sectionId)?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <S.SidebarWrapper>
      <S.SidebarContainer onClick={() => scrollToSection("home")}>
        <AiOutlineHome />
        <p>Home</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("about")}>
        <CgProfile />
        <p>About Me</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("skills")}>
        <BsStack />
        <p>Skills</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("experience")}>
        <MdWorkspacesOutline />
        <p>Experience</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("project")}>
        <VscProject />
        <p>Project</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("education")}>
        <MdOutlineCastForEducation />
        <p>Education</p>
      </S.SidebarContainer>
      <S.SidebarContainer onClick={() => scrollToSection("contact")}>
        <RiContactsBook2Line />
        <p>Contact</p>
      </S.SidebarContainer>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
