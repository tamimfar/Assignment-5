"use server";
import { cookies } from "next/headers";

export default async function GetRentaleRequest() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_tocken")?.value || null;

    const res = await fetch("https://assinment4-gamma.vercel.app/api/rental", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            cookie: `access_tocken=${token}`,
        }
    });
    const data = await res.json();
    
    return data;
}