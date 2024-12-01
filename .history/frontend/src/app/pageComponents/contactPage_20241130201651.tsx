import ApplicationForm from "@/components/applicationForm/applicationForm";
import Footer2 from "@/components/footer/footer";
import ImageHero from "@/components/imageHero/imageHero";
import BigNav from "@/components/navbar/bigNav";
import React from "react";
import { contactImages } from "@/data/data";
import ContactCard from "@/components/contactCard/contactCard";


const ContactPage = () => {


    return (
        <>
        <BigNav
        excludedLink="contact"
        />
        <main className="w-screen overflow-x-hidden
        mt-10 bg-gray-200">
            <ImageHero
            images={contactImages}
            />
            <ApplicationForm/>
            <ContactCard
            
            <Footer2
            excludedLink="Contact"
            />
        </main>

</>
    )
}

export default ContactPage