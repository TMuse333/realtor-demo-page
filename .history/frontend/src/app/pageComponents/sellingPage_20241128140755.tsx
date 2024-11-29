import React from "react";
import { meetingExperienceCard, sellingHerobanner } from "@/data/sellingData";
import ServiceHerobanner from "../components/serviceHerobanner/serviceHerobanner";
import ExperienceCard from "../components/experienceCard/experienceCard";

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
        </main>
    )
}


export default SellingPage