import React from 'react'
import ServiceCard from '../shared/ServiceCard'

const ServiceSection = () => {
  return (
    <div className='sm:container p-2'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
        
    </div>
  )
}

export default ServiceSection