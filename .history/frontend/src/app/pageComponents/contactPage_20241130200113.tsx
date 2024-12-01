import ApplicationForm from "@/components/applicationForm/applicationForm";
import BigNav from "@/components/navbar/bigNav";
import React from "react";



const ContactPage = () => {


    return (
        <>
        <BigNav
        excludedLink="contact"
        />
        <main className="w-screen overflow-x-hidden">
            <ApplicationForm/>
        </main>

</>
    )
}