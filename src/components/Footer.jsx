import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import conf from "../conf/conf";
import { ToastContainer, toast } from 'react-toastify';
import game from '../assets/game.png'
import tour from '../assets/tour.png'
import brain from '../assets/brain.png'

const Footer = () => {
    return (
        <footer className="bg-[#3D4190] w-full text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
                {/* Left Side: Contact Form */}

                <div className="flex flex-col items-center mt-8 ps-10 md:mt-0">
                    <p className="text-lg font-medium mb-2">Mail Me : <a href="mailto:tankharsh1111@gmail.com" className="underline text-purple-400">tankharsh1111@gmail.com</a></p>
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = `${conf.publicUrl}/Harsh-resume.pdf`;
                            link.download = 'Harsh-resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download CV
                    </button>
                </div>

                {/* Right Side: Hobbies Icons */}
                <div className="w-full max-w-md mt-5">
                    <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                        My Hobbies
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {/* Hobby Icons */}
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white">
                            <img src={game} alt="" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white ">
                            <img src={tour} alt="" className="w-16 h-16" />
                        </div>
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white ">
                            <img src={brain} alt="" className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container w-full text-center mt-5 font-bold bg-[#8E93F1] py-3 text-sm">
                    © 2025 Harsh's Portfolio.
                </div>
            </div>
        </footer>

    );
};

export default Footer;
