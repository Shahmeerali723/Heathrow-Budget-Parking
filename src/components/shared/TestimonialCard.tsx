import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ name, text, image, rating }) => {
    return (
        <div className="w-[384px] h-[370px] p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center mx-2">
            <div className="flex items-center mb-4  bg-gray-50 rounded-lg shadow-lg">
                <Image
                    src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full ml-[-140px] mt-[-100px] w-[100px]"
                />
                <div className="ml-4">
                    {/* Rating */}
                    <div className="flex items-center">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <Image
                                key={index}
                                src={index < rating ? "/star-filled.png" : "/star-filled.png"}
                                alt="Rating Star"
                                width={20}
                                height={600}
                                className="mr-1 h-[10px] w-[50px] mt-[-120px]"
                            />
                        ))}
                    </div>
                    {/* Name */}
                    <h3 className="text-gray-900 font-semibold text-lg mt-[-50px]">{name}</h3>
                </div>
            </div>
            <p className="text-gray-700 text-center mb-4">{text}</p>
        </div>
    );
};

export default TestimonialCard;
