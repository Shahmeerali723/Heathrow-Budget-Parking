import React from 'react'
import BlogCard from '../shared/BlogCard';



const BlogSection = () => {


    const cardData = [
        {
        date: "5/7/2024",
        rating: 4.5,
        title: "Lorem Ipsum",
        description: "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
        imageUrl: "/blog1.png", // Update this with your image path
        buttonText: "Read More"
    },
        {
        date: "5/7/2024",
        rating: 4.5,
        title: "Lorem Ipsum",
        description: "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
        imageUrl: "/blog2.png", // Update this with your image path
        buttonText: "Read More"
    },
        {
        date: "5/7/2024",
        rating: 4.5,
        title: "Lorem Ipsum",
        description: "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
        imageUrl: "/blog3.png", // Update this with your image path
        buttonText: "Read More"
    },
    ];




    return (
        <div className='sm:container p-2'>

            <h2 className='uppercase text-2xl sm:text-4xl md:text-5xl font-bold text-center'>blog Section</h2>
            <p className='text-xs sm:text-lg text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4'>
                {cardData.map((item:any, index:any)=>{

                   return <BlogCard key={index} {...item}/>
                })}
            </div>

        </div>
    )
}

export default BlogSection