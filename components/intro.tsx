import React from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpeg";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={profilePic}
            alt="Tiago Rahal profile picture"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
