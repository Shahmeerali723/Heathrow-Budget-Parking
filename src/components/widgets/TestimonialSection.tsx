import React from 'react'
import TestimonialCard from '../shared/TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className='sm:container w-full p-2'>

        <div className='text-center flex flex-col gap-2 mb-5'>
            <h2 className='text-3xl sm:text-5xl font-semibold '>
            Testimonials
            </h2>
            <p className='text-xs sm:text-sm md:text-lg'>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <TestimonialCard {...{
        name: 'Lorem Ipsum',
        text: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s,',
        image: '/person1.png' // Replace with the actual path to the image
      }} />
        <TestimonialCard {...{
        name: 'Lorem Ipsum',
        text: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s,',
        image: '/person2.png' // Replace with the actual path to the image
      }} />
        <TestimonialCard {...{
        name: 'Lorem Ipsum',
        text: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s,',
        image: '/person3.png' // Replace with the actual path to the image
      }} />
        </div>
        
    </div>
  )
}

export default TestimonialSection