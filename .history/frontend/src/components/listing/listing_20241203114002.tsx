import Image from "next/image";
import React from "react";


interface Props {
    mainSrc: string;
    address: string;
    price: string;
    location: string;
    beds: string;
    bath: string;
    squareFt: string;
    propertyDescription: string;
    specs: {
        type: string;
        putOnMarket: string;
        priceSqFt: string;
        lot: string;
        yearBuilt: string;
    }[];
    highlights: {
        airConditioning: string;
        heating: string;
        foundation: string;
        flooring: string;
        style: string;
    };
}

const Property: React.FC<Props> = ({
    mainSrc,
    address,
    price,
    location,
    beds,
    bath,
    squareFt,
    propertyDescription,
    specs,
    highlights
}) => {
    return (
    <section>
        <section className="w-[95vw] mx-auto">

        
        <Image
        src={mainSrc}
        alt='alternation'
        className="w-[95vw]
        rounded-2xl object-contain
        mx-auto"
        width={600}
        height={1300}
        />
        <h1 className="mt-4 mb-2 font-black
        text-2xl">{address}</h1>
        <h2 className="mb-2 font-extrabold
        text-xl">{location}</h2>
        </section>
        <section className="flex font-bold">
            <span className="ml-2 mr-3">
                {beds}&nbsp;beds
            </span>
            <span className=" mr-3">
                {bath}&nbsp;baths
            </span>
            <span className=" mr-3">
                {squareFt}&nbsp;Square feet
            </span>
        </section>
        <div className="w-[95vw] mx-auto"
    </section>
    );
};

export default Property;
