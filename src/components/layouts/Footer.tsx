import Image from 'next/image';
import React from 'react';
import { BsFillAirplaneFill, BsTrainFrontFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-cover bg-center bg-secondary-dark text-white py-10 text-xs sm:text-sm" style={{ backgroundImage: "url('/footer-bg.png')" }}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-4">
        <div className="space-y-4 md:flex items-center justify-between ">
          <div>
            <h2 className="text-2xl font-bold">Subscribe Our Newsletter</h2>
            <p>Know more about our Privacy Policy - you can easily unsubscribe any time!</p>
          </div>

          <div className="flex items-center md:w-[50%]">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="w-full p-3 rounded-md text-black"
            />
            <button className="bg-primary  p-3 rounded-md ml-[-20px]">SUBSCRIBE</button>
          </div>
        </div>
        <hr className='' />
        <div className='sm:container'>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="space-y-4">
              <Image src="/footerlogo.png" alt="Heathrow Budget Parking" width={200} height={100} className="" />
              <p className='sm:text-lg text-xs'>
                CabX is a reliable cab facilitator that has partnered with numerous reliable cab services. CabX offers two types of services: B2B & B2C. The services include a web-based dashboard for managing bookings, real-time tracking of vehicles, & detailed reporting. These services are aimed at streamlining transportation needs, saving time and money for businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-5 w-full ">Airport</h3>
                <ul className="space-y-3">
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Gatwick Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Heathrow Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Birmingham Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Manchester Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Stansted Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Luton Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Bristol Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Edinburgh Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />Glasgow Airport</li>
                  <li className='flex items-center gap-3'><BsFillAirplaneFill />London City Airport</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-5 w-full ">Important Reading</h3>
                <ul className="space-y-3">

                  <li><Link href={'/about'}> About Us </Link></li>
                  {/* <li><Link href={'/blogs'}>Blog</Link></li> */}
                  <li><Link href={'/contact'}>Contact Us</Link> </li>
                  <li > <Link href={"/policy"}>Privacy Policy</Link></li>
                  <li ><Link href={'/terms'}>Terms & Conditions </Link></li>
                  
                  <li><Link href={'/faqs'}>FAQs</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='' />
        <div className="text-center">
          <div className='sm:flex-row flex flex-col gap-2  items-center justify-between'>
            <p className="">Working Hours: Mon - Sun 24h</p>
            <div className="flex justify-center space-x-4 ">
              <Image src={'/paymentcards.png'} alt='' width={200} height={100} />
            </div>
          </div>

          <hr className='mt-4' />
          <div className='md:flex items-center justify-between mt-4'>
            <p className="">&copy; 2024 Copyright Heathrow Budget Parking. All Rights Reserved.</p>

            <div className='flex items-center justify-center gap-6 mt-2 md:mt-0 text-white text-xl'>
              <a href="https://www.linkedin.com/company/budgetparking/about/?viewAsMember=true" target='_blank'>
              <FaLinkedinIn />
              </a>
              <a href="https://x.com/HBudgetParking" target='_blank'>
              <FaTwitter />
              </a>
              <a href="https://www.instagram.com/hbudgetparking/" target='_blank'>
              
              <PiInstagramLogoFill />
              </a>
              <a href="https://www.facebook.com/budgetparking/" target='_blank'>
              <FaFacebookF />
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
