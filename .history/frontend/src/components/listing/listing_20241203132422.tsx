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

<section className="w-[95vw] flex flex-row
justify-center  mx-auto max-w-[800px]">

        <Image
        src={mainSrc}
        alt='alternation'
        className="w-[95vw] max-w-[400px]
        rounded-2xl object-contain
        mr-auto"
        width={600}
        height={1300}
        />

        <div className="grid grid-cols-2
        gap-2 mr-auto ">
        <Image
        src={mainSrc}
        alt='alternation'
        className="w-[15vw] max-w-[400px]
        rounded-2xl object-contain
        mx-auto m-3 max-w-[170px] max-h-[115px]"
        width={600}
        height={1300}
        />
              <Image
        src={mainSrc}
        alt='alternation'
        className="w-[15vw] max-w-[400px]
        rounded-2xl object-contain
        mx-auto m-3 max-w-[170px]
         max-h-[115px]"
        width={600}
        height={1300}
        />
              <Image
        src={mainSrc}
        alt='alternation'
        className="w-[15vw] max-w-[400px]
        rounded-2xl object-contain
        mx-auto m-3 max-w-[170px]
        max-h-[115px]"
        width={600}
        height={1300}
        />
              <Image
        src={mainSrc}
        alt='alternation'
        className="w-[15vw] max-w-[400px]
        rounded-2xl object-contain
        mx-auto m-3 max-w-[170px]
        max-h-[115px]"
        width={600}
        height={1300}
        />
        </div>

        </section>
        <section className="w-full flex items-center
        justify-between max-w-[500px] mr-auto ">


        <h1 className="mt-4 mb-2 font-black
        text-2xl">{address}</h1>
        <p className="text-2xl ml-4 my-auto
        font-black self-center
        text-green-700">{price}</p>
                </section>
        <h2 className="mb-2 font-extrabold
        text-xl text-gray-400">{location}</h2>
        </section>
        <section className="flex font-bold max-w-[800px]
        mx-auto">
            <span className="ml-2 md:ml-0 mr-3">
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
        bg-gray-600 max-w-[400px] mt-6 rounded-2xl"
        />
        <section className="flex flex-col md:flex-row">
          


        <section className="w-[95vw] max-w-[400px]
        mx-auto">
            <h3 className="font-bold
            my-4 text-xl sm:text-2xl">
                Property Description</h3>
                <p className="font-semibold">{propertyDescription}</p>


 
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl max-w-[400px]"
        />
        <section className="">
        <h3 className="font-bold
            my-4 text-xl sm:text-2xl">
        Property Specs</h3>
        <ul className="font-semibold">
           <li className="mb-2 sm:text-lg">Property type: {specs.type}</li>
           <li className="mb-2 sm:text-lg">Put on market: {specs.putOnMarket}</li>
           <li className="mb-2 sm:text-lg">Price per Sq Ft: {specs.priceSqFt}</li>
  <li className="mb-2 sm:text-lg">Lot Size: {specs.lot}</li>
  <li className="mb-2 sm:text-lg">Year Built: {specs.yearBuilt}</li>
        </ul>
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
          <h3 className="font-bold
            my-4 text-xl
            sm:text-2xl">
        Property highlights</h3>
       
        <ul className="font-semibold">
  <li className="mb-2 sm:text-lg">Air Conditioning: {highlights.airConditioning}</li>
  <li className="mb-2 sm:text-lg">Heating: {highlights.heating}</li>
  <li className="mb-2 sm:text-lg">Foundation: {highlights.foundation}</li>
  <li className="mb-2 sm:text-lg">Flooring: {highlights.flooring}</li>
  <li className="mb-2 sm:text-lg">Style: {highlights.style}</li>
</ul>
 <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
<h3 className="font-bold
            my-4 text-xl sm:text-2xl">
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
<div className="bg-blue-200
w-[95vw]
">
    <h2>Request more info</h2>
           
        </div>
</section>

<div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl"
        />
      
               </section>
            
        </section>
    </section>
    );
};

export default Property;
