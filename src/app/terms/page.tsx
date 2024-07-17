import ContentScroll from '@/components/shared/ContentScroll'
import DateTimeInput from '@/components/shared/DateTimeInput'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='flex flex-col gap-5 py-[50px] container'>
        <div className='md:w-[50%] mx-auto sm:w-[80%] w-full space-y-[20px] text-center sm:p-0    '>
            <h1 className='capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-extraDark'>
            terms & conditions
            </h1>
            <p className='font-semibold text-xs sm:text-sm text-secondary-extraDark'>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
            </p>
        </div>

    <ContentScroll/>
    </div>
    
     </>
  )
}

export default Page