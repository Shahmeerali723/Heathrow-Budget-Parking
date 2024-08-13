"use client"
import React, { useState } from 'react';

const FAQItem = ({ question, answer, isActive, onClick }:any) => {
  return (
    <div className="faq-item mb-4 w-full">
      <div className="faq-question text-[12px] font-semibold border-[#CACACA] border rounded-lg p-4 pl-12 cursor-pointer" onClick={onClick}>
        {question}
      </div>
      <div className={`faq-answer w-full ${isActive ? 'max-h-40 p-4 pl-12 bg-[#F5F5F5]' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out  rounded-b-lg`}>
        <p className="break-words text-[12px]">{answer}</p>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('General Information');

  const handleClick = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryChange = (category:any) => {
    setSelectedCategory(category);
    setActiveIndex(null); // Reset active index when changing categories
  };

  const faqData :any = {
    "General Information": [
      {
        question: "1. What is Heathrow Budget Parking?",
        answer: "Heathrow Budget Parking offers affordable parking solutions for travelers using Heathrow Airport. We provide secure and convenient parking options to make your journey smoother and more cost-effective."
      },
      {
        question: "2. How can I book a parking spot?",
        answer: "You can book a parking spot through our website www.heathrowbudgetparking.co.uk. Simply select your dates, provide your vehicle and flight information, and complete the booking process."
      },
      {
        question: "3. Where is your parking facility located?",
        answer: "Our parking facility is conveniently located near Heathrow Airport. You will receive detailed directions and instructions on how to get to our facility upon booking."
      },
      {
        question: "4. What are your operating hours?",
        answer: "We operate 24/7, allowing you to drop off and pick up your vehicle at any time. Please ensure you follow the instructions provided in your booking confirmation for a smooth experience."
      },
      {
        question: "5. Is your parking facility secure?",
        answer: "Yes, our facility is equipped with high-security measures, including CCTV surveillance and secure access controls, to ensure the safety of your vehicle while you’re away."
      }
    ],
    "Booking and Payment": [
      {
        question: "1. What payment methods do you accept?",
        answer: "We accept major credit and debit cards. Payments are processed securely through our third-party payment processor."
      },
      {
        question: "2. Can I modify or cancel my booking?",
        answer: "Yes, you can modify or cancel your booking through our website or by contacting our customer service team. Please refer to our cancellation policy for any applicable fees."
      },
      {
        question: "3. What is your cancellation policy?",
        answer: "Our cancellation policy allows for cancellations up to 24 hours before your scheduled arrival time. Please review the specific terms during the booking process or contact us for detailed information."
      },
      {
        question: "4. How do I know if my booking was successful?",
        answer: "To become a CABBX driver, visit our website and complete the driver application form."
      },
      {
        question: "5. Do you offer any discounts or promotions?",
        answer: "We occasionally offer special promotions and discounts. Keep an eye on our website or subscribe to our newsletter to stay updated on any current offers."
      }
    ],
    "On Arrival": [
      {
        question: "1. What should I do when I arrive at the parking facility?",
        answer: "Upon arrival, follow the signs to our check-in area. Present your booking confirmation and ID to our staff, who will guide you through the check-in process and direct you to your parking spot."
      },
      {
        question: "2. Is there a shuttle service to the airport?",
        answer: "Yes, we provide a complimentary shuttle service to and from Heathrow Airport. Shuttle timings and instructions will be provided in your booking confirmation."
      },
      {
        question: "3. How early should I arrive before my flight?",
        answer: "We recommend arriving at least 30 minutes before your scheduled check-in time to allow for check-in, parking, and shuttle transfer to the airport."
      },
      {
        question: "4. What if I arrive earlier or later than my scheduled time?",
        answer: "If you arrive outside your scheduled time, please inform us as soon as possible. We will do our best to accommodate any changes, but additional fees may apply."
      },
      {
        question: "5. What if I need assistance with my vehicle?",
        answer: "Our staff is available to assist with any issues you may encounter. If you need help, please contact our customer service team or approach a member of our staff at the facility."
      }
    ],
    "During Your Stay": [
      {
        question: "1. How can I contact you if I have an issue or question?",
        answer: "You can contact us via email at info@heathrowbudgetparking.co.uk or by phone at +447880333368. Our customer service team is available to assist you."
      },
      {
        question: "2. Can I extend my parking period if my return is delayed?",
        answer: "Yes, you can extend your parking period. Please contact us as soon as possible to arrange the extension and confirm any additional charges."
      },
      {
        question: "3. What should I do if I lose my parking ticket?",
        answer: "If you lose your parking ticket, please contact our customer service team immediately. We will assist you in verifying your booking and resolving the issue."
      },
      {
        question: "4. Are there any additional services available at the parking facility?",
        answer: "We offer various additional services, such as car cleaning and maintenance. Please inquire at the facility or contact us in advance for more information."
      },
      {
        question: "5. What happens if I return and my car is damaged?",
        answer: "In the unlikely event that your vehicle is damaged, please report the issue to our staff immediately. We will investigate and address the matter according to our insurance and liability policies."
      }
    ],
    "After Your Stay": [
      {
        question: "1. How do I retrieve my vehicle?",
        answer: "To retrieve your vehicle, follow the instructions provided in your booking confirmation. Our staff will assist you in the check-out process and direct you to your vehicle."
      },
      {
        question: "2. What if I have a complaint or feedback about my experience?",
        answer: "We welcome your feedback and are committed to resolving any issues. Please contact us via email at info@heathrowbudgetparking.co.uk or by phone at +447880333368 with your concerns."
      },
      {
        question: "3. Can I get a receipt for my parking payment?",
        answer: "Yes, a receipt will be provided upon request. Please contact us after your stay, and we will send you a receipt for your records."
      },
      {
        question: "4. How do I leave a review for your service?",
        answer: "We appreciate your feedback! You can leave a review on our website or on popular review platforms. Your comments help us improve our services and assist other customers."
      },
      {
        question: "5. What should I do if I forgot to collect something from my vehicle?",
        answer: "If you realize you left something in your vehicle, please contact us as soon as possible. We will help you retrieve your belongings if they are still at our facility."
      }
    ]
  };

  const categories = Object.keys(faqData);

  return (
    <div className='flex flex-col gap-5 py-[50px] sm:container p-2'>
      <div className='md:w-[50%] mx-auto sm:w-[80%] w-full space-y-[20px] text-center sm:p-0 '>
        <h1 className='capitalize text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-secondary-extraDark'>
        Frequently Asked Questions (FAQ)
        </h1>
       
      </div>

      <div className="items-center justify-center bg-white ">
        <div className='p-5 border-gray-300 border text-sm rounded-lg w-full'>
          <div className='text-sm sm:container h-[485px] overflow-y-auto sm:p-6 custom-scrollbar'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-center text-center gap-2 md:gap-5 w-full bg-[#F5F5F5] p-3 px-6 rounded-lg mb-4'>
              {categories.map((category) => (
                <div 
                  key={category} 
                  className={`cursor-pointer font-semibold `}
                  onClick={() => handleCategoryChange(category)}
                >
                    <h2 className={`w-fit text-[14px] font-bold mx-auto`}>
                  {category}
                  {selectedCategory === category ? <div className='w-[70%] rounded-full mx-auto h-0.5 bg-secondary-extraDark'>
                      
                      </div>:""}
                    </h2>
                    
                </div>
              ))}
            </div>

            {faqData[selectedCategory].map((faq:any, index:any) => (
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

export default Page;
