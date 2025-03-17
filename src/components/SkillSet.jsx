import React from 'react';
import styled from 'styled-components';
import html from '../assets/html.png';
import css from '../assets/css.png';
import php from '../assets/php.png';
import JS from '../assets/JS.png';
import JSX from '../assets/JSX.png';
import bts from '../assets/bts.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png';

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

const SkillSet = () => {
  return (
    <div id='skills' className="w-full bg-[#12132A] py-12">
      <style>
        {`
          @keyframes fadeInTitle {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-title {
            animation: fadeInTitle 1s forwards;
            position: relative;
            display: inline-block;
          }

          .animate-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            width: 0;
            height: 4px;
            background: linear-gradient(90deg, #af40ff, #5b42f3 60%, #00ddeb);
            transform: translateX(-50%);
            animation: expandLine 1.5s forwards 0.5s;
          }

          @keyframes expandLine {
            0% {
              width: 0;
            }
            100% {
              width: 150px;
            }
          }
        `}
      </style>
      <h1 className="head-txt text-center text-4xl md:text-5xl font-bold text-white mb-12">Projects</h1>
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 px-4 sm:px-12 md:px-16">
        {skills.map((skill, index) => (
          <StyledCard key={index} delay={index * 0.1} animationOffset={index % 4}>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <div className="wave-container">
                    <div className="wave" />
                    <div className="wave" />
                    <div className="wave" />
                  </div>
                  <div className="icon-container">
                    <img src={skill.img} alt={skill.name} className="skill-icon" />
                  </div>
                  <div className="text-container">
                    <h2 className="skill-name">{skill.name}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card-glow" /> */}
            {/* <div className="card-shine" /> */}
            <div className="border-animation" />
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

const StyledCard = styled.div`
  position: relative;
  height: 180px;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s forwards, float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s, ${props => props.delay + 0.6}s;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: rgba(27, 28, 58, 0.9);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  .card-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle at center, rgba(175, 64, 255, 0.6) 0%, rgba(91, 66, 243, 0) 70%);
    opacity: 0;
    border-radius: 18px;
    animation: glowPulse 4s infinite ease-in-out;
    animation-delay: ${props => props.delay + 2}s;
    z-index: 1;
    pointer-events: none;
  }

  .card-shine {
    position: absolute;
    top: -180px;
    left: -40px;
    width: 100px;
    height: 400px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: shine 8s infinite linear;
    animation-delay: ${props => props.delay + 1}s;
    z-index: 2;
    pointer-events: none;
  }

  .border-animation {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 18px;
    background: linear-gradient(45deg, #af40ff, #5b42f3, #00ddeb, #af40ff) border-box;
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
    animation: borderAnimation 6s infinite linear;
    animation-delay: ${props => props.delay + 1.5}s;
    z-index: 3;
    pointer-events: none;
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 4;
    padding: 20px;
  }

  .wave-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 300px;
    height: 300px;
    opacity: 0.1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    background: linear-gradient(90deg, #af40ff, #5b42f3 60%, #00ddeb);
    border-radius: 47%;
    animation: wave 8s infinite linear;
  }

  .wave:nth-child(2) {
    animation-duration: 10s;
    animation-delay: -2s;
    opacity: 0.08;
    border-radius: 42%;
  }
  .wave:nth-child(3) {
    animation-duration: 12s;
    animation-delay: -4s;
    opacity: 0.06;
    border-radius: 40%;
  }

  .icon-container {
    position: relative;
    z-index: 10;
    transform: translateY(-8px);
  }

  .skill-icon {
    width: 70px;
    height: 70px;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
    animation: iconFloat 5s infinite ease-in-out;
    animation-delay: ${props => props.delay + 1.5}s;
  }

  .text-container {
    position: relative;
    z-index: 10;
    margin-top: 15px;
  }

  .skill-name {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    animation: colorShift 8s infinite alternate;
    animation-delay: ${props => props.animationOffset}s;
    letter-spacing: 0.5px;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes shine {
    0% {
      left: -150px;
    }
    100% {
      left: 150%;
    }
  }

  @keyframes borderAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes iconFloat {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-5px) rotate(3deg);
    }
    50% {
      transform: translateY(0) rotate(0deg);
    }
    75% {
      transform: translateY(5px) rotate(-3deg);
    }
    100% {
      transform: translateY(0) rotate(0deg);
    }
  }

  @keyframes colorShift {
    0% {
      color: #ffffff;
    }
    33% {
      color: #e4d0ff;
    }
    66% {
      color: #d0f5ff;
    }
    100% {
      color: #ffffff;
    }
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default SkillSet;