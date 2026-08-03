"use server";
import { cookies } from "next/headers";
export default async function UpdateRequest({ requestId, newStatus }: { requestId: string; newStatus: string }) {
    console.log("Updating request status:", { requestId, newStatus });
    const cookieStore = await cookies();
    const authToken = cookieStore.get("access_tocken")?.value;
    const response = await fetch(`https://assinment4-gamma.vercel.app/api/landlord/requests/${requestId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    cookie: `access_tocken=${authToken}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });
   


  const text = await response.json();
  

  return text;
}
   
            
