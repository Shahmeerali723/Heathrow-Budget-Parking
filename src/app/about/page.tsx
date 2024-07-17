import { Button } from '@/components/ui/button'
import ContactSection from '@/components/widgets/ContactSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-5 mt-5 text-start'>

            <section className='container mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg'>
                    <div className='p-10 flex flex-col justify-between'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#313131]'>
                            We strive to provide comfort and ensure your safety throughout the Ride.
                        </h2>
                        <Button className='bg-primary px-10 font-semibold w-fit mt-8'>Get Started</Button>
                    </div>
                    <div className='relative h-96 md:h-auto'>
                        <Image src='/aboutmain.png' className='rounded-b-lg md:rounded-r-lg' alt='' layout='fill' objectFit='cover' />
                    </div>
                </div>
            </section>

            <section className="  py-16">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between md:w-1/2 py-8 ">
                        <div className="absolute mt-32 mr-20   md:mr-12 rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-72 md:h-72">
                            <Image
                                src="/about2.png" // Replace with your image path
                                alt="Person"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="relative top-0 left-0 md:mb-48 z-10 ml-20 sm:ml-36 md:ml-48 md:mt-0 rounded-lg overflow-hidden shadow-lg w-32 h-32 md:w-48 md:h-48 ">
                            <Image
                                src="/about1.png" // Replace with your image path
                                alt="City"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="max-w-lg mt-20 md:mt-0 text-center md:text-left md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-rockstar text-[#313131]">Our Story</h2>
                        <p className="mb-6 font-poppins">
                            {"is simply dummy text of the printing and typesetting industry."}
                        </p>
                        <p className="mb-6 font-poppins">
                            {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
                        </p>
                        <p className="mb-6 font-poppins">
                            {"but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        </p>

                    </div>
                </div>
            </section>
            <section className=" py-16">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4">

                    <div className="max-w-lg mt-20 md:mt-0 text-center md:text-left md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-rockstar text-[#313131]">Our Story</h2>
                        <p className="mb-6 font-poppins">
                            {"is simply dummy text of the printing and typesetting industry."}
                        </p>
                        <p className="mb-6 font-poppins">
                            {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
                        </p>
                        <p className="mb-6 font-poppins">
                            {"but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        </p>

                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-end md:w-1/2 py-8 ">
                        <div className="absolute mt-32 ml-20   md:mb-32 rounded-lg overflow-hidden shadow-lg w-48 h-48 md:w-72 md:h-72">
                            <Image
                                src="/about3.png" // Replace with your image path
                                alt="Person"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="relative top-0 left-0 md:mt-48 z-10 mr-20 sm:mr-36 md:mr-48 md:mb-0 rounded-lg overflow-hidden shadow-lg w-32 h-32 md:w-48 md:h-48 ">
                            <Image
                                src="/about4.png" // Replace with your image path
                                alt="City"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
                    <div className='max-w-lg text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-[#313131]'>Our Mission</h2>
                        <p className='mb-6'>
                            {"is simply dummy text of the printing and typesetting industry."}
                        </p>
                        <p className='mb-6'>
                            {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
                        </p>
                        <p className='mb-6'>
                            {"but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='relative h-80 md:h-96'>
                            <Image src='/about5.png' className='rounded-lg' alt='' layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />

        </div>
    )
}

export default page