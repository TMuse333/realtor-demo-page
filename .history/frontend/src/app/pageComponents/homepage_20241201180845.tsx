"use client"


import AuroraHero from "../../components/auroraHero/auroraHero";
import CountUpStats from "../../components/countUpStats/countUpStats";
import ExperienceCard from "../../components/experienceCard/experienceCard";
import { experienceCard1, experienceCard2 ,experienceCard3,
  displayBox2,blogData, closingStatement,
 contactCardData
} from "@/data/data";
// import ImageTextBox from "./components/imageTextBox/imageTextBox";
import DisplayBoxes from "../../components/displayBox/displayBox";
import Testimonials from "../../components/testimonials/testimonials";
import ScrollCarousel from "../../components/scrollCarousel/scrollCarousel";
import Closer from "../../components/closer/closer";
import BigNav from "../../components/navbar/bigNav";
import Footer2 from "../../components/footer/footer";
import ContactCard from "../../components/contactCard/contactCard";
import ApplicationForm from "@/components/applicationForm/applicationForm";
const Homepage =()=> {
  return (
    <>
   
   <main className="relative w-screen overflow-x-hidden
   bg-gray-200">
   <BigNav
    excludedLink=""
    />
    {/* <AuroraHero/> */}
    <div className="h-screen"
    {/* <CountUpStats
    number1="45"
    number2="15.5"
    number3="20"/> */}

<ExperienceCard
    {...experienceCard2}
    />

    

{/* <ExperienceCard
    {...experienceCard3}
    /> */}

  

    <DisplayBoxes
    data={displayBox2}
    />

  <ExperienceCard
    {...experienceCard1}
    />

<ExperienceCard
    {...experienceCard1}
    />

    <Testimonials/>
    <section className="text-center
    mx-auto max-w-[1200px] text-black">
 <h2 className="text-4xl sm:text-5xl
     md:text-6xl text-center">
      Blog posts
    </h2>
    <p className="sm:text-xl mt-6 px-4">
      If you opt into our monthly blog post
      option, here is where you can display a 
      lot more of your knowledge and improve
      your google search rankings.
    </p>
    </section>

   

    <ScrollCarousel
    images={blogData}
    bgImage
    />

<ContactCard
    {...contactCardData}
    
    />

    <ApplicationForm
    />

    <Closer
    {...closingStatement}
    />

  


    <Footer2
    excludedLink=""
    />


   </main>
   </>
  );
}

export default Homepage
