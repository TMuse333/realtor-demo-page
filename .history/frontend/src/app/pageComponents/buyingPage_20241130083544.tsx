import React from "react";
import { parallax1Data, parallax2Data, parallax3Data,experienceCardData, ImageTextBoxData, b } from "@/data/buyerData";
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import BigNav from "@/components/navbar/bigNav";
import ImageTextBox from "@/components/imageTextBox/imageTextBox";
import { imageTextBox1 } from "@/data/data";
import { contactCardData } from "@/data/data";
import ContactCard from "@/components/contactCard/contactCard";
import AspectBoxes from "@/components/aspectBoxes/aspectBoxes";



const BuyingPage = () => {


    return (
        <>
        <BigNav
        excludedLink=""
        />
        <main className="w-screen mt-10
        bg-gray-200">



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

        <AspectBoxes
        aspects={buyerAspects}
        />

        <ImageTextBox
        {...ImageTextBoxData}
        />

<ImageTextBox
        {...ImageTextBoxData}
        reverse
        />

        <ContactCard
        {...contactCardData}
        />

        </main>
        </>
    )
}

export default BuyingPage