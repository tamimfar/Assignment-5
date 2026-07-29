"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export const loginAction = async (prev: unknown, formData: FormData) => {


    const payload = {
        email: formData.get("email"),
        password: formData.get("password")
    }
    const res = await fetch("https://assinment4-gamma.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    let result = await res.json()

    if (result.success) {
        const cookieStore = await cookies()
        cookieStore.set("accessToken", result.data.accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "lax",
        })

        cookieStore.set("refreshToken", result.data.refreshToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "lax",
        })
        // const cookieDecode = jwt.decode(result.data.accessToken) as JwtPayload
        // console.log(result.data.accessToken)
        redirect('/deshboard')

    }
    return result



}