"use client"

import React, {useEffect, useRef, useState} from "react";

import { motion, useInView} from 'framer-motion'


import {StaticImageData} from 'next/image'
import Image from 'next/image'

import { useGeneralContext } from "@/context/context";
import SlidingText from "../slidingText/slidingText";

// import functional from '../../media/gemeni-functional.jpg'




interface AspectProps {

    image:string,
    alt:string
    title:string,
    description:string,
    index:number,
    titleInView:boolean
    slideComplete:boolean
   
}

const AspectElement: React.FC<AspectProps> = ({ image, title, description, alt, index, titleInView, slideComplete }) => {
    const { isMobile } = useGeneralContext();

    const MotionImage = motion(Image);

    const componentRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already run

    const inView = useInView(componentRef, {
        margin: !isMobile ? '-120px' : '-120px',
        amount: !isMobile ? 0.5 : 0.2,
        once: true, // Trigger only once
    });

    const containerVariants = {
        initial: {
            opacity: 0,
            y: -90,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
        hover: {
            scale: 1.05, // Slightly scale up on hover
        },
        exit: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const imageVariants = (index: number) => {
        return {
            initial: {
                filter: 'brightness(1)',
            },
            animate: {
                filter: 'brightness(0.3)',
                transition: {
                    delay: 0.5,
                },
            },
        };
    };

    const [animationComplete, setAnimationComplete] = useState(false);

    // Ensure the animation only runs once
    const [shouldAnimate, setShouldAnimate ] = useState(true)

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true); // Set to true to prevent retriggering
        }
    }, [inView, hasAnimated]);

    useEffect(())

    return (
        <motion.div
            ref={componentRef}
            id={`infographic-container-${index}`}
            variants={containerVariants}
            initial="initial"
            animate={shouldAnimate ? 'animate' : 'initial'}
            whileHover="hover"
            whileTap="hover"
            exit="exit"
            onAnimationComplete={() => setHasAnimated(true)} // Mark animation as completed
            className={`mt-5 mb-[4rem] 
         overflow-x-hidden
            rounded-xl
        mr-auto ml-auto 
        h-[105vw] w-[95vw] border border-[#2dc0eb]
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[45vw] sm:h-[50vw]
        xl:w-[32vw] xl:h-[32vw]
        relative z-10`}
        >
            <MotionImage
                className="absolute h-full w-full object-cover"
                variants={imageVariants(index)}
                initial="initial"
                animate={shouldAnimate ? 'animate' : 'initial'}
                onAnimationComplete={() => setAnimationComplete(true)}
                src={image}
                width={100}
                height={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={alt}
            />
            <div
                className="relative flex flex-col justify-center
            items-center mt-auto mb-auto"
            >
                <section
                    className="h-[200px]  flex flex-col
            items-center justify-center mb-auto mt-auto"
                >
                    <motion.h3
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        animate={{
                            opacity: animationComplete ? 1 : 0,
                            y: animationComplete ? 0 : 30,
                        }}
                        className="text-xl ml-auto text-center mr-auto pr-2 pl-2 pt-2 "
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: animationComplete ? 1 : 0,
                            transition: {
                                delay: 0.33,
                            },
                        }}
                        className=" ml-auto mr-auto text-md  pr-5 pl-5 mt-3 sm:mt-6
            pb-4"
                    >
                        {description}
                    </motion.p>
                </section>
            </div>
        </motion.div>
    );
};


interface Props {
    title?:string,
    description?:string,
    aspects:{
        image:string,
        alt:string
        title:string,
        description:string,
    }[]
    
}

 const AspectBoxes:React.FC<Props> = ({
    title, description,aspects
}) => {




    const {isMobile} = useGeneralContext()

    const options = {
        root: null,
        rootMargin: !isMobile ? '500px' : '80px',
        threshold:!isMobile ?  0.6 : 0.1,
    };

    const contentRef = useRef(null)

   const inView = useInView(contentRef,
    {
        margin:!isMobile ? '500px' : '80px',
        amount:!isMobile ?  0.6 : 0.1,

    })

    const [slideComplete, setSlideComplete] = useState(false)

  
    return (
        <>
<section className="mt-[10rem]">


     

        <SlidingText
                text="Aspect boxes"
                subText="Here is where you can list of multiple aspects of something"
                // toggle={false}
                setSlideComplete={setSlideComplete}
                />


<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

  

       <div className="w-screen"
       ref={contentRef}>
       {title && (
            <>
             <motion.h2
             initial={{
               opacity:0,
               y:50
             }} 
             animate={{
               opacity:inView && slideComplete ? 1 : 0,
               y: inView && slideComplete ? 0 : 50
             }}
             className='relative text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
            text-4xl sm:text-5xl font-semibold text-center'>Built to work, work to build</motion.h2>
              <motion.p
            initial={{
              opacity:0,
              x:50
            }} 
            animate={{
              opacity:inView && slideComplete ? 1 : 0,
              x: inView && slideComplete ? 0 : 50,
              transition:{
                delay:0.5
              }
            }}
             className='text-left relative z-[20]  md:text-center md:text-2xl pl-4 pr-5 mt-[2rem]
             mb-[2rem]
           w-[100%] max-w-[900px] ml-auto mr-auto'>{description}</motion.p>
            </>
        )}
       </div>


        <section ref={contentRef}
         className={`flex relative
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 xl:grid-cols-3
           gap-4 lg:gap-0 w-screen max-w-[1500px]  ml-auto mr-auto
          `}>
          



            {aspects.map((aspect, index)=> (
                <AspectElement
               title={aspect.title}
               description={aspect.description}
               alt={aspect.alt}
               image={aspect.image}
               index={index}
                key={index}
                titleInView={inView}
                slideComplete={slideComplete}
                />

            ))}
            
        </section>
        </section>
      
       </>
    )
}

export default AspectBoxes