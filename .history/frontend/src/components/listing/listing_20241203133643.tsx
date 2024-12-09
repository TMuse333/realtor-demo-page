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

const PropertyPreview:React.FC<Props> = ({
    mainSrc,address,price,location,
    beds,bath,squareFt
}) => {


    return (
        <div className="flex flex-col
        justify-center">

       
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
    )
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

        <div className="md:grid grid-cols-2
        gap-2 mr-auto hidden ">
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
        bg-gray-600 mt-6 rounded-2xl
        max-w-[400px]"
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


</section>


      
               </section>
            
               <div className="bg-gray-800 w-[95vw] max-w-[400px] mx-auto mt-6 p-6 rounded-lg
               max-h-[600px]">
  <h2 className="font-bold text-xl mb-4 sm:text-2xl">Request More Info</h2>
  <form className="flex flex-col space-y-4">
    <label className="flex flex-col">
      <span className="font-semibold sm:text-lg">Full Name</span>
      <input
        type="text"
        placeholder="Enter your full name"
        className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </label>

    <label className="flex flex-col">
      <span className="font-semibold sm:text-lg">Email</span>
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </label>

    <label className="flex flex-col">
      <span className="font-semibold sm:text-lg">Interest</span>
      <textarea
        placeholder={`I am interested in ${address}`}
        className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
        rows={3}
      />
    </label>

    <button
      type="button"
      className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition sm:text-lg"
    >
      Submit
    </button>
  </form>
</div>
        </section>
        <div className="w-[95vw] mx-auto h-[3px]
        bg-gray-600 mt-6 rounded-2xl
        max-w-[400px]"
        />

    </section>
    );
};

export default Property;
