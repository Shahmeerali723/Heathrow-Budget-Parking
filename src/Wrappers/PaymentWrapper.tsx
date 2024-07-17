"use client"
import React, { useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";



// ContactDetails Component
const ContactDetails = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg">
      <h2 className="text-lg sm:text-xl  mb-4 md:text-[32px] font-bold">Contact Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">Title*</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border bg-[#ECE8E8] p-2 rounded-lg w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 bg-[#ECE8E8] rounded-lg w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">Contact Number*</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base md:text-[20px] font-bold">People*</label>
          <input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="border p-2 rounded-lg bg-[#ECE8E8] w-full border-gray-500 border-opacity-50"
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block mb-2 text-sm sm:text-lg md:text-[32px] font-bold">Flight Details*</label>
          <div className="flex items-center mt-2 gap-2">
            <p className='capitalize font-bold text-xs sm:text-sm'>
              Is simply dummy text of the printing and typesetting industry.
            </p>
            <input
              type="radio"
              name="flightDetailsConfirmation"
              value="yes"
              onChange={handleChange}
              className="mr-2"
            />
            <label className="mr-4 text-xs sm:text-sm">Yes</label>
            <input
              type="radio"
              name="flightDetailsConfirmation"
              value="no"
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-xs sm:text-sm">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

// VehicleDetails Component


// PaymentDetails Component
const PaymentDetails = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div className="flex flex-col justify-between">
        <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg flex flex-col gap-4">
          <label className="block text-sm sm:text-base">
            <input type="checkbox" className="mr-2   " />
            Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </label>
          <label className="block text-sm sm:text-base ">
            <input type="checkbox" className="mr-2" />
            Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </label>
        </div>
        <div className='p-4 py-8 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg flex flex-col gap-5'>
          <label className="block  text-sm sm:text-base ">
            <input type="checkbox" className="mr-2" />
            Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </label>
          <button className="bg-primary text-white py-4 px-4 rounded w-full">Pay For Card</button>
          <button className="bg-white border border-primary text-primary py-4 px-4 rounded w-full">Pay Pal</button>
        </div>
      </div>
      <div className="relative p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-[url('/ICON.png')] bg-cover bg-no-repeat bg-center opacity-10 rounded-lg"></div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-xl font-semibold text-center">Booking Details</h2>
          <p className=" mb-4 sm:text-[15px] font-medium text-xs text-center">
            Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Drop Off</span>
              <span>12/07/2024 At 13:00</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Pick Up</span>
              <span>18/07/2024 At 14:00</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Airport</span>
              <span>Heathrow</span>
            </div>
          </div>
          <div className="mt-4 border-t pt-4 px-6">
            <div className="flex justify-between">
              <span>Quote Amount:</span>
              <span>$146.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount Amount:</span>
              <span>-$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Booking Charges:</span>
              <span>$1.95</span>
            </div>
            <div className="flex justify-between">
              <span>Sms Charges:</span>
              <span>$0.00</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between text-xl font-semibold mt-4 py-6">
            <span className="text-[30px] font-bold">Total:</span>
            <span className="text-[30px] font-bold">$147.95</span>
          </div>
        </div>
      </div>

    </div>
  );
};

// Confirmation Component
const Confirmation = ({ formData }: any) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

// Main Page Component
const PaymentWrapper = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    people: '',
    flightDetailsConfirmation: '',
    vehicles: [
      { make: '', model: '', color: '', regNo: '' }
    ],
    paymentOption1: false,
    paymentOption2: false,
  });

  const addVehicle = () => {
    setFormData({ ...formData, vehicles: [...formData.vehicles, { make: '', model: '', color: '', regNo: '' }] });
  };
  const removeVehicle = (index: number) => {
    const newVehicles = formData.vehicles.filter((_, i) => i !== index);
    setFormData({ ...formData, vehicles: newVehicles });
  };


  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleVehicleChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const newVehicles: any = [...formData.vehicles];
    newVehicles[index][name] = value;
    setFormData({ ...formData, vehicles: newVehicles });
  };


  const VehicleDetails = ({ vehicle, index, handleVehicleChange }: any) => {


    return (
      <div className="p-4 shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] rounded-lg">
        <div className='flex justify-between items-center mb-4'>
          <h2 className="text-base sm:text-xl md:text-[32px] font-bold">Vehicle Details {index + 1}</h2>
          <div className='sm:flex gap-2'>
            <button onClick={addVehicle} className="bg-primary flex items-center text-xs sm:text-base gap-2 text-white py-2 px-3 rounded-lg">
              <FaPlusCircle />
              Add Extra Car
            </button>
            {index > 0 && (
              <button onClick={() => removeVehicle(index)} className="bg-red-500 flex w-full mt-2 sm:mt-0 sm:w-fit items-center text-xs sm:text-base gap-2 text-white py-2 px-3 rounded-lg">
                <FaTrashAlt />
                Remove
              </button>
            )}
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">Make*</label>
            <input
              type="text"
              name="make"
              value={vehicle.make}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">Model*</label>
            <input
              type="text"
              name="model"
              value={vehicle.model}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">Color*</label>
            <input
              type="text"
              name="color"
              value={vehicle.color}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
          <div>
            <label className="block mb-2 md:text-[20px] font-bold">Reg No*</label>
            <input
              type="text"
              name="regNo"
              value={vehicle.regNo}
              placeholder={"TBC"}
              onChange={(e) => handleVehicleChange(e, index)}
              className="border p-2 rounded-lg w-full border-[#000000] border-opacity-50 bg-[#ECE8E8]"
            />
          </div>
        </div>
      </div>
    );
  };





  const steps = [
    <ContactDetails key="step1" formData={formData} setFormData={setFormData} />,
    <VehicleDetails key="step2" formData={formData} setFormData={setFormData} />,
    <PaymentDetails key="step3" formData={formData} setFormData={setFormData} />,
    <Confirmation key="step4" formData={formData} />,
  ];

  return (
    <div className='sm:container p-2 sm:p-10 flex flex-col gap-4'>
      <ContactDetails key="step1" formData={formData} setFormData={setFormData} />
      {formData.vehicles.map((vehicle, index) => (
        <VehicleDetails key={index} vehicle={vehicle} index={index} handleVehicleChange={handleVehicleChange} />
      ))}

      <PaymentDetails key="step3" formData={formData} setFormData={setFormData} />
      {/* <Confirmation key="step4" formData={formData} /> */}
    </div>
  );
};

export default PaymentWrapper;
