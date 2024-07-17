"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    image: '/car.png',
    title: 'Lorem Ipsum 1',
    description: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s',
  },
  {
    id: 2,
    image: '/car.png',
    title: 'Lorem Ipsum 2',
    description: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s',
  },
  {
    id: 3,
    image: '/car.png',
    title: 'Lorem Ipsum 3',
    description: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s',
  },
  {
    id: 4,
    image: '/car.png',
    title: 'Lorem Ipsum 4',
    description: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s',
  },
  {
    id: 5,
    image: '/car.png',
    title: 'Lorem Ipsum 5',
    description: 'Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s',
  },
];

const PopularSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (posts.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length - 2) % (posts.length - 2));
  };

  return (
    <div className="py-[50px] space-y-[20px]">
      <h2 className="text-3xl sm:text-4xl md:text-[40px] sm:text-start text-center font-bold text-[#232536]">Most Popular</h2>
      <div className="relative block sm:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6 lg:px-8 ">
          {posts.slice(currentIndex, currentIndex + 3).map((post, index) => (
            <div key={post.id} className="w-full px-2">
              <div className="bg-white rounded-lg shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                <Image width={1000} height={100} src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm">{post.description}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-primary rounded-full p-2 shadow-md"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-white font-semibold" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-primary rounded-full p-2 shadow-md"
            disabled={currentIndex === posts.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-white font-semibold" />
          </button>
        </div>
      </div>
      <div className="relative hidden sm:block">
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 overflow-hidden gap-4 p-4">
          {posts.slice(currentIndex, currentIndex + 3).map((post, index) => (
            <div key={post.id} className=" px-2">
              <div className="bg-white rounded-lg shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] overflow-hidden">
                <Image width={1000} height={100} src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md ml-[-15px]  sm:ml-[-20px] md:ml-[-40px]"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6 text-white font-semibold" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-md mr-[-15px] sm:mr-[-20px] md:mr-[-40px]"
          disabled={currentIndex === posts.length - 3}
        >
          <ChevronRight className="w-6 h-6 text-white font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default PopularSection;
