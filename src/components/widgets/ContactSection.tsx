import React from 'react';
import { MdEmail } from 'react-icons/md';
import ContactForm from '../forms/ContactForm';
import { FaPhone } from 'react-icons/fa6';

const ContactSection = () => {
    return (
        <div className="py-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full ">
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-xl sm:text-3xl font-bold italic'>
                            Get In Touch <br />
                            <span className='text-3xl sm:text-4xl md:text-6xl text-primary'>With Us</span>
                        </h2>
                        <div className='flex items-center gap-2'>
                            <div className='w-fit p-2 text-2xl bg-primary rounded-full'>
                                <MdEmail className='text-white' />
                            </div>
                            <div className='text-xs sm:text-sm md:text-lg'>
                                <h4 className='font-bold'>
                                    Email
                                </h4>
                                <h5>
                                    info@heathrowbudgetparking.co.uk
                                </h5>
                            </div>

                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-fit p-2 text-2xl bg-primary rounded-full'>
                                <FaPhone className='text-white' />
                            </div>
                            <div className='text-xs sm:text-sm md:text-lg'>
                                <h4 className='font-bold'>
                                    For Quick Inquiries
                                </h4>
                                <h5>
                                    +447880333368
                                </h5>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;




