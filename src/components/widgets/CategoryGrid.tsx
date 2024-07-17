import Image from 'next/image'
import React from 'react'

const CategoryGrid = () => {
  return (
    <div>
        

        <div className='sm:block hidden space-y-[20px]'>
            <div>
                
                <h2 className='text-3xl sm:text-4xl md:text-[40px] sm:text-start text-center font-bold text-[#232536] '>
                    Category                </h2>
            </div>
                <section className="grid grid-cols-12 gap-4 w-full h-[calc(100vh-100px)] ">
                    <div className="col-span-12 lg:col-span-8 grid grid-rows-12 gap-4">
                        <div className="row-span-8 relative aspect-w-16 aspect-h-9 sm:aspect-none">
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">Design</h2>
                                <p className="text-xs md:text-sm">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </div>
                            <Image
                                src="/car1.png"
                                alt="Design"
                                className="object-cover rounded-lg"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="row-span-4 grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-8 relative aspect-w-16 aspect-h-9 sm:aspect-none">
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                                    <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Events</h2>
                                    <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                </div>
                                <Image
                                    src="/car3.png"
                                    alt="Events"
                                    className="object-cover rounded-lg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4 relative aspect-w-16 aspect-h-9 sm:aspect-none">
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                                    <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Review</h2>
                                    <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                                </div>
                                <Image
                                    src="/car4.png"
                                    alt="Review"
                                    className="object-cover rounded-lg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
                        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-none">
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                                <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Design</h2>
                                <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </div>
                            <Image
                                src="/car2.png"
                                alt="Design"
                                className="object-cover rounded-lg"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-none">
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                                <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Collaboration</h2>
                                <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                            </div>
                            <Image
                                src="/car5.png"
                                alt="Collaboration"
                                className="object-cover rounded-lg"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <section className='sm:hidden block space-y-[20px]'>
            <div>
                
                <h2 className='text-3xl sm:text-4xl md:text-[40px] sm:text-start text-center font-bold text-[#232536] mb-4'>
                    Category                </h2>
            </div>
                
                <div className="grid grid-row-5 gap-4">

                    <div className="relative  h-52">
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                            <h2 className="text-xl md:text-2xl font-bold mb-2">Design</h2>
                            <p className="text-xs md:text-sm">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <Image
                            src="/car1.png"
                            alt="Design"
                            className="object-cover rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative  h-52">
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                            <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Design</h2>
                            <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <Image
                            src="/car2.png"
                            alt="Design"
                            className="object-cover rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative  h-52">
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                            <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Events</h2>
                            <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <Image
                            src="/car3.png"
                            alt="Events"
                            className="object-cover rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative  h-52">
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                            <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Review</h2>
                            <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <Image
                            src="/car4.png"
                            alt="Review"
                            className="object-cover rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative  h-52">
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white rounded-lg z-10">
                            <h2 className="text-base md:text-lg font-bold mb-1 md:mb-2">Collaboration</h2>
                            <p className="text-xs">Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                        </div>
                        <Image
                            src="/car5.png"
                            alt="Collaboration"
                            className="object-cover rounded-lg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                </div>
            </section>


    </div>
  )
}

export default CategoryGrid