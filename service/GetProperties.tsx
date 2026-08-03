



export const GetProperties = async () => {

    // const cookieStore = await cookies()
    // const accessToken = cookieStore.get("access_tocken")?.value || null
    // if (!accessToken) {
    //     return {
    //         success: false,
    //         message: "unauthorized"
    //     }
    // }
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
    console.log(result)
    return result
}