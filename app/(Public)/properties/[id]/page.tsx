"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import createRequest from "@/service/CreateRequest";
import GetPropertiesById from "@/service/GetPropertiesById";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertiesById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  useEffect(() => {
    const fetchProperty = async () => {
      const propertyId = (await params).id;
      const result = await GetPropertiesById(propertyId);
      setProperty(result);
    }
    fetchProperty();
  }, [params]);

  const [property, setProperty] = useState<any>([]);
  if (!property.data?.thumbnail) {
    return (

      <div className="container mx-auto py-10">
        <div className="max-w-md rounded-xl border p-5 shadow-sm space-y-4">
          <Skeleton className="h-48 w-full rounded-lg" />

          <Skeleton className="h-8 w-3/4" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />

          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-24" />

          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    )

  }
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div

          className="rounded-xl border p-5 shadow-sm"
        >
          <div>
            <Image
              src={property.data?.thumbnail}
              alt={property.data?.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

          </div>
          <h1>{property.data?.id}</h1>
          <h2 className="text-xl font-semibold">{property.data?.title}</h2>

          <p className="text-gray-600 mt-2 line-clamp-3">
            {property.data?.description}
          </p>
          <p>{property.data?.bedrooms} bedrooms</p>
          <p>{property.data?.bathrooms} bathrooms</p>
          <p>{property.data?.area} sq ft</p>
          <p className="mt-4 font-bold text-blue-600">
            ৳ {property.data?.price}
          </p>

          <p>{property.data?.location}</p>

          <Button onClick={() => createRequest(property.data?.id)}>Request Info</Button>
        </div>

      </div>
    </div>
  );
}