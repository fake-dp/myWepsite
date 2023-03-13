import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdWorkspacesOutline } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { BsStack } from "react-icons/bs";
import * as S from "../style/SidebarStyled";

function Sidebar() {
  const homeScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutScroll = () => {
    const location = document.getElementById("about")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const skillScroll = () => {
    const location = document.getElementById("skill")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const experienceScroll = () => {
    const location = document.getElementById("experience")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const projectScroll = () => {
    const location = document.getElementById("project")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const educationScroll = () => {
    const location = document.getElementById("education")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const contactScroll = () => {
    const location = document.getElementById("contact")?.offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <S.SidebarContainer>
      <S.SidebarText onClick={homeScroll}>
        <AiOutlineHome />
        <p>Home</p>
      </S.SidebarText>
      <S.SidebarText onClick={aboutScroll}>
        <CgProfile />
        <p>About Me</p>
      </S.SidebarText>

      <S.SidebarText onClick={skillScroll}>
        <BsStack />
        <p>Skills</p>
      </S.SidebarText>

      <S.SidebarText onClick={experienceScroll}>
        <MdWorkspacesOutline />
        <p>Experience</p>
      </S.SidebarText>

      <S.SidebarText onClick={projectScroll}>
        <VscProject />
        <p>Project</p>
      </S.SidebarText>

      <S.SidebarText onClick={educationScroll}>
        <MdOutlineCastForEducation />
        <p>Education</p>
      </S.SidebarText>

      <S.SidebarText onClick={contactScroll}>
        <RiContactsBook2Line />
        <p>Contact</p>
      </S.SidebarText>
    </S.SidebarContainer>
  );
}

export default Sidebar;
