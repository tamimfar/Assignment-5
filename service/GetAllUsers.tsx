
"use server";

import { cookies } from "next/headers";

export default async function GetAllUsers() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_tocken")?.value || null;
    const res = await fetch("https://assinment4-gamma.vercel.app/api/admin/users", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        cookie: `access_tocken=${token}`,
    },
   
}
 

    )
const data = await res.json();
  console.log("GetAllProperties response:", data);
  return data;
}