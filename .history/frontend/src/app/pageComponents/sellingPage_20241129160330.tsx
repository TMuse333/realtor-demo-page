"use client"

import React from "react";
import { meetingExperienceCard, sellingHerobanner, documentsCarousel, sellingProcessSteps,
    sellingFaq,processCarousel,} from "@/data/sellingData";
    import { contactCardData,closingStatement } from "@/data/data";
import ServiceHerobanner from "../../components/serviceHerobanner/serviceHerobanner";
import ExperienceCard from "../../components/experienceCard/experienceCard";
import Pricing from "../../components/cardSection/cardSection";

import ImageAccordion from "@/components/imageAccordion/imageAccordion";
import AppearingGradient from "@/components/appearingGradient/appearingGradient";
import SlideShowCarousel from "@/components/slideShowCarousel.tsx/slideShowCarousel";
import ContactCard from "@/components/contactCard/contactCard";
import Closer from "@/components/closer/closer";
import BigNav from "@/components/navbar/bigNav";
const SellingPage = () => {


    return (
        <>
        <BigNav
        excludedLink=""
        />
        <main className="w-screen overflow-x-hidden">
            <ServiceHerobanner
            {...sellingHerobanner}
            alt='alt'
            />
            <ExperienceCard
            {...meetingExperienceCard}
            />

            <Pricing
            title="Simplify the Selling Process with Your Expertise"
            description="Showcase your professionalism and guide your clients seamlessly through the home-selling process. Use this section to educate, build trust, and position yourself as the go-to expert in real estate.
            "
            priceData={sellingProcessSteps}
            />

            <SlideShowCarousel
            title="Your Roadmap to a Successful Sale"
            description="This interactive slideshow breaks down the home-selling process into clear, actionable steps. Use it to guide your clients through every stage, showcasing your expertise and ensuring a seamless selling experience."
            images={processCarousel}
            />

            {/* <Carousel
            images={documentsCarousel}
            hasDescription={true}
            /> */}

            

            <AppearingGradient
            text="Documents Section"
            subText="Here is where you can list out all the documents needs.
            This is a fantastic way to save you time"
            />

            <ImageAccordion
            items={documentsCarousel}
            />
              <AppearingGradient
            text="General FAQ"
            subText="You can also use this page to answer frequently asked questions, saving you lots of time"
            />
            <ImageAccordion
            items={sellingFaq}
            />

<ContactCard
    {...contactCardData}
    />

    <Closer
    {...closingStatement}
    />
        </main>
        </>
    )
    
}


export default SellingPage