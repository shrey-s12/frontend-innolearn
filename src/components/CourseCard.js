import React from 'react';

const CourseCard = ({ course }) => {
  const { title, instructor, rating, reviews, price, originalPrice, bestseller, image } = course;

  return (
    <div className="course-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <div className="course-info">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">Instructor: {instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-500 ml-2">({reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-gray-900">₹{price}</span>
          <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
        </div>
        {bestseller && <div className="text w-20 bg-yellow-500 text-white py-1 px-2 rounded">Bestseller</div>}
      </div>
    </div>
  );
};

export default CourseCard;
