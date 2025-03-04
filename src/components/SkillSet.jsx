import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import php from '../assets/php.png';
import JS from '../assets/JS.png';
import JSX from '../assets/JSX.png';
import bts from '../assets/bts.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png';

const SkillSet = () => {
  const skills = [
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
    { img: bts, name: 'Bootstrap' },
    { img: JS, name: 'JavaScript' },
    { img: tailwind, name: 'Tailwind CSS' },
    { img: JSX, name: 'React Js' },
    { img: php, name: 'PHP' },
    { img: mysql, name: 'MySQL' },
  ];

  return (
    <div id='skills' className="w-full bg-[#12132A] py-10">
      <h1 className="head-txt text-center text-white text-3xl sm:text-4xl md:text-5xl mb-10">
        Skill Set
      </h1>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 mx-auto mt-6"
            />
            <div className="text-center mt-4 mb-6">
              <h2 className="text-xl text-white font-semibold">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
