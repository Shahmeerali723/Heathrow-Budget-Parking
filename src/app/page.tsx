import AirportForm from "@/components/forms/AirportForm";
import BlogCard from "@/components/shared/BlogCard";
import ParkingComparisonTable from "@/components/shared/ParkingTable";
import ServiceCard from "@/components/shared/ServiceCard";
import AboutUs from "@/components/widgets/AboutUs";
import BlogSection from "@/components/widgets/BlogSection";
import Hero from "@/components/widgets/Hero";
import ServiceSection from "@/components/widgets/ServiceSection";
import Image from "next/image";

export default function Home() {

  const cardData = {
    date: "5/7/2024",
    rating: 4.5,
    title: "Lorem Ipsum",
    description: "Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
    imageUrl: "/blog1.png", // Update this with your image path
    buttonText: "Read More"
  };


  return (
    
    <>
 
    <Hero/>
    <AirportForm/>
    <ServiceSection/>
   <BlogSection/>
   <AboutUs/>
    </>
  );
}
