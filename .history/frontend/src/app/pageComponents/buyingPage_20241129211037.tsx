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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea tempora repudiandae. Unde officia sint quasi autem impedit accusamus libero sapiente molestias ullam! Sint culpa eos, hic repellat fugit magni totam ea, ullam quisquam deserunt iusto a. Eligendi nulla ipsum quibusdam! Cum reprehenderit eveniet dolorem dignissimos, totam odit et quo!
        </main>
        </>
    )
}

export default BuyingPage