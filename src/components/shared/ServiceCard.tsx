import React from 'react'
import { HiUsers } from "react-icons/hi";
const ServiceCard = () => {
  return (
    <div className='w-full rounded-lg border-primary border-2 flex flex-col justify-center items-center p-3 gap-2 text-center'>
        <div className='w-fit p-4  bg-white rounded-full shadow-md text-primary '>
            <HiUsers className='text-5xl'/>
        </div>
        <h3 className='text-xl font-semibold'>
            Best Price Guarantee
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas dignissimos .</p>
    </div>
  )
}

export default ServiceCard