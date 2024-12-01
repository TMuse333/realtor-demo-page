import React from "react";
import { parallax1Data, parallax2Data, parallax3Data,experienceCardData, ImageTextBoxData } from "@/data/buyerData";
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import BigNav from "@/components/navbar/bigNav";
import ImageTextBox from "@/components/imageTextBox/imageTextBox";
import { imageTextBox1 } from "@/data/data";




const BuyingPage = () => {


    return (
        <>
        <BigNav
        excludedLink=""
        />
        <main className="w-screen mt-10">



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

        <ImageTextBox
        {...ImageTextBoxData}
        />
        lorem
        </main>
        </>
    )
}

export default BuyingPage