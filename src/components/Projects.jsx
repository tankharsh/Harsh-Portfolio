import React from 'react';
import { GiCircleClaws } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Projects = () => {
  const Proj = [
    {
      head: 'Matrimony Web App',
      disc: 'Developed a fully responsive matrimony web app where users can register,search for potential matches using advanced filters, and manage their profiles. It includes secure JWT  authentication and an admin panel for user management.',
      Tech: 'ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB',
      github: 'https://github.com/tankharsh/Matrimony',
    },
    {
      head: 'Workports',
      disc: ' A platform where users can book professional services, and service providers can accept or reject requests. Admins  manage users and services from a dashboard',
      Tech: 'ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB',
      github: 'https://github.com/tankharsh/Workport',
      working: true,
    },
    {
      head: 'Real Estate',
      disc: 'Developed a dynamic Admin Panel with full CRUD (Create, Read, Update, Delete) functionality using PHP, MySQL, and JavaScript.User can View That Property and contact that person',
      Tech: 'HTML, CSS, JavaScript, PHP',
      github: '',
    },
    {
      head: 'Erra Ceramic',
      disc: 'Developed a dynamic Admin Panel with full CRUD (Create, Read, Update, Delete) functionality using PHP, MySQL, and JavaScript.',
      Tech: 'HTML, CSS, JavaScript, PHP',
      github: '',
    },
  ];

  return (
    <div
    id='project'
    class="h-auto flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">

    <div className="py-12 md:px-20 lg:px-28 p-8 ">
      <h1 className="head-txt text-center text-4xl md:text-5xl font-bold text-white mb-12">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Proj.map((project, indx) => (
          <motion.div 
            key={indx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: indx * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="head-txt text-2xl font-semibold flex items-center gap-3 text-[#12132A]">
              <GiCircleClaws className="text-[#6D28D9] text-3xl" />
              {project.head}
              {project.working && <span className="font-sans ml-2 px-3 py-1 bg-green-500 text-white text-xs rounded-full">Working</span>}
            </h2>
            <p className="mt-4 text-sm text-gray-700 font-medium">Tech stack : <span className="text-[#6D28D9]">{project.Tech}</span></p>
            <li className="text-gray-600 mt-3 text-md">{project.disc}</li>
            <div className="mt-6">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#6D28D9] text-white font-medium px-5 py-2 rounded-lg transition hover:bg-[#4C1D95]"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Projects;
