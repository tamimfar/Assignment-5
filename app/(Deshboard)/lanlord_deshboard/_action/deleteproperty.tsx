"use server";
import { cookies } from "next/headers";

 const deleteproperty = async (propertyId: string) => {
        const cookieStore = await cookies();
        const token = cookieStore.get("access_tocken")?.value || null;
        const res = await fetch(`https://assinment4-gamma.vercel.app/api/landlord/properties//${propertyId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                cookie: `access_tocken=${token}`,
            },
        });

        const data = await res.json();
        return data;
    };

 export default deleteproperty