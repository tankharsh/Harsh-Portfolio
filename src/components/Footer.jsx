import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import conf from "../conf/conf";
import { ToastContainer, toast } from 'react-toastify';
import game from '../assets/game.png'
import tour from '../assets/tour.png'
import brain from '../assets/brain.png'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                message,
            };

            await emailjs.send(
                conf.serviceID,
                conf.templateID,
                templateParams,
                conf.publicKey
            );

            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setError("");
        } catch (err) {
            console.error("Failed to send message:", err);
            setError("Failed to send message. Please try again later.");
        }
    };

    return (
        <footer className="bg-[#3D4190] w-full text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
                {/* Left Side: Contact Form */}
                <div className="w-full max-w-md space-x-6 ">
                    <h2 className="text-2xl pt-2 font-bold mb-4 ps-10 text-center md:text-left">
                        Contact Me
                    </h2>
                    <form className="space-y-4 pr-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg w-full"
                        >
                            Send
                        </button>
                    </form>
                    {isSubmitted && toast("Thank you for your message. I'll be in touch soon!")}
                    {error && toast({ error })}
                </div>
                <ToastContainer />

                <div className="flex flex-col items-center mt-8 md:mt-0">
                    <p className="text-lg font-medium mb-2">Mail Me: <a href="mailto:tankharsh1111@gmail.com" className="underline text-purple-400">tankharsh1111@gmail.com</a></p>
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg"
                        onClick={() => window.open('/path-to-cv.pdf', '_blank')}
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
                <div className="container mx-auto text-center mt-5 font-bold bg-[#8E93F1] py-3 text-sm">
                    © 2025 Harsh's Portfolio.
                </div>
            </div>
        </footer>

    );
};

export default Footer;
