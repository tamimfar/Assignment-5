"use client";

import { useEffect, useState } from "react";
import GetRentaleRequest from "@/service/GetRentaleRequest";
import GetRentaleRequestById from "@/service/GetRentaleRequestById";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Payment({
    params
}: {
    params: Promise<{ id: string }>;
}) {

    useEffect(() => {
        const fetchRentalRequest = async () => {
            const requestId = (await params).id;
            const result = await GetRentaleRequestById(requestId);
            setRentalRequest(result);
        };
        fetchRentalRequest();
    }, []);
    const [rentalRequest, setRentalRequest] = useState<any>(null);
    if (!rentalRequest) {
        return (
            <div className="container mx-auto py-10">
                <div className="max-w-md rounded-xl border p-5 shadow-sm space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                </div>
            </div>
        );
    }
    const { user: tenant, propertie,status,id} = rentalRequest.data;
   
    return (
        <div className="container mx-auto py-10">
            <h1>Rental Request Details</h1>
            <Card className="p-4 mt-4 flex flex-row md:flex-row gap-4">
                <div>
                    <Image src={rentalRequest?.data?.propertie?.thumbnail} alt="Rental Request" width={600}
                        height={400} className=" rounded-2xl" />
                </div>
                <div>
                   
                    <h2 className="text-lg font-semibold">Property Name: {propertie?.title}</h2>
                        <h4 className="text-md font-medium py-2 text-gray-600"> {propertie?.description}</h4>
                    <p className="text-sm text-gray-600">Property Location: {propertie?.location}</p>
                    <div className="mt-4">
                        <p className="text-sm text-gray-600"> {propertie?.bedrooms} bedrooms</p>
                        <p className="text-sm text-gray-600"> {propertie?.bathrooms} bathrooms</p>
                    </div>
                    <div className="mt-4">
                        <h3>Total Price: ${propertie?.price?.toFixed(2)}</h3>
                    </div>
                    <div className="mt-4">
                        <h3 className="my-2">Lanloard: {propertie?.user?.name}</h3>
                        <h3>Request State: {status}</h3>
                    </div>
                    <div className="mt-4">
                        {status === "APPROVED" ? 
                        <Link href={`/deshboard/tenant/${id}/pay`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Proceed to Payment  
                            </button>
                        </Link> : ""
                    
                    
                    
                    }
                        
                    </div>
                </div>
            </Card>
        </div>
    );
}
             