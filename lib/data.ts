import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2022;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/34062262?v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Muhammad AbdurRafay Saqlain",
  title: "JavaScript FullStack Developer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  resumeLink: `/resume.pdf`,
  linkedInLink: "https://pk.linkedin.com/in/muhammad-abdur-rafay-saqlain-336215202",
  githubLink: "https://github.com/abdurrafay-saqlain",
} as const;

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer – Interns Pakistan",
    location: "Karachi, PK",
    description:
      "Started my development journey as an intern, working on PSD designs and bug fixing.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2021 - Oct 2021",
  },
  {
    title: "Web Programmer – The Techrics",
    location: "Karachi, PK",
    description:
      "Worked on converting PSD designs to HTML and resolving frontend bugs across multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 - Nov 2022",
  },
  {
    title: "Web Programmer – BNR 360",
    location: "Karachi, PK",
    description:
      "Developed websites and built frontend architecture for client-facing web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - Apr 2023",
  },
  {
    title: "Application Programmer – Interack Solutions",
    location: "Karachi, PK",
    description:
      "Developed database architecture and wrote backend logic for various applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Programming Instructor – SSUET",
    location: "Karachi, PK",
    description:
      "Taught students HTML, CSS, JavaScript, Git, and web deployment using Vercel. Conducted hands-on sessions and mentored students on real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024 - Jan 2025",
  },
  {
    title: "Software Developer – Centric Tech Inc",
    location: "Karachi, PK",
    description:
      "Built and maintained backend APIs using Node.js and Express.js. Integrated MongoDB and MySQL, implemented JWT authentication, and worked within Agile/Scrum teams.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Jan 2026",
  },
  {
    title: "Software Developer – Al-Hamd Textiles",
    location: "Karachi, PK",
    description:
      "Resolved critical bugs, developed new features, facilitated Scrum meetings, and managed Git workflows during a fast-paced one-month sprint.",
    icon: React.createElement(FaReact),
    date: "Feb 2026 - Feb 2026",
  },
] as const;

export const projectsData = [
  {
    title: "CareerRails",
    description:
      "An AI-powered career matching platform that enables users to create intelligent profiles, record video pitches, and get matched with relevant job opportunities — going beyond traditional resumes.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "AI"],
    url: "https://careerails.ai",
  },
  {
    title: "GrowUp",
    description:
      "A fundraising mobile application with backend APIs featuring search, filter, and pagination. Integrated Stripe ACH payouts, Google OAuth authentication, and session management.",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe", "Google OAuth"],
    url: "https://play.google.com/store/apps/details?id=com.centrictech.grow_up_funds",
  },
  {
    title: "Yibi Market",
    description:
      "A mobile marketplace application with robust backend services, RESTful APIs, and database integration to support seamless product listing, browsing, and transactions.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
    url: "https://play.google.com/store/apps/details?id=com.centrictech.yibiMarket",
  },
  {
    title: "Medtrac",
    description:
      "A comprehensive mental health management system with secure role-based authorization, real-time data handling via Firebase, Stripe payment integration, and personalized care plan features.",
    tags: ["Node.js", "Firebase", "Stripe", "MongoDB", "Express.js"],
    url: "",
  },
  {
    title: "Channel NYC",
    description:
      "A video streaming platform built with Next.js and Node.js. Developed backend APIs with custom filtration and search functionalities integrated with the frontend for fast content discovery.",
    tags: ["Next.js", "Node.js", "Express.js", "REST API"],
    url: "http://channelnyc.com",
  },
  {
    title: "Khan Market",
    description:
      "An e-commerce platform featuring coupon management APIs and a complete Stripe payment flow for smooth and secure checkout experiences.",
    tags: ["Node.js", "Express.js", "Stripe", "MongoDB"],
    url: "",
  },
  {
    title: "Freelance Platform (FYP)",
    description:
      "A full-featured freelance marketplace developed as a Final Year Project. Led a team handling backend/frontend development, API design, database management, and deployment.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "Git"],
    url: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Express", icon: TbBrandNodejs },
  { name: "Socket IO", icon: TbBrandSocketIo },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "...and more", icon: React.Fragment },
] as const;
