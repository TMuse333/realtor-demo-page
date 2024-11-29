import React from "react";
import { meetingExperienceCard, sellingHerobanner, preApprovalSteps} from "@/data/sellingData";
import ServiceHerobanner from "../components/serviceHerobanner/serviceHerobanner";
import ExperienceCard from "../components/experienceCard/experienceCard";
import Pricing from "../components/cardSection/cardSection";

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
            priceData={preApprovalSteps}
        </main>
    )
}


export default SellingPage