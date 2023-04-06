import styled from "styled-components";
import * as S from "../style/CommonLayout";
import { SkillsInfo, OtherSkills } from "../infoData/InfoMyData";
import * as A from "../style/SkillsStyled";

const Skills = () => {
  return (
    <S.SlideLayoutWrapper id="skills">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Skills</S.Title>
          {SkillsInfo.map((info) => (
            <A.SkillsText key={info.id}>
              <h4>{info.title}</h4>
              {info.description.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </A.SkillsText>
          ))}
          {OtherSkills.map((info) => (
            <A.SkillsText key={info.id}>
              <h4>{info.title}</h4>
              {info.description.map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </A.SkillsText>
          ))}
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Skills;
