"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
type LoginResponse = {
    success: true,
    status: 200,
    message: string,
    data: {
        access_tocken: string,
        refresh_tocken: string
    }
}
export const loginAction = async (prev: LoginResponse, formData: FormData) => {


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
    console.log(result.data.access_tocken)
    if (result.success) {
        const cookieStore = await cookies()
        cookieStore.set("access_tocken", result.data.access_tocken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "lax",
        })

        cookieStore.set("refresh_tocken", result.data.refresh_tocken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "lax",
        })
        // const cookieDecode = jwt.decode(result.data.accessToken) as JwtPayload
        // console.log(result.data.accessToken)
        redirect('/')

    }
    return result



}