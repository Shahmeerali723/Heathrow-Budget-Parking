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
        <div className='sm:container p-[50px] space-y-[20px]'>

            <div className='md:w-[35%] mx-auto sm:w-[85%] w-full space-y-[6px]'>
            <h2 className='uppercase text-3xl font-bold mb-2 sm:text-5xl text-center'>blog Section</h2>
            <p className='text-xs sm:text-lg text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4'>
                {cardData.map((item:any, index:any)=>{

                   return <BlogCard key={index} {...item}/>
                })}
            </div>

        </div>
    )
}

export default BlogSection