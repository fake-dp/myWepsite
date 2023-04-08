import React from "react";

export interface IAboutInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  location: string;
}

export interface ISkillsInfo {
  id: number;
  title: string;
  description: string[];
}

export interface IOtherSkills {
  id: number;
  title: string;
  description: string[];
}

export interface IWorkExperience {
  link: string;
  position: string;
  linkName: string;
  mainDecsription: string;
  description: string[];
  stack: string;
}

export interface IProjectInfo {
  id: number;
  title: string;
  period: string;
  subdescription: string;
  stack: string;
  deploy: string;
  image: string;
  github: string;
  blog: string;
  description: string[];
}

export interface IEducationInfo {
  id: number;
  title: string;
  date: string;
  description: string[];
  link: string[];
}

export interface IContactInfo {
  icon: React.ReactNode;
  social: string;
  link: string;
  href: string;
}
