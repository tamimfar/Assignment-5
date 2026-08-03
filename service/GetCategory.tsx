"use server";

import React from 'react'

const GetCategory = async () => {
    const  res = await fetch("https://assinment4-gamma.vercel.app/api/categories",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    });
    const categories = await res.json();
    console.log("GetCategory response:", categories);
    return categories;
}

export default GetCategory
