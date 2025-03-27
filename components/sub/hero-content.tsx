"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Tech Enthusiast Portfolio
          </h1>
        </motion.div>
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        />
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m <span className="text-purple-500 font-bold">Hanumavathi Pothuganti</span>, currently pusruing my graduation in Malla Reddy University.
          I am doing my Bachelors of Technologies in Computer Science Engineering Department.
          Apart from coding, some other activities that I love to do are exploring new technologies, reading books, and playing video games. These hobbies help me stay creative and motivated in my journey as a tech enthusiast.
        </motion.p>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[20px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
        "Strive to build things that make a difference!"
        </motion.p>
        <motion.div
  variants={slideInFromLeft(1.0)}
  className="flex justify-center mt-4"
>
  <a
    href="/Resume.pdf" // Replace with the actual path to your resume file
    download="Hanumavathi_Pothuganti_Resume.pdf"
    className="bg-purple-500 text-white font-medium py-2 px-4 rounded-full hover:bg-purple-600 transition"
  >
    Download Resume
  </a>
</motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
