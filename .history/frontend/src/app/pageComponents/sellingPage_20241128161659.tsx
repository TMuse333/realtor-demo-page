"use client"

import React from "react";
import { meetingExperienceCard, sellingHerobanner, documentsCarousel, sellingProcessSteps} from "@/data/sellingData";
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
            priceData={sellingProcessSteps}
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
        </main>
    )
}


export default SellingPage