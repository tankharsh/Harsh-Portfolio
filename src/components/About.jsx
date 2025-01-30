import React from 'react'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import Sliceab from '../assets/Sliceab.png'

const About = () => {
    return (
        <>
            <div className="w-full h-auto bg-cover bg-fixed pb-20" style={{ backgroundImage: `url(${Sliceab})` }}>
                <div className="">
                    <h1 className="text-center head-txt text-3xl sm:text-4xl md:text-5xl text-white">
                        About ME
                    </h1>
                    <p className="px-4 sm:px-8 md:px-28 mt-5 text-center text-white text-base sm:text-lg md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat libero beatae provident
                        tenetur id deleniti dolor eveniet, ullam necessitatibus cum error blanditiis quae labore
                        consectetur fuga commodi. Cupiditate perspiciatis ea culpa, corporis quaerat ullam nesciunt
                        nihil, temporibus repudiandae repellendus iusto minus praesentium eos nisi sunt officia ipsa.
                        Ad animi natus, similique molestias amet voluptate, a iusto cum ea quidem nostrum? Rerum
                        mollitia nihil ipsum? Repellendus rerum inventore et, ipsa iusto labore non dolor veritatis
                        reiciendis earum, praesentium quo sunt officiis. Sequi nobis reprehenderit, nisi, officia modi
                        commodi ipsam odio eum illum ullam accusamus eligendi soluta libero deleniti, assumenda id
                        tempore veritatis eaque quia! Laudantium animi ipsam commodi at 
                    </p>
                </div>

                <div className="flex justify-center mt-10 gap-5">
                    {[
                        { src: insta, alt: 'Instagram', link: 'https://www.instagram.com' },
                        { src: facebook, alt: 'Facebook', link: 'https://www.facebook.com' },
                        { src: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com' },
                        { src: github, alt: 'GitHub', link: 'https://github.com/tankharsh' },
                    ].map(({ src, alt, link }) => (
                        <a
                            key={alt}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative px-3 py-3 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6">
                                <div className="space-y-2">
                                    <img src={src} alt={alt} className="w-10" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    )
}

export default About