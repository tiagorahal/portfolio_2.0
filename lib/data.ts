import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dummyImg from "@/public/dummy_01.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
    icon: React.createElement(LuGraduationCap),
    date: "Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
    icon: React.createElement(CgWorkAlt),
    date: "Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
    icon: React.createElement(FaReact),
    date: "Lorem Ipsum",
  },
] as const;

export const projectsData = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
    tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    imageUrl: dummyImg,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
      tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    imageUrl: dummyImg,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum",
      tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    imageUrl: dummyImg,
  },
] as const;

export const skillsData = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
] as const;