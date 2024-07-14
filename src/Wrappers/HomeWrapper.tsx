import AirportForm from '@/components/forms/AirportForm'
import ParkingComparisonTable from '@/components/shared/ParkingTable'
import AboutUs from '@/components/widgets/AboutUs'
import BlogSection from '@/components/widgets/BlogSection'
import ContactSection from '@/components/widgets/ContactSection'
import Hero from '@/components/widgets/Hero'
import OurExpertise from '@/components/widgets/OurExpertise'
import OurServiceSection from '@/components/widgets/OurServiceSection'
import ServiceSection from '@/components/widgets/ServiceSection'
import TestimonialSection from '@/components/widgets/TestimonialSection'
import TrusterSection from '@/components/widgets/TrusterSection'
import React from 'react'

const HomeWrapper = () => {
    return (
        <div className='flex flex-col gap-8 sm:gap-16'>
            <Hero />
            <AirportForm />
            <ServiceSection />

            <AboutUs />
            <OurExpertise />
            <OurServiceSection />
            <TestimonialSection />
            <TrusterSection />
            <ParkingComparisonTable />
            <BlogSection />
            <ContactSection />
        </div>
    )
}

export default HomeWrapper