import React from 'react'
import ServiceCard from '../shared/ServiceCard'

const ServiceSection = () => {


  const data = [
    {
    title :"Best Price Guarantee",
    desc : "Get the lowest rates on Heathrow parking, guaranteed. ",
    image :"/guarantee.png"
  },
    {
    title :"Easy Booking",
    desc : "Quick and hassle-free online reservations. ",
    image :"/booking.png"
  },
    {
    title :"Airport & Hotel Parking",
    desc : "Convenient parking solutions for both airport and hotel stays. ",
    image :"/customer.png"
  },
    {
    title :"24/7 Customer Services",
    desc : "Support available anytime, day or night. ",
    image :"/park.png"
  },
]


  return (
    <div className='sm:container p-2'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
           {data.map((item, index)=>{

           return <ServiceCard key={index} data={item}/>
           })}
        </div>
        
    </div>
  )
}

export default ServiceSection