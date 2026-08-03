"use client";
import SearchBar from "@/components/custome/SearchBar";
import { Button } from "@/components/ui/button";
import { GetProperties } from "@/service/GetProperties";
import {useSearchStore} from "@/Store/searchStor";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
export default   function Properties() {
    const [properties, setProperties] = useState<Property[]>([]);
    const { search } = useSearchStore();
    useEffect(() => {
      const fetchProperties = async () => {
        const result = await GetProperties();
        setProperties(result.data);
      };
      fetchProperties();
    }, [search]);

//   const result =  GetProperties();
//   const properties = result.data;
//   const { search } = useSearchStore();


  const filteredProperties = properties?.filter((property: Property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <SearchBar />
      <h1 className="text-3xl font-bold mb-6">Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties?.map((property: Property) => (
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
            <Button><Link href={`/properties/${property.id}`}>Details</Link></Button>
          </div>
        ))}
      </div>
    </div>
  );
}