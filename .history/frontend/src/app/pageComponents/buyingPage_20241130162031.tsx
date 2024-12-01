import React from "react";
import { parallax1Data, parallax2Data, parallax3Data,experienceCardData, ImageTextBoxData, buyerAspects, buyingHerobanner } from "@/data/buyerData";
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText";
import ExperienceCard from "@/components/experienceCard/experienceCard";
import BigNav from "@/components/navbar/bigNav";
import ImageTextBox from "@/components/imageTextBox/imageTextBox";
import { imageTextBox1 } from "@/data/data";
import { contactCardData } from "@/data/data";
import ContactCard from "@/components/contactCard/contactCard";
import AspectBoxes from "@/components/aspectBoxes/aspectBoxes";
import ServiceHerobanner from "@/components/serviceHerobanner/serviceHerobanner";
import Footer2 from "@/components/footer/footer";



const BuyingPage = () => {


    return (
        <>
        <BigNav
        excludedLink=""
        />
        <main className="w-screen mt-10
        bg-gray-200">

<ServiceHerobanner
alt='buying an image like a real one'
{...buyingHerobanner}
/>


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

        <

        <Footer2
        excludedLink=""
        />

        </main>
        </>
    )
}

export default BuyingPage