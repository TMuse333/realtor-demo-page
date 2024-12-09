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
        <Image
        src={mainSrc}
        alt='alternation'
        className="w-[95vw]
        rounded-2xl object-contain
        mx-auto"
        width={600}
        height={1300}
        />
        <h1
    </section>
    );
};

export default Property;
