import React from 'react'
import ME from '../assets/ME.png'

const Home = () => {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-center items-center text-white bg-cover h-full bg-[#3D4190]" >
                <div className="w-full md:w-1/2 text-center md:text-center">
                    <p className="head-txt text-4xl md:text-8xl">
                        <span>Hii, I'm</span>
                        <br />
                        <span>Harshad Tank</span>
                    </p>
                    <p className="head-txt text-2xl md:text-3xl mt-4">
                        Web
                        <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                            Developer
                            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                    </p>

                    <button
                        className="bg-[#12132A] hover:bg-purple-600 text-white font-medium py-2 mt-10 px-6 rounded-lg"
                        onClick={() => window.open('/path-to-cv.pdf', '_blank')}
                    >
                        Download CV
                    </button>
                </div>
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <img src={ME} alt="Harshad Tank" className="w-full h-auto" />
                </div>
            </div>



        </>
    )
}

export default Home