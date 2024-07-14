// components/ContactForm.js
import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
      

            <div className='relative flex overflow-x-hidden p-2'>
                
                <div className="relative mr-[-360px] sm:mr-[-200px] mt-[100px] z-10 bg-white  p-8 rounded-lg shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)]  w-full">
                    <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#44372F]">Send A Message</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Phone"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className=" px-4 bg-primary w-fit text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className='mr-[-100px] '>

                    <Image src="/Vector.png" alt="Background Image" width={500} height={100} />

                </div>
            </div>
    );
};

export default ContactForm;
