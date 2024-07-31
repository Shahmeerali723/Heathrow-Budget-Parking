import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { ImMeter } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { GiCaptainHatProfile } from "react-icons/gi";

const OurExpertise = () => {
  return (
    <div className='w-full flex items-center'>

        <div className='sm:container w-full'>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 p-4 '>

                <div className='flex shadow-lg  gap-5 p-2 rounded-xl items-center '>
                    <div className='  w-fit p-2 text-xl sm:text-5xl rounded-lg text-secondary'>
                        <FaCarAlt/>
                    </div>
                    <h3 className=' sm:text-xl lg:text-2xl font-semibold uppercase'>
                    dummy text printing
             </h3>
                </div>
                <div className='flex shadow-lg  gap-5 p-2 rounded-xl items-center'>
                    <div className='  w-fit p-2 text-xl sm:text-5xl rounded-lg text-secondary'>
                        <ImMeter/>
                    </div>
                    <h3 className=' sm:text-xl lg:text-2xl font-semibold uppercase'>
                    dummy text printing
             </h3>
                </div>
                <div className='flex shadow-lg  gap-5 p-2 rounded-xl items-center'>
                    <div className='  w-fit p-2 text-xl sm:text-5xl rounded-lg text-secondary'>
                        <HiUsers/>
                    </div>
                    <h3 className=' sm:text-xl lg:text-2xl font-semibold uppercase'>
                    dummy text printing
             </h3>
                </div>
                <div className='flex shadow-lg  gap-5 p-2 rounded-xl items-center'>
                    <div className='  w-fit p-2 text-xl sm:text-5xl rounded-lg text-secondary'>
                        <GiCaptainHatProfile/>
                    </div>
                    <h3 className=' sm:text-xl lg:text-2xl font-semibold uppercase'>
                    dummy text printing
             </h3>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default OurExpertise