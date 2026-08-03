"use server";
import { cookies } from "next/headers";

export default async function GetRequest() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_tocken")?.value || null;

   
    const res = await fetch("https://assinment4-gamma.vercel.app/api/landlord/requests", {
        headers: {
            "Content-Type": "application/json",
            cookie: `access_tocken=${accessToken}`,
        }
    });
    const data = await res.json();
    console.log(data);
    return data;
}