import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A fully functional e-commerce platform with payment integration.',
    image: 'https://source.unsplash.com/600x400/?ecommerce,website',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing skills, projects, and achievements.',
    image: 'https://source.unsplash.com/600x400/?portfolio,website',
    link: '#'
  },
  {
    title: 'Bike Club Management System',
    description: 'A MERN-powered platform for managing a biker club and payments.',
    image: 'https://source.unsplash.com/600x400/?motorcycle,club',
    link: '#'
  },
  {
    title: 'Dashboard with Analytics',
    description: 'A dashboard with interactive charts and analytics using Chart.js.',
    image: 'https://source.unsplash.com/600x400/?dashboard,analytics',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="PROJECTS" className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://source.unsplash.com/1920x1080/?technology)' }}
      ></div>

      <div className="relative container mx-auto text-center px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold mb-10 text-yellow-400">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 15 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center sm:opacity-0 sm:hover:opacity-100 transition-opacity hidden sm:flex">
                  <a
                    href={project.link}
                    className="text-yellow-400 font-bold text-lg px-4 py-2 border border-yellow-400 hover:bg-yellow-400 hover:text-black rounded"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="block mt-4 px-4 py-2 text-center bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition sm:hidden"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;