import ContactSection from '@/components/widgets/ContactSection';
import React from 'react';

const page = () => {
    const options = [
        {
            title: "Direct Customer Support",
            description: "Get immediate assistance from our dedicated support team.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            title: "Customer Services",
            description: "Access a range of services tailored to your needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Enhanced Communication",
            description: "Explore advanced options for seamless interaction.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        }
    ];

    return (
        <div className='sm:container p-2 flex flex-col gap-4 py-[50px] space-y-[20px]'>
            
                <div className='md:w-[80%] mx-auto sm:w-[80%] w-full space-y-[10px] text-center sm:p-0'>

                <h2 className="text-3xl sm:text-4xl md:text-5xl sm:w-[90%] mx-auto  text-[#313131] font-bold text-center ">
                    Looking For More Information Or Have A Specific Request?
                </h2>
                <p className="text-center text-gray-600 ">
                    Our team is always ready to help with anything you require.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {options.map((option, index) => (
                        <button key={index} className="  border rounded-lg p-6 flex sm:flex-row flex-col gap-2 items-center text-center sm:text-start bg-primary transition duration-300">
                            <div className="bg-[#D9D9D9] rounded-full p-3 mb-4">
                                {option.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{option.title}</h3>
                                <p className="text-white text-xs sm:text-sm">{option.description}</p>
                            </div>

                        </button>
                    ))}
                
            </div>
            <div className='sm:w-[80%] mx-auto p-2 text-center'>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center ">Contact Us</h2>
                <p className="text-gray-600 sm:text-base text-xs">
                    Need an experienced and skilled hand with custom Taxi projects? Fill out the
                    form to get a free consultation.
                </p>
            </div>
            <ContactSection/>
        </div>

    );
};

export default page;