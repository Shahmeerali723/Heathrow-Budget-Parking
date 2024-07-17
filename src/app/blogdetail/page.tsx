import BlogDetail from '@/components/widgets/BlogDetail'
import Check from '@/components/widgets/Check'
import FAQ from '@/components/widgets/FAQ';
import PopularComment from '@/components/widgets/PopularComents';
import PopularSection from '@/components/widgets/PopularSection';
import SocialShare from '@/components/widgets/SocialShare';
import React from 'react'

const placesToVisit = [
  {
    name: "1. Sheikh Zayed Grand Mosque",
    description: "Abu Dhabi's Architectural Marvel: Visit Abu Dhabi's famous Grand mosque with Sayara car rentals. It is a great tourist attraction, and you will be stunned to see this mosque. It blends designs like Mameluke, Ottoman, and Fatimid, making it more attractive. It is made with fantastic glasswork, mosaics, and delicate carvings on its walls and floors. This mosque is so big that it can hold twenty thousand people simultaneously."
  },
  {
    name: "2. Ferrari World",
    description: "Where Thrills Meet Luxury in Abu Dhabi: Ferrari World in Abu Dhabi is a super cool theme park with Formula One racing excitement! Many people visit this special place, especially when on a trip planned by Dubai Tourism. It's a perfect spot for friends and families to have a great time together."
  },
  {
    name: "3. Observation Deck at 300",
    description: "The observation deck at 300 is super tall, giving a view of the city at 74 floors of Jumeirah at the Etihad Towers Hotel! It's like the Burj Khalifa in Dubai and the highest spot in the city. You have to pay to go up there. It's not just a view; it's a fancy experience. They even have a dress code! It's dramatic high tea in the afternoon. They have a special menu just for this, and you get to eat delicious food while looking at the super cool views around the city. It's an excellent time for anyone who visits! Book a car from Sayara Car Rentals for a great experience. It is the best car hire service in the UAE. (Dubai, Abu Dhabi, Sharjah)"
  },
  {
    name: "4. Yas Waterworld",
    description: "This park has super cool things to try, like the world's first hydro-magnetic tornado water rafting ride and the most giant surfable sheet wave ever! You can have so much fun with different rides, whether you like a little adventure or a lot. Yas Waterworld offers you nice rides in which to chill. It is an enjoyable place to visit. You can enjoy the cool vibes of Yas Island. So, if you want to spend some calm time with friends and family, Yas Island has something for everyone! Make sure to book your Peugeot car model to visit this place and enjoy big thrills at Yas Island."
  }
];

const page = () => {
  return (
    <div className='sm:container p-2 flex flex-col gap-3 sm:gap-8'>
      <BlogDetail
      title="Cloud Computing: A Game-Changer for Small Businesses"
      description="Explore how cloud computing is revolutionizing the way small businesses operate and compete in the digital age."
      places={placesToVisit}
    />
        <Check/>

        <FAQ/>
        <PopularComment/>
        <SocialShare/>
        <PopularSection/>

        
    </div>
  )
}

export default page