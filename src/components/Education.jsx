import React from 'react'

const Education = () => {

    const education = [
        {
            level: "School",
            details: [
                "Lotus Excellence School",
                "Paddhari",
                "Percentile: 88.42",
            ],
        },
        {
            level: "Diploma",
            year:'2019 - 2022',
            details: [
                "Darshan Institute of Engineering & Technology for Diploma Studies",
                "Rajkot",
                "CGPA: 7.33",
            ],
        },
        {
            level: "B.Tech",
            year:'2022 - 2025',
            details: [
                "Marwadi University",
                "Rajkot",
                "CGPA: 7.66",
            ],
        },
    ];

    return (
        <div className='h-[100vh] pl-10 bg-[#3D4190] flex flex-col items-center'>
            <h1 className='head-txt text-5xl text-center text-white pt-10'>Education</h1>
            <div className="relative border-l-4 border-white mt-8">
                {education.map((edu, index) => (
                    <div key={index} className="mb-10 ml-12 text-white">
                        <div className="absolute -left-3 w-6 h-6 bg-white rounded-full border-4"></div>
                        <h2 className="text-3xl head-txt font-bold mb-2">{edu.level}   &nbsp; &nbsp; {[edu.year]}</h2>
                        <ul className="list-disc list-inside">
                            {edu.details.map((detail, i) => (
                                <li key={i} className="text-lg">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education