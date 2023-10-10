"use client";

import React from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="Tiago Rahal portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
      className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tiago.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React</span> and <span className="underline">Ruby on Rails</span>.
      </motion.h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg">
        <Link
        href="#contact"
        className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">
          Contact me here
          <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">
          Download CV
          <HiDownload />
        </a>
        <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem]">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem]">
          <FaGithubSquare/>
        </a>
      </div>
    </section>
  );
}
