import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import dynamic from 'next/dynamic';
import { HTMLMotionProps } from 'framer-motion';

import SlidingText from '../slidingText/slidingText';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
}) as React.ComponentType<HTMLMotionProps<'p'>>;


interface TestimonialProps {
  testimonials?: {
    title?: string;
    quote: string;
    author: string;
    effect: string;
  }[];
}

const testimonialsData = [
  {
    title: 'First-Time Homebuyer',
    quote: 'Buying my first home was so much easier with the right real estate agent.',
    author: 'Jessica Lee',
    effect: `Working with a knowledgeable and patient real estate agent made my first home-buying experience stress-free. Every step was explained clearly, and I felt confident in the decisions I was making. Finding a home that exceeded my expectations was the highlight of this journey, thanks to their expertise and personalized guidance.`,
  },
  {
    title: 'Seasoned Investor',
    quote: 'Their market knowledge and negotiation skills helped me secure the best deals.',
    author: 'Michael Carter',
    effect: `As a seasoned investor, I value agents who understand the market and can deliver results. This real estate professional demonstrated incredible attention to detail and a strategic approach that maximized the value of my investments. Their dedication and expertise made a significant difference in achieving the best returns.`,
  },
  {
    title: 'Happy Seller',
    quote: 'They sold my home quickly and at a price I was thrilled with.',
    author: 'Sandra Mitchell',
    effect: `Selling a home can be stressful, but the right agent makes all the difference. From expert staging advice to innovative marketing strategies, they ensured my home stood out. The result? Multiple offers and a sale above asking price in record time. I’m incredibly grateful for their professionalism and dedication throughout the process.`,
  },
];

  

const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* <AppearingGradient
        text='Client Success, Delivered'
        subText="Explore feedback from clients who've experienced the power of custom web design"
      /> */}

      <SlidingText
      text='You can put your testimonials here'
      />

      <section className='bg-gray-300
        ml-auto mr-auto max-w-[1200px] w-screen 
        relative mb-8 rounded-lg text-white
        h-[85vh] max-h-[600px] sm:w-[90vw]'
      >
        <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
          hover:scale-[1.15] z-[12] transition-all" onClick={nextTestimonial} />
        <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200 z-[12]
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
            text-lg md:text-xl lg:text-2xl sm:pl-12 sm:pr-12 pt-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].quote}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl
            whitespace-pre-line text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].effect}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
            sm:text-lg text-left md:text-xl font-semibold" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            exit={{ opacity: 0 }}
          >
            -{testimonials[currentTestimonial].author}
          </MotionP>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
            text-left md:text-xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].title}
          </MotionP>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Testimonials;