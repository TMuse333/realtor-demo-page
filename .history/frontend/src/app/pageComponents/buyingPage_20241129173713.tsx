import React from "react";
import { parallax1Data } from "@/data/buyerData";
import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText";




const BuyingPage = () => {


    return (
        <>
        <main className="w-screen">
        <TextParallaxContentExample
        {...parallax1Data}
        />
        </main>
        </>
    )
}

export default BuyingPage