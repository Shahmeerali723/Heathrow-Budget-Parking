import CategoryGrid from '@/components/widgets/CategoryGrid';
import ContactSection from '@/components/widgets/ContactSection';
import GuestPostSection from '@/components/widgets/GuestPostSection'
import LatestPost from '@/components/widgets/LatestPost';
import PopularComment from '@/components/widgets/PopularComents';
import PopularSection from '@/components/widgets/PopularSection';
import SocialShare from '@/components/widgets/SocialShare';
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='sm:container flex flex-col gap-3 sm:gap-6'>

            <div className="flex flex-col p-4 gap-10 py-[50px]">
                <Head>
                    <title>Reliable Ride</title>
                </Head>
                <header className="text-start mb-8">
                    <h1 className="text-4xl  mb-4">Where Every <span className="text-[#193D1C] font-semibold">Journey</span> Begins:</h1>
                    <h2 className="text-4xl  mb-6">Your Reliable <span className="text-[#193D1C] font-semibold">Ride</span> Awaits!</h2>
                    <div className="relative w-full max-w-md ">
                        <input
                            type="text"
                            placeholder="Search by keyword"
                            className="w-full p-3 border rounded-md shadow-sm bg-[#F6F7F9] focus:outline-none"
                        />
                    </div>
                </header>
                <main className="flex flex-col lg:flex-row items-center  w-full">
                    <Image width={1400} height={100} src="/car.png" alt="Car" className="sm:w-[40%] w-[60%] rounded-md mb-4 lg:mb-0 lg:mr-6" />
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#232536] mb-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor.</h3>
                        <p className="text-[#6D6E76] text-xs sm:text-base  mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <button className="self-start px-6 py-2 bg-primary text-white rounded-md hover:bg-primary">Read More</button>
                    </div>
                </main>
            </div>

            <LatestPost />

            <CategoryGrid/>
            <PopularSection />
            <GuestPostSection />
            <PopularComment />
            <SocialShare />
            <ContactSection />


        </div>
    )
}

export default page;
