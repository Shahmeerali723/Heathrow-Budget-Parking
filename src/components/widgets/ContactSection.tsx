import React from 'react';
import { MdEmail } from 'react-icons/md';
// import { FaPhone } from 'react-icons/fa6';
import ContactForm from '../forms/ContactForm';
import Image from 'next/image';
import { FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa6';



const ContactSection = () => {
    return (
        <div className="py-8 w-full relative flex flex-col justify-center items-center">
                            <Image src="/contact.png" alt="Background Image" layout="fill" objectFit="cover" />
            <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold mt-[20px]">Need Assistance?</h2>
                <p>Reach out to our team for any questions or support. We're here 24/7 to help with your Heathrow parking needs.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4 md:px-8 lg:px-16">
                {/* Contact Information */}
                <div className="flex flex-col justify-center items-start">
                <h2 className="text-2xl font-bold mb-6">How to Reach</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <FaGlobe className="text-green-600" style={{ fontSize: '20px' }} />
                            <div className="text-sm sm:text-base">
                                <p className="font-bold">www.heathrowbudgetparking.co.uk</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-green-600" style={{ fontSize: '20px' }} />
                            <div className="text-sm sm:text-base">
                                <p className="font-bold">info@heathrowbudgetparking.co.uk</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-green-600" style={{ fontSize: '20px' }} />
                            <div className="text-sm sm:text-base">
                                <p className="font-bold">+447880333368</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                        <div className="text-sm sm:text-base space-y-4">
                            <div>
                                <h3 className="font-semibold">Affordable Rates</h3>
                                <p>Get the best prices for secure and convenient parking at Heathrow.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Convenient Locations</h3>
                                <p>Easily accessible parking options close to the airport. 24/7.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Support</h3>
                                <p>Our team is available around the clock to assist with all your parking needs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;
