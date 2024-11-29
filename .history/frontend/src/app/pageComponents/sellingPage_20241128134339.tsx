import React from "react";
import { sellingHerobanner } from "@/data/sellingData";
import ServiceHerobanner from "../components/serviceHerobanner/serviceHerobanner";

const SellingPage = () => {


    return (
        <main className="w-screen overflow-x-hidden">
            <ServiceHerobanner
            {...sell}
        </main>
    )
}


export default SellingPage