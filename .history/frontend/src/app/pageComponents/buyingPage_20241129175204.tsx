import React from "react";
import { parallax1Data, parallax2Data, parallax3Data,experienceCardData } from "@/data/buyerData";
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText";
import ExperienceCard from "@/components/experienceCard/experienceCard";




const BuyingPage = () => {


    return (
        <>
        <main className="w-screen">

            <ExperienceCard
            {...experienceCardData}
            />

        <TextParallaxContentExample
        {...parallax1Data}
        />
        <TextParallaxContentExample
        {...parallax2Data}
        />
         <TextParallaxContentExample
        {...parallax3Data}
        />
        </main>
        </>
    )
}

export default BuyingPage