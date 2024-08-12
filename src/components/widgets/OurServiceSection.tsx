// components/OurServiceSection.js
import React, { useState } from 'react';
import OurServiceCard from '../shared/OurServiceCard';

const OurServiceSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cardsPerSlide = 3;

    const data = [
        {
            title: "Airport Parking",
            desc: "Convenient and secure parking options at Heathrow.",
            image: "/airport parking.png"
        },
        {
            title: "Meet and Greet Parking",
            desc: "Hassle-free valet service right at the terminal.",
            image: "/Meet and greet parking.png"
        },
        {
            title: "Airport Transfer",
            desc: "Reliable transport to and from the airport.",
            image: "/Airport transfer.png"
        },
        {
            title: "Park and Ride",
            desc: "Economical parking with quick shuttle service.",
            image: "/park and ride.png"
        },
        {
            title: "Onsite Parking",
            desc: "Prime parking spots within the airport premises.",
            image: "/onsite parking.png"
        },
        {
            title: "Long & Short Stay",
            desc: "Flexible parking options for any trip duration.",
            image: "/Long and short stay.png"
        },
        {
            title: "Premium & Valet Parking",
            desc: "Luxury and convenience with our valet service.",
            image: "/premium parking.png"
        },
        {
            title: "Hotel & Parking",
            desc: "Combine your stay and parking for added convenience.",
            image: "/hotel and parking.png"
        },
        {
            title: "Airport Lounges",
            desc: "Relax in comfort before your flight with exclusive lounge access.",
            image: "/loungue icon.png"
        }
    ];

    const numSlides = Math.ceil(data.length / cardsPerSlide);

    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='sm:container w-full p-[50px] space-y-[20px]'>
            <div>
                <h2 className='text-3xl font-bold mb-2 sm:text-5xl text-center'>
                    Our Service
                </h2>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <div className='flex' style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {Array.from({ length: numSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className='flex'>
                                {data.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((item, index) => (
                                    <OurServiceCard key={index} data={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Slide Indicators */}
                <div className='flex justify-center space-x-2 mt-6'>
                    {Array.from({ length: numSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-green-500' : 'bg-gray-400'}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServiceSection;
