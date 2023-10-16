import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import dummyImg from "@/public/dummy_01.png";
import dataHarvest from "@/public/screenshot-data-harvest.png"

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
    title: "Prefeitura Municipal de Mandaguari",
    location: "Mandaguari, PR",
    description:
      "City hall role in the education sector, focused on optimizing the student experience for excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2018 - Dec 2019",
  },
  {
    title: "Romagnole",
    location: "Mandaguari, PR",
    description:
      "Transforming an electrical transformer manufacturing industry, led system refactoring, and integrated new features for operational excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - Mar 2020",
  },
  {
    title: "Nova Inteligência",
    location: "Maringa, PR",
    description: `Developed and enhanced e-commerce platforms for major clients at a prominent marketing agency, implementing crucial features for improved performance and user experience.`,
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Feb 2021",
  },
  {
    title: "Microverse",
    location: "Remote",
    description: `As a code reviewer, handled diverse tech stacks and mentored students at a tech-focused organization, ensuring code quality and aiding learners.`,
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021 - Feb 2022",
  },
  {
    title: "Plathanus Tech",
    location: "Remote",
    description:
      "Outsourced developer at a client-focused company, pivotal in refactoring and integrating crucial features for enhanced functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 - Feb 2023",
  },
  {
    title: "Easy B2B",
    location: "Remote",
    description:
      "Part of the B2B marketplace team, focused on enhancing client experience through various improvements at a dynamic company.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Mar 2023",
  },
  {
    title: "BairesDev",
    location: "Remote",
    description:
      "Dedicated to client-centric development, prioritizing excellence and meeting client needs in a client-facing role at a company.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum",
    tags: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    imageUrl: dummyImg,
  },
  {
    title: "Data Harvest",
    description: `This Ruby web scraping project is designed to extract data from the website "scrapeme.live." It leverages popular Ruby gems, including HTTParty, Nokogiri, Parallel, and RSpec, to efficiently retrieve and parse information from the target website.`,
    tags: [
      "Ruby",
      "Nokogiri",
      "Parallel",
      "RSpec",
    ],
    imageUrl: dataHarvest,
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum",
    tags: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    imageUrl: dummyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ruby on Rails",
  "Ruby",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
] as const;
