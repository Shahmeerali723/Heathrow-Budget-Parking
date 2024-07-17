import React from 'react';

const GuestPostForm = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 ">
      <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
        <div className='md:w-[80%] sm:text-start text-center'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Create Guest Post Submission Form?</h1>
          <p className="text-gray-600 sm:text-base text-xs">
            {"Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book."}
          </p>
        </div>

      </div>
      <div className="md:w-1/2">
        <form className="bg-[#85BB65] p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-white text-center mb-4">Guest Post Writer Application Form</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="FIRST NAME" className="p-2 rounded bg-[#DDDADA]" />
            <input type="text" placeholder="LAST NAME" className="p-2 rounded bg-[#DDDADA]" />
          </div>
          <input type="email" placeholder="E-MAIL" className="w-full p-2 rounded mb-4 bg-[#DDDADA]" />
          <div className="flex mb-4">
            <input type="text" placeholder="+1" className="w-16 p-2 rounded-l bg-[#DDDADA]" />
            <input type="tel" placeholder="PHONE NUMBER" className="flex-grow p-2 rounded-r w-full bg-[#DDDADA]" />
          </div>
          <p className="mb-2 text-white">Are you a professional content writer or researcher?</p>
          <div className="flex mb-4 justify-around">
            <label className="mr-4">
              <input type="radio" name="professional" value="yes" className="mr-2 bg-[#DDDADA]" />
              Yes
            </label>
            <label>
              <input type="radio" name="professional" value="no" className="mr-2 bg-[#DDDADA]" />
              No
            </label>
          </div>
          <input type="text" placeholder="Link To Your Blog" className="w-full p-2 rounded mb-4 bg-[#DDDADA]" />
          <p className='w-[90%] mx-auto text-center text-white'>{"If you don't have a blog, please include a link to another website where we can read a sample of your writing"}</p>
          <div className='flex flex-col justify-center items-center mt-2'>

          <button type="submit" className="w-fit bg-secondary-dark text-white py-2 px-4 rounded hover:bg-secondary-extraDark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestPostForm;