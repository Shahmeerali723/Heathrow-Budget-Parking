import React from 'react';

const PricingCard = ({ title, price, features, rating ,category}:any) => {
  return (
    <div className="flex flex-col border h-fit border-gray-200 rounded-tr-3xl rounded-bl-3xl  shadow-md p-6 m-4 space-y-[10px] bg-white">
      <h2 className="text-2xl  uppercase font-black text-green-900 ">{title}</h2>
      <h3 className="text-xl font-bold text-secondary-extraDark  uppercase">{category}</h3>
      <h3 className="text-xl  font-black text-secondary-extraDark ">{price}</h3>
      <ul className="flex-1 space-y-[20px]">
        {features.map((feature:any, index:any) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="w-4 h-4 text-primary mr-2 " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span className=' text-[#959292]'>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mb-4">
        {Array(rating).fill(0).map((_, index) => (
          <svg key={index} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L1 7.227l6.561-.955L10 1l2.439 5.272 6.561.955-4.244 4.318 1.122 6.545z" />
          </svg>
        ))}
      </div>
      <button className="mt-auto py-2 px-4 bg-primary text-white font-bold rounded">Book Now</button>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      title: 'Meet & Greet',
      price: '140$',
      category : "Silver",
      features: [
        'Professional Service',
        'Secure Compound',
        'Fully Insured Drivers',
        'No Change',
        'No Cancellation',
      ],
      rating: 5,
    },
    {
      title: 'Meet & Greet',
      price: '140$',
      category : "Gold",
      features: [
        'Professional Service',
        'Secure Compound',
        'Fully Insured Drivers',
        'Changes Allowed',
        'Cancellation Allowed',
        'Amendments Allowed',
      ],
      rating: 5,
    },
    {
      title: 'Meet & Greet',
      price: '140$',
      category : "Paltinium",
      features: [
        'Professional Service',
        'Secure Compound',
        'Fully Insured Drivers',
        'Changes Allowed',
        'Cancellation Allowed',
        'Amendments Allowed',
        'No Change Fee',
        'No Airport Entry / Exit Fee',
      ],
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {pricingData.map((card, index) => (
          <PricingCard
            key={index}
            title={card.title}
            price={card.price}
            features={card.features}
            rating={card.rating}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
