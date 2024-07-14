import React from 'react';

interface CardProps {
  date: string;
  rating: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const BlogCard: React.FC<CardProps> = ({ date, rating, title, description, imageUrl, buttonText }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.946c.14.43.528.729.981.729h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.438c-.365.265-.519.736-.387 1.165l1.278 3.946c.3.921-.755 1.688-1.538 1.165l-3.357-2.438a1.125 1.125 0 00-1.294 0l-3.357 2.438c-.783.523-1.838-.244-1.538-1.165l1.278-3.946c.132-.429-.022-.9-.387-1.165L2.052 9.412c-.783-.57-.381-1.81.588-1.81h4.15c.453 0 .841-.299.981-.729l1.278-3.946z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt="Card Image" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 text-sm">{date}</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm mr-1">{rating.toFixed(1)}</span>
            <div className="flex items-center">
              {renderStars()}
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-xs sm:text-sm mb-4">
          {description}
        </p>
        <div className='flex w-full justify-center items-center' >

        <button className="bg-primary text-sm  text-white py-2 px-4 rounded-md">
          {buttonText}
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
