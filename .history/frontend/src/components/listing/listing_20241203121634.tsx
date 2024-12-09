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
    };
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
    <section className="">
        <section className="w-[95vw] max-w-[800px] mx-auto">

        
        <Image
        src={mainSrc}
        alt='alternation'
        className="w-[95vw] max-w-[]
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
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
        <section className="px-4">
            <h3 className="font-bold
            my-4 text-xl">
                Property Description</h3>
                <p>{propertyDescription}</p>


        </section>
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
        <section className="px-4">
        <h3 className="font-bold
            my-4 text-xl">
        Property Specs</h3>
        <ul>
           <li className="mb-2">Property type: {specs.type}</li>
           <li className="mb-2">Put on market: {specs.putOnMarket}</li>
           <li className="mb-2">Price per Sq Ft: {specs.priceSqFt}</li>
  <li className="mb-2">Lot Size: {specs.lot}</li>
  <li className="mb-2">Year Built: {specs.yearBuilt}</li>
        </ul>
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
          <h3 className="font-bold
            my-4 text-xl">
        Property highlights</h3>
        <ul></ul>
        <ul>
  <li className="mb-2">Air Conditioning: {highlights.airConditioning}</li>
  <li className="mb-2">Heating: {highlights.heating}</li>
  <li className="mb-2">Foundation: {highlights.foundation}</li>
  <li className="mb-2">Flooring: {highlights.flooring}</li>
  <li className="mb-2">Style: {highlights.style}</li>
</ul>
 <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
<h3 className="font-bold
            my-4 text-xl">
        Map for&nbsp;{address}</h3>
<iframe className="ml-auto mr-auto
            w-[80vw] sm:w-[50vw] max-w-[500px] mt-5"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5669.174538738048!2d-63.664255299999994!3d44.7280343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5989c1fe032eb9%3A0x6dd167bbacea91be!2s1361%20Bedford%20Hwy%2C%20Bedford%2C%20NS%20B4A%201C5!5e0!3m2!1sen!2sca!4v1716386513142!5m2!1sen!2sca"
  width="600"
  height="450"
  style={{
    border:'0'
  }} // Pass the styles object here
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
>

</iframe>

<div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
            
        </section>
    </section>
    );
};

export default Property;
