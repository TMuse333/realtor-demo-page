"use client"

import { useEffect, useRef, useMemo } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useInView,
} from "framer-motion";

import side from '../../../public/placeholder.png'
import building from '../../../public/hero-building.jpeg'
import Image from "next/image";
import remax from '../../../public/remax-balloon.png'
import placeholder from '../../../public/placeholder-logo.webp'


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
 const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  function scrollToElementById(id:string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


  const ref = useRef(null)


  // useEffect(()=>{
  //   if(!inView){
  //       setHeroInView(false)
  //   }
  //   else{
  //       setHeroInView(true)
  //   }
  // },[inView])

  return (
    <>
    
    <motion.section
     ref={ref}
      className="relative  grid min-h-screen place-content-center overflow-hidden px-4  text-gray-200 z-[3]
    "
    >

<motion.div
    style={{
      backgroundImage,
    }}
    className="absolute inset-0 z-[2]"
  />

  {/* Building Image Layer */}
  <Image
    src={building}
    alt=""
    width={600}
    height={1300}
    className="absolute w-full h-full object-cover z-[1]"
    style={{
      filter: 'brightness(0.2)',
    }}
  />
       



      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
         Realtor
        </span>
        <Image
        src={placeholder}
        alt=''
        width={600}
        height={1300}
        className=' w-[20vw] rounded-2xl my-4 object-contain object-cover
         mx-auto'
        
        />
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Real estate agent
        </h1>
        <Image
            src={side}
            priority
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[40vw] md:w-[25vw] object-contain mx-auto
           rounded-full bg-gray-600 max-w-[240px] max-h-[360px]
            
            "
            />

<p className="my-6 w-[80vw] max-w-[1000px] text-left text-base leading-relaxed md:text-lg md:leading-relaxed sm:text-lg md:text-xl font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsa porro nihil dolorem molestiae iste. Vel saepe ad dignissimos reiciendis.
  <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere inventore minima eos iure quae modi sint eum tempore, beatae excepturi minus aspernatur
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laborum.
</p>

       

<section className="flex">


        <motion.button
        onClick={()=>scrollToElementById('closer')}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group bg-black relative mr-4 flex w-fit items-center  gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Get in touch
          {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
        </motion.button>
        <motion.button
        onClick={()=>scrollToElementById('closer')}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group bg-black relative flex w-fit items-center  gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
         View listings
          {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
        </motion.button>
        </section>
   
      </div>

      
    </motion.section>
    </>
  );
};

export default AuroraHero