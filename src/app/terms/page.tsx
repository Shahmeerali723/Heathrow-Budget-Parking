import ContentScroll from '@/components/shared/ContentScroll'
import DateTimeInput from '@/components/shared/DateTimeInput'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='flex flex-col gap-5 py-[50px] container'>
        <div className='md:w-[50%] mx-auto sm:w-[80%] w-full space-y-[20px] text-center sm:p-0    '>
            <h1 className='capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-extraDark'>
            Terms & Conditions
            </h1>
            
        </div>

    <ContentScroll/>
    </div>
    
     </>
  )
}

export default Page