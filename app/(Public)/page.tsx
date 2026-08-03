import { GetProperties } from "@/service/GetProperties";
import Image from "next/image";

type Property = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  location: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  avilable: boolean;
  createdAt: string;
  updatedAt: string;
  landlordId: string;
  categoriesId: string;
};

export default async function Page() {
  const result = await GetProperties();
  const properties = result.data;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map((property: Property) => (
          <div
            key={property.id}
            className="rounded-xl border p-5 shadow-sm"
          >
            <div>
                    <Image 
                        src={property.thumbnail}
                        alt={property.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full h-48"
                                      />                  
            </div>
            <h1>{property.id}</h1>
            <h2 className="text-xl font-semibold">{property.title}</h2>

            <p className="text-gray-600 mt-2 line-clamp-3">
              {property.description}
            </p>

            <p className="mt-4 font-bold text-blue-600">
              ৳ {property.price}
            </p>

            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}