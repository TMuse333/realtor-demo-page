import ApplicationForm from "@/components/applicationForm/applicationForm";
import Footer2 from "@/components/footer/footer";
import BigNav from "@/components/navbar/bigNav";
import React from "react";



const ContactPage = () => {


    return (
        <>
        <BigNav
        excludedLink="contact"
        />
        <main className="w-screen overflow-x-hidden
        mt-10 bg-gray-200">
            <ApplicationForm/>
            <Footer2
            excludedLink=""
        </main>

</>
    )
}

export default ContactPage