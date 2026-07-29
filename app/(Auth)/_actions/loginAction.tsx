"use server";

export const loginAction = async (formData:FormData) => {

   
    const payload = {
        email: formData.get("email"),
        password:formData.get("password")
    }
    const res = await fetch("https://assinment4-gamma.vercel.app/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
    })
   let result = await res.json()
    
    console.log(result,"Login page")

}