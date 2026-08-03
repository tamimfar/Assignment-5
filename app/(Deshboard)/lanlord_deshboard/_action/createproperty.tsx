"use server";

import { cookies } from "next/headers";


const createproperty = async (formData: FormData) => {
    const data = {
        title: formData.get("title"),
        description: formData.get("description"),
        thumbnail: formData.get("thumbnail"),
        price: Number(formData.get("price")),
        location: formData.get("location"),
        bedrooms: formData.get("bedrooms"),
        bathrooms: formData.get("bathrooms"),
        area: formData.get("area"),
        avilable:true,
        categoriesId: formData.get("categoriesId"),
       
    };
    console.log("createproperty payload:", data);
const cookieStore = await cookies();
const token = cookieStore.get("access_tocken")?.value || null; 
const res = await fetch("https://assinment4-gamma.vercel.app/api/landlord/properties", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        cookie: `access_tocken=${token}`,
    },
    body: JSON.stringify(data)
});
const result = await res.json();
console.log("createproperty response:", result);
return result;

}

export default createproperty
