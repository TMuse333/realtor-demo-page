import Property from "@/components/listing/listing";
import React from "react";
import { propertyData } from "@/data/propertyData";

const Page = () => {

    return (
        <Property
        {...propertyData}
        />
    )
}


export default Page