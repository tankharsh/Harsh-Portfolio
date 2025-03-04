import React from 'react';
import { GiCircleClaws } from 'react-icons/gi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const Proj = [
    {
      head: 'Matrimony Web App',
      disc: 'A web-based application allowing users to perform CRUD operations efficiently.',
      Tech: 'ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB',
      github: 'https://github.com/tankharsh/Matrimony',
    },
    {
      head: 'Workports',
      disc: 'A web-based application allowing users to perform CRUD operations efficiently.',
      Tech: 'ReactJs, Tailwind CSS, NodeJs, ExpressJs, MongoDB',
      github: 'https://github.com/tankharsh/Workport',
      working: true,
    },
    {
      head: 'Real Estate',
      disc: 'This Project is web based application that is allows to upload your property and manage it',
      Tech: 'HTML, CSS, JavaScript, PHP',
      github: '',
    },
  ];

  return (
    <div
    id='project'
    class=" h-auto flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">

    <div className="py-12 md:px-20 lg:px-32">
      <h1 className="head-txt text-center text-4xl md:text-5xl font-bold text-white mb-12">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Proj.map((project, indx) => (
          <div 
            key={indx} 
            className="bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="head-txt text-2xl font-semibold flex items-center gap-3 text-[#12132A]">
              <GiCircleClaws className="text-[#6D28D9] text-3xl" />
              {project.head}
              {project.working && <span className="font-sans ml-2 px-3 py-1 bg-green-500 text-white text-xs rounded-full">Working</span>}
            </h2>
            <p className="text-gray-600 mt-3 text-lg">{project.disc}</p>
            <p className="mt-4 text-sm text-gray-700 font-medium">Technology: <span className="text-[#6D28D9]">{project.Tech}</span></p>
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
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
