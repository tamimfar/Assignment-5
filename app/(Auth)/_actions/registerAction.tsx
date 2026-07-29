"use server";

export const registerAction = async (formData:FormData) => {



    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    }
   

    console.log(user ,"hello")

}