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
          <h2 className="text-primary text-xs sm:text-sm md:text-[24px] uppercase ">About Us</h2>
          <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold ">Lorem Ipsum</h1>
          <h2 className="text-lg sm:text-xl md:text-[36px] font-medium ">Dummy Text Printing</h2>
          <div className='flex p-2 gap-2'>
            <div className='flex flex-col justify-between items-center'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full'></div>
              <div className='h-full w-0.5 bg-black'></div>
              <div className='w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full'></div>
            </div>
            <div>
              <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
              <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
          <button className="bg-primary w-fit mt-2 text-white px-3 sm:px-4 py-1 sm:py-2 rounded">Read More</button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutUs;
