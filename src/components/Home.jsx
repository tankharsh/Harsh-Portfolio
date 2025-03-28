import React from 'react'
import ME from '../assets/ME.png'
import conf from '../conf/conf';
import { motion } from 'motion/react';
import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-center items-center text-white bg-cover h-full bg-[#3D4190]" >
                <div className="w-full md:w-1/2 text-center md:text-center">
                    <p
                        className="head-txt text-4xl md:text-8xl">
                        <span>Hii, I'm</span>
                        <br />
                        <span><SplitText  /></span>
                    </p>
                    <motion.p
                        animate={{
                            x: [-50, 50, 50, 50, -50]
                        }}
                        transition={{
                            duration: 5,
                            delay: 0.5,
                            ease: 'anticipate',
                            repeat: Infinity
                        }}
                        className="head-txt text-2xl md:text-3xl mt-4">
                        Web
                        <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                            Developer
                            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                    </motion.p>

                    <button
                        className="bg-[#12132A] hover:bg-purple-600 text-white font-medium py-2 mt-10 px-6 rounded-lg hover:pointer hover:scale-95 transition-all duration-300"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = `/files/Harshad_Tank.pdf`;
                            link.download = 'Harshad_Tank_CV.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
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

const SplitText = ({
    text = "Harshad Tank",
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const words = text.split(' ').map(word => word.split(''));
    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                    if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline ${className}`}
            style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => {
                        const index = words
                            .slice(0, wordIndex)
                            .reduce((acc, w) => acc + w.length, 0) + letterIndex;

                        return (
                            <animated.span
                                key={index}
                                style={springs[index]}
                                className="inline-block transform transition-opacity will-change-transform"
                            >
                                {letter}
                            </animated.span>
                        );
                    })}
                    <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
};

export default Home