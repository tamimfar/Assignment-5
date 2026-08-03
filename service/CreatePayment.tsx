"use server";

import { cookies } from "next/headers";

export default async function CreatePayment(rentalId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_tocken")?.value || null;
  const res = await fetch("https://assinment4-gamma.vercel.app/api/payments/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        cookie: `access_tocken=${token}`,
    },
    body: JSON.stringify({ rentalId })
  });
  const data = await res.json();
  console.log("CreatePayment response:", data);
  return data;
}
