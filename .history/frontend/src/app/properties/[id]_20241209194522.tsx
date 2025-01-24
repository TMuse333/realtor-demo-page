// pages/properties/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPropertyIds, getPropertyData } from '@/lib/properties';
import { PropertyData } from '@/interfaces/property';
import Property from '@/components/Property';

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
      <Property {...property} />
    </div>
  );
};

export default PropertyPage;
