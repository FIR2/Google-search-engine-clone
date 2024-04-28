import Link from 'next/link'
import React from 'react'
import { BsGrid3X3Gap } from "react-icons/bs";


export const HomeHeader = () => {
  return (
    <header className="flex justify-end text-sm p-5">
     <div className='flex space-x-4 items-center'>
         <Link href={"https://mail.google.com"} target='_blank' className='hover:underline'>
           Gmail
         </Link>
         <Link href={"https://image.google.com"} className='hover:underline'>
              Image
         </Link>
         <BsGrid3X3Gap className='bg-transparent hover:bg-gray-200 rounded-md text-[30px]'/>
         <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
     </div>
    </header>
  )
}
