"use client";

import React from "react";
import { Chrono } from "react-chrono";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem]"
    >
      <SectionHeading>My experience</SectionHeading>
      <Chrono
        noUniqueId
        focusActiveItemOnLoad
        items={experiencesData}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "rgb(0 0 0 / 0.7)",
          secondary: "#f3f4f6",
          cardBgColor: "#f3f4f6",
          titleColor: "black",
        }}
        fontSizes={{
          cardSubtitle: "0.9rem",
          title: "1rem",
        }}
      />
    </section>
  );
}
