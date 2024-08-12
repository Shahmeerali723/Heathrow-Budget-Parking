import React from 'react';
import BlogCard from '../shared/BlogCard';

const BlogSection = () => {
    const cardData = [
        {
            title: "Birmingham airport",
            imageUrl: "/birmingham-airport.webp",
        },
        {
            title: "Bristol airport",
            imageUrl: "/bristol.webp",
        },
        {
            title: "East midlands airports",
            imageUrl: "/east-midlands-airport.webp",
        },
        {
            title: "Edinburgh Airport",
            imageUrl: "/edinburgh-airport.webp",
        },
        {
            title: "Gatewick airport",
            imageUrl: "/gatwick-parking.webp",
        },
        {
            title: "Glasgow airport",
            imageUrl: "/glasgow.webp",
        },
        {
            title: "Heathrow airport",
            imageUrl: "/london-heathrow.webp",
        },
        {
            title: "Liverpool airport",
            imageUrl: "/liverpool-airport.webp",
        },
        {
            title: "luton airport",
            imageUrl: "/london-luton.webp",
        },
        {
            title: "Manchester Airport",
            imageUrl: "/manchester.webp",
        },
        {
            title: "southend airport",
            imageUrl: "/london-southend-airport.webp",
        },
        {
            title: "Standsted airport",
            imageUrl: "/london-stansted.webp",
        },
    ];

    return (
        <div className='sm:container p-[50px] space-y-[20px]'>
            <div className='md:w-[55%] mx-auto sm:w-[85%] w-full space-y-[6px]'>
                <h2 className='uppercase text-3xl font-bold mb-2 sm:text-5xl text-center mt-[-200px]'>Where to Find Us</h2>
                <p className='text-center'>Select your Heathrow terminal, compare parking options, prices, and services across a range of budget-friendly car parks. Don't see the service you need? We're constantly expanding, and new parking options will be available soon to meet your needs. Stay tuned for more additions!</p>
            </div>
            
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
                {cardData.map((item, index) => (
                    <BlogCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default BlogSection;
