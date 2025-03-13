import React from "react";
import { motion } from "framer-motion";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import node from "../assets/nodejs.svg";
import dotnet from "../assets/dotnet.svg";
import sql from "../assets/sql.svg";
import mongodb from "../assets/mongodb.svg";
import git from "../assets/git.svg";
import bootstrap from "../assets/bootstrap.svg";
import Tailwind from "../assets/tailwind.svg";

const skills = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "BootStrap", logo: bootstrap },
  { name: "Git", logo: git },
  { name: "Tailwind", logo: Tailwind },
  { name: "MongoDB", logo: mongodb },
  { name: "Node.js", logo: node },
  { name: ".NET Core MVC", logo: dotnet },
  { name: "SQL / Database", logo: sql },
];

function Skills() {
  return (
    <motion.section
      id="SKILLS"
      className="bg-gray-900 text-white py-16 overflow-hidden relative"
    >
      <div className="container mx-auto text-center px-4 sm:px-8 w-full max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-8 text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Infinite Scrolling Wrapper */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <motion.div
            className="absolute w-full flex flex-col gap-6"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
           
            {[...Array(2)].map((_, i) => (
              <div key={i} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-10">
                {skills.map((skill, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex flex-col items-center space-y-2 sm:space-y-3 hover:scale-105 transition-transform duration-300"
                  >
                    <motion.img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                    <p className="text-lg sm:text-xl font-semibold tracking-wide">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
