import Image from 'next/image';
import React from 'react'
import { HiUsers } from "react-icons/hi";
const ServiceCard = ({...props}) => {

  const {data} = props

  return (
    <div className='w-full rounded-2xl border-primary border-2 flex flex-col justify-center items-center p-4 py-10 gap-4 text-center'>
        <div className='w-fit p-3  sm:p-4  bg-white rounded-full shadow-md shadow-primary text-primary '>
          <Image src={data?.image || "/park.png"} alt='' width={40} height={100}/>
        </div>
        <h3 className='text-lg sm:text-xl font-semibold'>
            {data?.title || "Best Price Guarantee"}
        </h3>
        <p className='text-xs sm:text-sm md:text-lg '>{data?.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas dignissimos ."}</p>
    </div>
  )
}

export default ServiceCard