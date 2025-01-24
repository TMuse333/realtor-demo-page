import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Property {
  id: string;
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

// Helper function to get all property files
function getPropertyFiles() {
  const propertiesDir = path.join(process.cwd(), "/properties");
  return fs.readdirSync(propertiesDir);
}

// Helper function to get property data
async function getPropertyData(id: string): Promise<Property> {
  const filePath = path.join(process.cwd(), "/properties", `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return data as Property;
}

// Generate static params
export async function generateStaticParams() {
  const files = getPropertyFiles();

  return files.map((filename) => ({
    id: filename.replace(".md", ""),
  }));
}

// Dynamic Property Page Component
export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getPropertyData(params.id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>{property.address}</h1>
      <p>{property.propertyDescription}</p>
      <p>Price: {property.price}</p>
      <p>Beds: {property.beds}</p>
      <p>Baths: {property.bath}</p>
      <p>Square Feet: {property.squareFt}</p>
      {/* Render additional property details */}
    </div>
  );
}
