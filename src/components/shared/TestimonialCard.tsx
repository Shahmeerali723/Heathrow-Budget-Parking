// components/TestimonialCard.js
import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ name, text, image }: any) => {
    return (
        <div className="bg-white px-5 py-12 lg:p-16  rounded-3xl shadow-[0_2px_10px_2px_rgba(0,0,0,0.2)]  text-center max-w-sm mx-auto ">
            <div className='flex items-center gap-3'>
                <Image
                    src={image}
                    alt={`${name}'s profile picture`}
                    className="w-16 h-16 rounded-full "
                    width={100}
                    height={100}
                />
                <div className='p-2'>
                    <h2 className="text-lg font-semibold ">{name}</h2>
                    <div className="flex justify-start ">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 fill-current text-[#D48032]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.262L12 18.896l-7.417 4.961L6 15.595 0 9.75l8.332-1.595L12 .587z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <p className="text-black mt-4 text-left text-xs sm:text-sm md:text-lg">{text}</p>
        </div>
    );
};

export default TestimonialCard;
