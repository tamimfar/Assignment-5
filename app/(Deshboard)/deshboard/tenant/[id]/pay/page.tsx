"use client";

import { Button } from "@/components/ui/button";

import CreatePayment from "@/service/CreatePayment";
import Link from "next/link";
import { useEffect, useState } from "react";

export default  function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const [url, setUrl] = useState<string | null>(null);
    useEffect(() => {
        const fetchProperty = async () => {
            const rentalId = (await params).id;
            const  result = await CreatePayment(rentalId);
            console.log(result)
            setUrl(result?.data || null);
        };
        fetchProperty();
    }, []);
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold"><Button><Link href={url || "/"}>Proceed to Payment</Link></Button></h1>
        </div>
    );

  
}