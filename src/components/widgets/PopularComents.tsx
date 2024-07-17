import Image from 'next/image';
import React from 'react';

const PopularComment = () => {
  return (
    <div className=" py-[50px] space-y-[20px] rounded-lg ">
      <h2 className="text-3xl sm:text-4xl md:text-[40px] sm:text-start text-center font-bold text-[#232536]">Most Popular</h2>
      <div className="space-y-4">
        {[1, 2].map((index) => (
          <div key={index} className="bg-[#193D1C] shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] p-3 rounded-b-xl rounded-r-xl text-white">
            <div className="flex  space-x-3">
              <Image width={1000} height={100} src="/person.png" alt="User avatar" className="w-10 h-10 rounded-full" />
              <div className=''>
                <p className="font-semibold">person id</p>
                <p className="text-sm">info@gmail.com</p>
                <p className="mt-2 text-xs text-[#FFFFFF]">
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived..."}
            </p>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
      <div className="mt-4 w-full  sm:w-[80%] gap-1 sm:gap-4 mx-auto flex">
        <input
          type="text"
          placeholder="comments"
          className="w-full rounded-md border border-primary p-2"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-md  ">
          SEND
        </button>
      </div>
    </div>
  );
};

export default PopularComment;