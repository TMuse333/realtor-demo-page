import React from "react";


import Link from "next/link";


interface props  {
    excludedLink:string,
    id?:string
}



const Footer2:React.FC<props> = ({
    excludedLink,
    id
}) => {

  const bigLinks = [
    {
      name: 'Home',
      destination:'/',
      secondaryLinks: [
        {
          name: 'Homepage',
          destination: '/',
        },
      ],
     
      //  
      
      listSubMenu: false,
    },
 
   
     
      {
        name: 'Guided Success',
        secondaryLinks: [
          {
              name:'Buying a home',
              destination:'/buying-home'
          },
          {
            name: 'Selling a home',
            destination: '/selling-home',
          },
         
        ],
        listSubMenu: true,
   
        desktopDescription:'Learn the process of buying or selling a home with a realtor and how I ensure you get the best deal.'
      },
    {
      name: 'Contact',
     
      destination:'/lets-work',
      listSubMenu: false,
      secondaryLinks: [
        {
          name: 'Contact me',
          destination: '/lets-work',
        },
      ],
    },
    // {
    //   name:"Get creative & learn",
    //   listSubMenu:false,
    //   secondaryLinks: [
    //     {
    //       name:'The Image-Text Box',
    //       destination:'/studio/image-text-box'
    //     }
    //   ]
    // },
   
  ];

      const filteredLinks = bigLinks
      .filter(link => link.name !== excludedLink) // Filter out links where link.name matches excludedLink
      .map(link => {
        // Check if secondaryLinks exist before filtering
        const filteredSecondaryLinks = link.secondaryLinks
          ? link.secondaryLinks.filter(secondary => secondary.name !== excludedLink)
          : []; // If no secondaryLinks, return an empty array
    
        // Return the link with the filtered secondaryLinks
        return {
          ...link,
          secondaryLinks: filteredSecondaryLinks
        };
      });


    return (
      <section className="w-screen bg-gray-400">

  
      <footer
      id={id}
      className="w-full bg-gray-400 relative flex flex-col items-center justify-center mx-auto my-12 text-black md:w-[90%]"
    >
      <h6 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
        Site Map
      </h6>
    
      <nav
        aria-label="Footer Site Map"
        className="w-full flex flex-col
         items-center justify-center  gap-8 text-center
         md:flex-row
        md:justify-evenly"
      >
        {filteredLinks.map((link, index) => (
          <section key={index} className="flex flex-col items-center ">
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold">
              {link.name}
            </p>
            <ul className="flex  flex-col items-center justify-around">
              {link.secondaryLinks &&
                link.secondaryLinks.map((link2, innerIndex) => (
                  <li key={innerIndex} className="mb-2">
                    <Link
                      href={link2.destination}
                      className="text-black hover:text-[#00bfff] transition-colors"
                    >
                      {link2.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </nav>
    </footer>
    </section>
    
    )
}

export default Footer2