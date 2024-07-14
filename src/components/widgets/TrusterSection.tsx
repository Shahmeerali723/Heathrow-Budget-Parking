import Image from 'next/image'
import React from 'react'

const TrusterSection = () => {
    return (
        <div

            className={` flex flex-col items-center  w-full  p-4  `}

            style={{ backgroundImage: `url(${"/trusted.png"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="relative p-4  text-white  z-10">
                <h2 className="text-3xl font-bold mb-2 sm:text-5xl text-center">Airport Services</h2>
                <p className="text-xs sm:text-sm text-center">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div className='py-6 px-8 rounded-lg bg-white '>
                    <Image src={'/trust1.png'} className='w-full' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white '>
                    <Image src={'/trust2.png'} className='w-full' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white '>
                    <Image src={'/trust3.png'} className='w-full' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white '>
                    <Image src={'/trust4.png'} className='w-full' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white   flex justify-center'>
                    <Image src={'/trust5.png'} className='w-full' alt='' width={100} height={100} />
                </div>
                <div className='  rounded-lg bg-white p-2  flex justify-center'>
                    <Image src={'/trust6.png'} className='object-cover' alt='' width={100} height={100} />
                </div>


            </div>


        </div>
    )
}

export default TrusterSection