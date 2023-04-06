import styled from "styled-components";
import * as S from "../style/CommonLayout";

interface ISkillsInfo {
  id: number;
  title: string;
  description: string[];
}

interface IOtherSkills {
  id: number;
  title: string;
  description: string[];
}

const Skills = () => {
  const SkillsInfo: ISkillsInfo[] = [
    {
      id: 1,
      title: "Front-end",

      description: [
        "React, Redux, Redux-saga, Redux-thunk, Context API, Styled-components, Material-UI, Ant-Design, Bootstrap, HTML, CSS, Javascript, Typescript",
      ],
    },
    {
      id: 2,
      title: "Back-end",

      description: [
        "Node.js, Express, MongoDB, MySQL, Sequelize, Mongoose, GraphQL, Apollo, RESTful API",
      ],
    },
    {
      id: 3,
      title: "DevOps",

      description: [
        "AWS EC2, S3, Route53, CloudFront, CodeDeploy, CodePipeline, Docker, Jenkins, Git, Github, Gitlab, Jira, Confluence, Slack, Trello",
      ],
    },
  ];

  const OtherSkills: IOtherSkills[] = [
    {
      id: 1,
      title: "Other Skills",

      description: [
        "Agile, Scrum, Kanban, TDD, BDD, OOP, MVC, MVT, MVP, MVVM, RESTful API, Jira, Confluence, Slack, Trello",
      ],
    },
  ];

  return (
    <S.SlideLayoutWrapper id="skills">
      <S.BackgroundWrapper props={"#343541"}>
        <S.PaddingWrapper>
          <S.Title>Skills</S.Title>
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Skills;
