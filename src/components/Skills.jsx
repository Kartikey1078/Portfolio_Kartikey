import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import node from '../assets/nodejs.svg'
import dotnet from '../assets/dotnet.svg'
import sql from '../assets/sql.svg'
import mongodb from '../assets/mongodb.svg'
import git from '../assets/git.svg'
import bootstrap from '../assets/bootstrap.svg'
import Tailwind from '../assets/tailwind.svg'
const skills = [
  { name: 'HTML', logo: html },
  { name: 'CSS', logo: css },
  { name: 'JavaScript', logo: js },
  { name: 'React', logo: react },
  { name: 'BootStrap', logo: bootstrap },
  { name: 'Git', logo: git },
  { name: 'Tailwind', logo: Tailwind },
  { name: 'MongoDB', logo: mongodb },
  { name: 'Node.js', logo: node },
  { name: '.NET Core MVC', logo: dotnet },
  { name: 'SQL / Database', logo: sql },
  { name: 'Git', logo: git }

];

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="SKILLS"
      className="bg-gray-900 text-white py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center px-6 lg:px-20">
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
              variants={skillVariants}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <p className="text-lg font-semibold tracking-wide">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;