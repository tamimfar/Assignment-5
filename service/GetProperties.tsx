"use server";



export const GetProperties = async () => {

  
      const res = await fetch("https://assinment4-gamma.vercel.app/api/properties", {

        headers: {
            "Content-Type": "application/json",   
        },
        cache: "no-store",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ["profile"]
        }
    })
    let result = await res.json()
  
    return result
}