import React from "react";

export interface IAboutInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  location: string;
}

export interface IWorkExperience {
  link: string;
  position: string;
  linkName: string;
  mainDecsription: string;
  description: string[];
  stack: string;
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
