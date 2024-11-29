"use client"

import React from "react";
import { meetingExperienceCard, sellingHerobanner, documentsCarousel, sellingProcessSteps,
    sellingFaq} from "@/data/sellingData";
import ServiceHerobanner from "../../components/serviceHerobanner/serviceHerobanner";
import ExperienceCard from "../../components/experienceCard/experienceCard";
import Pricing from "../../components/cardSection/cardSection";
import Carousel from "@/components/carousel/carousel";
import ImageAccordion from "@/components/imageAccordion/imageAccordion";
import AppearingGradient from "@/components/appearingGradient/appearingGradient";

const SellingPage = () => {


    return (
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

            <Slid

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
        </main>
    )
}


export default SellingPage