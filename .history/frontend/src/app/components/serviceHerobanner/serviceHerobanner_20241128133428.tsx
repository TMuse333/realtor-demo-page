
import React from 'react'
import assante from '../../../public/media/Assante-1012.webp'
import {motion} from 'framer-motion'
import Image from 'next/image'

interface Props {
    src:string,
    alt:string,
    title:string,
    description:string,
    buttonText:string,
    destination:string
}

export const Herobanner:React.FC = () => {






    return (

    

    <header 
    className='w-screen min-h-[500px]
    h-[75vh] text-center text-gray-200
    relative flex flex-col items-center justify-center
    transition-colors
    duration-1000 
    '
    //  style={{
    //     backgroundImage:`url(${bg})`,
    //     backgroundSize:'cover',
    //     backgroundPosition:'center'
        
    // }}
    
   role='banner'
   >
    <Image className='w-full h-full object-cover absolute z-[1]
    brightness-[0.5]'
src={src}
priority
width={600}
height={1300}
alt={alt}
/>
      
        <section className='text-left w-4/5 relative z-[2]'>


    
<motion.h1
initial={{
    opacity:0,
    x:-80
}}
animate={{
    opacity:1,
    x:0,
    transition:{
        duration:0.5
    }
}}
 className='text-4xl sm:text-5xl md:text-6xl'>{!isFrench ? 'Experience the Assante Advantage' : 'Vivez l’expérience de l’Avantage Assante'}</motion.h1>
<motion.h2
initial={{
    opacity:0,
    y:80
}}
animate={{
    opacity:1,
    y:0,
    transition:{
        duration:0.5,
        delay:0.5
    }
}}
 className='text-xl mt-4 sm:text-2xl md:text-3xl'>{!isFrench ? 'Complete financial advice for all your wealth planning needs.' : 'Des conseils financiers complets pour tous vos besoins en matière de planification du patrimoine.'}</motion.h2>
<motion.button
initial={{
    opacity:0
}}
animate={{
    opacity:1,
    transition:{
        delay:1,
        ease:'easeIn'
    },
   
}}
 onClick={()=>handleScroll('map')}
className='bg-gray-300 p-4 text-black !important
mt-8 hover:scale-[1.1] hover:bg-slate-900 hover:text-white 
transition-all'>
   {!isFrench ? 'Contact Us' : 'Nous Joindre'} 
</motion.button>


</section>
    </header>
    )
}