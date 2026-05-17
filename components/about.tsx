"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A <span className="font-medium">Computer Engineering graduate</span>{" "}
        from Sir Syed University of Engineering and Technology, with
        professional experience building scalable backend systems and modern web
        applications. My core stack includes{" "}
        <span className="font-medium">
          Node.js, Express.js, MongoDB, MySQL, and JavaScript
        </span>
        , with solid frontend skills in{" "}
        <span className="font-medium">HTML5, CSS3, Bootstrap, and Angular</span>
        . I have worked on diverse real-world projects including{" "}
        <span className="italic">
          payment integrations, RESTful APIs, authentication systems, and video
          streaming platforms
        </span>
        . I am always looking to learn new technologies and am currently seeking
        a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring
        new tech, taking on freelance challenges, or simply going out for a
        breath of fresh air.
      </p>
    </motion.section>
  );
}
