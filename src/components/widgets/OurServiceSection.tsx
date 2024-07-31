import React from 'react'
import OurServiceCard from '../shared/OurServiceCard'

const OurServiceSection = () => {


    const data = [
        {
            title :"Meet and Greet",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service5.png"
        },
        {
            title :"PARK AND RIDE",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service2.png"
        },
        {
            title :"ONSITE PARKING",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service3.png"
        },
        {
            title :"Airport Transfer",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service4.png"
        },
        {
            title :"Long & Short Stay",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service5.png"
        },
        {
            title :"Premium & Valet Parking",
            desc : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
            image:"/service6.png"
        },
    ]


  return (
    <div className='sm:container w-full p-[50px] space-y-[20px]'>
        
        <div>
            <h2 className='text-3xl font-bold mb-2 sm:text-5xl text-center'>
                Our Service
            </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {data.map((item, index)=>{
                return <OurServiceCard key={index} data={item}/>
            })}
        </div>
    </div>
  )
}

export default OurServiceSection