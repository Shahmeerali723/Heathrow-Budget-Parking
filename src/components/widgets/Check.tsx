"use client";

import { useState } from 'react';

const categories = [
  { name: 'Design', value: 120 },
  { name: 'Development', value: 100 },
  { name: 'Tips', value: 80 },
  { name: 'Review', value: 60 },
  { name: 'Events', value: 40 },
  { name: 'Collaboration', value: 20 },
];

const posts = [
  {
    date: '10 July 2023',
    title: 'Cloud Computing: A Game-Changer',
    description: 'Cybersecurity Threats Need to Know in 2023',
  },
  {
    date: '10 July 2022',
    title: 'Cloud Computing: A Game-Changer',
    description: 'Cybersecurity Threats Need to Know in 2023',
  },
];

export default function Check() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>


      <div className="sm:flex gap-10 p-4 w-[90%] mx-auto ">
        <div className="bg-primary text-white p-4 rounded-md shadow-md sm:w-1/2 mb-3 sm:mb-0">
          <h2 className="text-lg font-bold mb-4">Category</h2>
          <ul>
            {filteredCategories.map((category, index) => (
              <li
                key={index}
                className=""
              >
                <span className="text-white" key={category.name}>{category.name}</span>
                <div className='flex gap-2 justify-between items-center mb-2'>




                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black rounded-full h-2"
                      style={{ width: `${(category.value / 120) * 100}%` }}
                    />
                  </div>
                  <span className="text-white">{category.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary p-4 rounded-md shadow-md  sm:w-1/2">
          <h2 className="text-lg text-white font-bold mb-4">Latest Post</h2>
          <ul>
            {filteredPosts.map((post, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-md shadow-md mb-4"
              >
                <p className="text-gray-500 mb-2 text-xs sm:text-base">{post.date}</p>
                <h3 className="text-sm sm:text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-xs sm:text-base">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
      
      </div>
    </div>

  );
}