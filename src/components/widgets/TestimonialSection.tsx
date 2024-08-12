import React, { useState } from 'react';
import TestimonialCard from '../shared/TestimonialCard';

const TestimonialSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cardsPerSlide = 3;

    const testimonials = [
        {
            name: "Sarah M.",
            text: "I was thoroughly impressed with the ease of booking and the affordability of the parking services. The Park and Ride option was convenient, and the shuttle was quick and reliable. Will definitely use again!",
            image: "/person1.png",
            rating: 5
        },
        {
            name: "James T.",
            text: "The Meet and Greet service made my trip so much smoother. Dropping off my car at the terminal and having it ready upon return was a game-changer. Highly recommend for anyone looking for a hassle-free experience.",
            image: "/person2.png",
            rating: 4
        },
        {
            name: "Emily R.",
            text: "I was pleasantly surprised by the low rates and high level of security. The onsite parking was easy to access, and I felt confident leaving my car for an extended stay. Fantastic service!",
            image: "/person3.png",
            rating: 5
        },
        {
            name: "Michael B.",
            text: "I opted for the long-stay parking, and it was worth every penny. The facility was secure, and the shuttle service was prompt. Excellent value for money, especially for long trips.",
            image: "/person1.png",
            rating: 4
        },
        {
            name: "Laura K.",
            text: "Combining hotel and parking was the best decision! The package deal was affordable, and the convenience of not worrying about parking before an early flight was priceless. Top-notch service!",
            image: "/person2.png",
            rating: 5
        },
        {
            name: "David P.",
            text: "The premium valet parking exceeded my expectations. The service was professional, and my car was well taken care of. This will be my go-to parking option at Heathrow from now on.",
            image: "/person3.png",
            rating: 5
        }
    ];

    const numSlides = Math.ceil(testimonials.length / cardsPerSlide);

    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='sm:container w-full p-8 space-y-6'>
            <div>
                <h2 className='text-3xl font-bold mb-4 text-center'>
                    What Our Customers Are Saying
                </h2>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <div className='flex' style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {Array.from({ length: numSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className='flex'>
                                {testimonials.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((item, index) => (
                                    <TestimonialCard key={index} {...item} />
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
                            className={`w-4 h-4 rounded-full cursor-pointer ${index === currentSlide ? 'bg-green-500' : 'bg-gray-400'}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
