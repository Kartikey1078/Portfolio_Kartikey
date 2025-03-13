import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="ABOUT" className="relative bg-gray-900 text-white py-20 ">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-30 "
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,coding')" }}
      ></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center mt-[50px]">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-400">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-300 mb-4">
            I am a <span className="text-yellow-400 font-semibold">results-driven full-stack developer</span> with 1+ years of experience, specializing in 
            <span className="text-yellow-400 font-semibold"> JavaScript, Node.js, and React</span>. I have expertise in building scalable web applications and RESTful APIs. 
          </p>
          <p className="text-xl leading-relaxed text-gray-300 mb-4">
            With a strong foundation in the <span className="text-yellow-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React, and Node.js), I develop 
            high-performance applications that deliver seamless user experiences. My expertise extends to database management with <span className="text-yellow-400 font-semibold">SQL</span> 
            and backend development using <span className="text-yellow-400 font-semibold">.NET Core MVC</span>. I also integrate advanced JavaScript libraries like <span className="text-yellow-400 font-semibold">Chart.js</span> 
            for data visualization.
          </p>
          <p className="text-xl leading-relaxed text-gray-300">
            Passionate about clean code, performance optimization, and scalable architecture, I create efficient, maintainable, and cutting-edge web solutions.
          </p>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <a 
            href="#CONTACT" 
            className="inline-block text-lg bg-yellow-400 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
