"use client";

import React, { useRef, useState } from "react";
import {  useInView } from "framer-motion";

import Image, { StaticImageData } from "next/image";
// import { useComponentTimeTracker } from "@/lib/componentTracker";
import Link from 'next/link'

// Define the props interface with title, description, and images array
interface Props {

    bgImage?:boolean
    images?: {
        src: string| StaticImageData;
        alt: string;
        title:string,
        description:string,
        link?:string,
        date?:string
       
    }[];
    customElement?:React.ReactNode,
    length:number
    // setTotalPageTime?:React.Dispatch<React.SetStateAction<{name:string,
    //     time:number}[]>>
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ images,
    bgImage, 
 }) => {

    const ref = useRef(null)

    const inView = useInView(ref,{
        once:false
      })
    //   const {totalTimeInView} = useComponentTimeTracker({inView,id:'restaurant-feature-boxes',
    //   setTotalPageTime:setTotalPageTime,
    //   pageTracker:false})

    // Variants for the animation of images
    // const imageVariants = (index: number): Variants => {
    //     return {
    //         initial: {
    //             opacity: 0,
    //             y: -100,
    //         },
    //         animate: {
    //             opacity: 1,
    //             y: 0,
    //             transition: {
    //                 delay: index * 0.5,
    //             },
    //         },
    //     };
    // };

    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <>
            <section
                ref={ref}
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
                bg-[#00bfff] bg-opacity-[0.2] py-8`}
            >
              

                <div
                    className="w-screen pr-[3rem] pl-[3rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
                    "
                >
                    {images ? (

                    )}
                  
                </div>
            </section>
        </>
    );
};

export default ScrollCarousel;