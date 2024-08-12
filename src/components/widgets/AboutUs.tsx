// components/AboutUs.js
import Image from 'next/image';
import officeImage from '../public/office.png'; // apni image ko yahan import karen

const AboutUs = () => {
  return (
    <div className='sm:container '>
<div className=" container  flex justify-center items-center">
      <div className="bg-white rounded-xl  flex flex-col lg:flex-row w-full">
        <div className="relative w-full lg:w-1/2 h-auto">
          <Image src={"/office.png"} className='w-full rounded-xl' height={100} width={100}  objectFit="cover" alt="Office" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-8 space-y-[20px]">
          <h1 className="text-xl sm:text-2xl md:text-[60px] font-bold mt-[-20px] ">About Us</h1>
          <div className='flex p-2 gap-2'>
            {/* <div className='flex flex-col justify-between items-center'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full'></div>
              <div className='h-full w-0.5 bg-black'></div>
              <div className='w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full'></div>
            </div> */}
            <div>
            <h1 className="text-xl sm:text-2xl md:text-[20px] font-bold ">Reliable & Secure Parking Solutions</h1>
              <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">
              At Budget Parking Heathrow, we prioritize your peace of mind with secure and convenient parking options. Our facilities are equipped with 24/7 CCTV, secure fencing, and regular patrols, ensuring your vehicle is safe while you travel.
              </p>
              <h1 className="text-xl sm:text-2xl md:text-[20px] font-bold ">Affordable & Customer-Focused Services</h1>
              <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">
              We believe in providing budget-friendly parking without sacrificing quality. With options like Park and Ride and Meet and Greet, we cater to various needs and budgets, all backed by exceptional customer service to make your experience seamless from start to finish.
              </p>
            </div>
          </div>
          <button className="bg-primary w-fit mt-2 text-white px-3 sm:px-4 py-1 sm:py-2 rounded">Our Parking Options</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutUs;
