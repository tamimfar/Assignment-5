"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import React from 'react'
const page = () => {
    const router = useRouter();
    setTimeout(() => {
       return router.push("/deshboard/tenant")
    }, 5000);
  return (
    <div>
      <Image src="https://i.pinimg.com/originals/74/2f/7e/742f7ea29cbfd7fd3f4848f17e621070.gif" alt="success" width={500} height={500} className='mx-auto mt-10' />
      <h1 className='text-center text-2xl font-bold mt-5'>Payment Successful</h1>
    </div>
  )
}
  

export default page
