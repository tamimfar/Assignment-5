"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const logout = async () => {
    const cookieStore = await cookies()
    cookieStore.delete("access_tocken")
    cookieStore.delete("refresh_tocken")

    revalidateTag("profile", "max");
    return {
        success: true
    }
}