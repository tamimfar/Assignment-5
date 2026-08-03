"use server";

import { cookies } from "next/headers";


const  updateuser = async (formData: FormData,propertyId: string) => {
    const data = {
      
       status:formData.get("status")
       
    };
    console.log("createproperty payload:", data);
const cookieStore = await cookies();
const token = cookieStore.get("access_tocken")?.value || null; 
const res = await fetch(`https://assinment4-gamma.vercel.app/api/admin/users/${propertyId}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        cookie: `access_tocken=${token}`,
    },
    body: JSON.stringify(data)
});
const result = await res.json();
console.log("updateproperty response:", result);
return result;

}

export default updateuser