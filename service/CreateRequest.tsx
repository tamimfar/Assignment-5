"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

export default async function createRequest(propertyId: string) {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_tocken")?.value || null

    if (!accessToken) {
        return redirect("/login")
    }
    const decode =  jwt.decode(accessToken) as JwtPayload
    const payload = {
        propertieId: propertyId,
        tenantId: decode.id}

    const res = await fetch("https://assinment4-gamma.vercel.app/api/rental", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `${accessToken}`
            cookie: `access_tocken=${accessToken}`
        },
         body: JSON.stringify(payload),
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ["profile"]
        }
    
    })

    let result = await res.json()
   
    return result
}