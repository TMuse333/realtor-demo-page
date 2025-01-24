// pages/properties/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';


import Property from '@/components/listing/listing';

export interface PropertySpecs {
    type: string;
    putOnMarket: string;
    priceSqFt: string;
    lot: string;
    yearBuilt: string;
  }
  
  export interface PropertyHighlights {
    airConditioning: string;
    heating: string;
    foundation: string;
    flooring: string;
    style: string;
  }
  
  export interface PropertyData {
    id: string;
    mainSrc: string;
    address: string;
    price: string;
    location: string;
    beds: string;
    bath: string;
    squareFt: string;
    propertyDescription: string;
    specs: PropertySpecs;
    highlights: PropertyHighlights;
  }

interface PropertyPageProps {
  property: PropertyData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPropertyIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const property = await getPropertyData(params?.id as string);

  return {
    props: {
      property,
    },
  };
};

const PropertyPage: React.FC<PropertyPageProps> = ({ property }) => {
  return (
    <div>
     <Property
     {...property}
     />
    </div>
  );
};

export default PropertyPage;
