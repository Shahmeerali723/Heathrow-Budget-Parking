// components/ParkingComparisonTable.js


import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";



const ParkingComparisonTable = () => {
  return (
    <div className="sm:container overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-sm">
        <thead className="bg-[#F9F9F9] text-xs">
          <tr>
            <th className="py-3 px-6 border border-gray-300"></th>
            <th className="py-3 px-6 border border-gray-300">Your own PPC ads</th>
            <th className="py-3 px-6 border border-gray-300"><div className="bg-[#264902] w-fit p-2 rounded-lg mx-auto">
              <Image src={"/cabbxlogo.png"} alt=" " width={90} height={100}/>
              </div></th>
            <th className="py-3 px-6 border border-gray-300">Your Carding</th>
            <th className="py-3 px-6 border border-gray-300">Your print ads</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          <tr className="text-center">
            <td className="py-3 px-6 border border-gray-300 text-start">Time To Terminals</td>
            <td className="py-3 px-6 border border-gray-300 ">2-12 Min On <br /> <span className="font-bold"> Site Airport</span></td>
            <td className="py-3 px-6 border border-gray-300">15-20 Min <br /> <span className="font-bold"> Park & Ride</span></td>
            <td className="py-3 px-6 border border-gray-300">10-15 Min <br /> <span className="font-bold"> Park & Ride</span></td>
            <td className="py-3 px-6 border border-gray-300">10-12 Min <br /> <span className="font-bold"> Park & Ride</span></td>
          </tr>
          <tr className="text-center">
            <td className="py-3 px-6 border border-gray-300 text-start">Your Parking Options</td>
            <td className="py-3 px-6 border border-gray-300"><span className="font-bold">On-Airport </span> <br /> Short/Long Stay, Valet Parking</td>
            <td className="py-3 px-6 border border-gray-300"><span className="font-bold">Third Party </span> <br /> Park & Ride</td>
            <td className="py-3 px-6 border border-gray-300"><span className="font-bold">Third Party </span> <br /> Park & Ride, Meet & Greet</td>
            <td className="py-3 px-6 border border-gray-300"><span className="font-bold">Third Party </span> <br /> Park & Ride, Meet & Greet</td>
          </tr>
          <tr>
            <td className="py-3 px-6 border border-gray-300">Loyalty And Email Deals</td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
          </tr>
          <tr>
            <td className="py-3 px-6 border border-gray-300">No Cancellation Fees</td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>

          </tr>
          <tr>
            <td className="py-3 px-6 border border-gray-300">No Amendments Fees</td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>

          </tr>
          <tr>
            <td className="py-3 px-6 border border-gray-300">No Call To Collect Car On Return</td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>
          </tr>
          <tr>
            <td className="py-3 px-6 border border-gray-300">24/7 Customer Services</td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
            <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#00FF0A] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <IoMdCheckmark /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>
              <td className="py-3 px-6 border border-gray-300 text-center"><div className="bg-[#FF0000] bg-opacity-45 font-bold text-white text-xl p-2 mx-auto shadow-lg text-center w-fit rounded-full">
              <RxCross2 /></div></td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParkingComparisonTable;
