"use client";
import React, { ChangeEvent, useState } from 'react';
import InputComp from '../shared/InputComp';
import { Button } from '../ui/button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  airport: string;
  time: string;
  date: string;
  PromoCode: string;
}

const AirportForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    airport: "",
    time: "",
    date: "",
    PromoCode: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=' w-full sm:container  sm:mt-[-80px] md:mt-[-100px] z-10'>
      <div className='sm:w-[90%] mx-auto bg-white rounded-t-xl p-3 sm:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-3 '>
          <Button className='outline-primary border-primary text-xs sm:text-sm'>Airport Parking</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Hotel & Parking</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Lounge</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Airport Transfer</Button>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-3 container bg-white rounded-xl shadow-lg p-3 sm:px-6 '>
        <select name="airport" className='w-full text-xs sm:text-sm p-2 sm:p-3 border-[#999999] border rounded-md col-span-12 sm:col-span-6' onChange={handleChange}>
          <option>Airport</option>
          <option value="airport1">airport1</option>
          <option value="airport2">airport2</option>
          <option value="airport3">airport3</option>
        </select>
        <select name="terminal" className='w-full text-xs sm:text-sm p-2 sm:p-3 border-[#999999] border rounded-md col-span-12 sm:col-span-6' onChange={handleChange}>
          <option>Terminal</option>
          <option value="terminal1">terminal1</option>
          <option value="terminal2">terminal2</option>
          <option value="terminal3">terminal3</option>
        </select>

        <div className='col-span-12 sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
          <InputComp
            placeholder="Drop off Time"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <InputComp
            type="time"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <div className='col-span-12 sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
          <InputComp
            placeholder="Drop off Date"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <InputComp
            type="date"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className='col-span-12 items-center grid grid-cols-12 gap-3 mt-4'>
          <div className='col-span-12 sm:col-span-4'>
            <InputComp
              placeholder="Promo Code"
              classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
              name="PromoCode"
              value={formData.PromoCode}
              onChange={handleChange}
            />
          </div>
          <div className='col-span-12 sm:col-span-8 flex justify-center'>
            <Button className='bg-primary'>
              Get Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportForm;
