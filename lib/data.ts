import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import dummyImg from "@/public/dummy_01.png";
import dataHarvest from "@/public/screenshot-data-harvest.png"
import paymentMethods from "@/public/payment-methods.jpeg"

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
    description:"Worked on implementing features and maintaining an online library project for public school students, enhancing the student experience in a city hall education sector role.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2018 - Dec 2019",
  },
  {
    title: "Romagnole",
    location: "Mandaguari, PR",
    description:"Maintaining and developing new features for the internal system of an electrical transformer manufacturing industry, ensuring operational excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - Mar 2020",
  },
  {
    title: "Nova Inteligência",
    location: "Maringa, PR",
    description: `Implemented new features and maintained numerous e-commerce platforms for major clients, directly interacting with the clients at a prominent marketing agency.`,
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
    date: "Jul 2023 - Oct 2023",
  },
  {
    title: "Interativa",
    location: "Remote",
    description:
      "Focused on managing heavy API-based projects, emphasizing robust feature implementations and addressing complex technical requirements in a development role within an organization.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Mar 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Payment Methods",
    description: "The purpose of this project is to provide functionality for managing boletos (payment slips) on the platform using the Kobana API.",
    tags: [
      "Ruby",
      "Ruby on Rails",
      "API",
      "Tailwind",
    ],
    imageUrl: paymentMethods,
  },
  {
    title: "Data Harvest",
    description: `This Ruby web scraping project is designed to extract data from the website "scrapeme.live."`,
    tags: [
      "Ruby",
      "Nokogiri",
      "Parallel",
      "RSpec",
    ],
    imageUrl: dataHarvest,
  },
  // {
  //   title: "Lorem Ipsum",
  //   description: "Lorem Ipsum",
  //   tags: [
  //     "Lorem Ipsum",
  //     "Lorem Ipsum",
  //     "Lorem Ipsum",
  //     "Lorem Ipsum",
  //     "Lorem Ipsum",
  //   ],
  //   imageUrl: dummyImg,
  // },
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
