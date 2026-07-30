"use server";

import { cookies } from "next/headers";

export const GetProfile = async () => {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get("access_tocken")?.value || null

    if (!accessToken) {
        return {
            success: false,
            message: "unauthorized"
        }
    }
    const res = await fetch("https://assinment4-gamma.vercel.app/api/auth/me", {

        headers: {
            "Content-Type": "application/json",
            // "Authorization": `${accessToken}`
            cookie: `access_tocken=${accessToken}`
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ["profile"]
        }
    })
    let result = await res.json()
    return result


}