"use client"
import React, { useState } from 'react';

const FAQItem = ({ question, answer, isActive, onClick }: any) => {
    return (
        <div className="faq-item mb-4 w-full">
            <div className="faq-question border-[#CACACA] border rounded-lg p-4 pl-12 cursor-pointer" onClick={onClick}>
                {question}
            </div>
            <div className={`faq-answer w-full ${isActive ? 'max-h-40 p-4 pl-12 bg-[#F5F5F5]' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out  rounded-b-lg`}>
                <p className="break-words">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Customer Booking');

    const handleClick = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category);
        setActiveIndex(null); // Reset active index when changing categories
    };

    const faqData: any = {
        "Customer Booking": [
            {
                question: "How to contact CABBX?",
                answer: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'."
            },
            {
                question: "How to get a Quote and Book an airport transfer?",
                answer: "You can get a quote and book an airport transfer by visiting our website and filling out the booking form."
            },
            {
                question: "How to get a Quote and Book an airport transfer?",
                answer: "You can get a quote and book an airport transfer by visiting our website and filling out the booking form."
            },
            {
                question: "How to get a Quote and Book an airport transfer?",
                answer: "You can get a quote and book an airport transfer by visiting our website and filling out the booking form."
            },
            {
                question: "How to get a Quote and Book an airport transfer?",
                answer: "You can get a quote and book an airport transfer by visiting our website and filling out the booking form."
            }
        ],
        "Driver Related": [
            {
                question: "How to become a CABBX driver?",
                answer: "To become a CABBX driver, visit our website and complete the driver application form."
            }
        ],
        "Safety": [
            {
                question: "What safety measures are in place?",
                answer: "We ensure all drivers pass background checks and vehicles are regularly inspected."
            }
        ],
        "Fares & Payments": [
            {
                question: "How are fares calculated?",
                answer: "Fares are calculated based on distance, time, and demand."
            }
        ],
        "Security": [
            {
                question: "How is my data protected?",
                answer: "We use industry-standard encryption to protect your data."
            }
        ]
    };

    const categories = Object.keys(faqData);

    return (
        <div className='flex flex-col gap-5'>
            <div className="">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Sayaara Car Rentals - Terms and Conditions</h1>

                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Smoking Policy:</h2>
                        <p className="text-gray-600">Smoking is strictly prohibited in our rental cars. Violation of this policy will result in penalty charges.</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Minimum Age Requirement:</h2>
                        <p className="text-gray-600">The minimum age requirement is 25 years old for renting a car with Sayaara.</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-700">Credit Card Requirement:</h2>
                        <p className="text-gray-600">A valid credit card is a must for renting a car from Sayaara. We will charge a deposit to your credit card for security during the rental period.</p>
                    </div>
                </div>
            </div>
            <h2 className='uppercase text-3xl sm:text-4xl md:text-5xl'>
                faq’s
            </h2>
            <div className="items-center justify-center bg-white">
                <div className='p-5 border-gray-300 border text-sm rounded-lg w-full '>
                    <div className='text-sm sm:container h-[485px] overflow-y-auto sm:p-6 custom-scrollbar'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-center text-center gap-2 md:gap-5 w-full bg-[#F5F5F5] p-3 px-6 rounded-lg mb-4'>
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    className={`cursor-pointer font-semibold `}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <h2 className={`w-fit mx-auto ${selectedCategory === category ? 'border-b-secondary-extraDark border-b-2' : ''}`}>
                                        {category}

                                    </h2>
                                </div>
                            ))}
                        </div>

                        {faqData[selectedCategory].map((faq: any, index: any) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isActive={index === activeIndex}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] mx-auto">
                    <div className='mx-auto h-5 rounded-b-[10px] bg-green-900'></div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
