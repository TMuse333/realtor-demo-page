import React from "react";


interface Props {
    mainSrc:string,
    address:string,
    location:string,
    beds:string,
    bath:string,
    squareFt:string,
    propertyDescription:string,
    specs:{
        type:string,
        putOnMarket:string,
        priceSqFt:string,
        lot:string,
        yearBuilt:string
    }[]
    highlights:{
        airConditioning:string,
        heating:string,
        foundation:string,
    }
}