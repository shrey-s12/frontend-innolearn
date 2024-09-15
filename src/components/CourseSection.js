import React from 'react';
import CourseCard from './CourseCard';

const courses = [
    {
        id: 1,
        title: 'The Complete 2024 Web Development Bootcamp',
        instructor: 'Dr. Angela Yu',
        rating: 4.7,
        reviews: 401531,
        price: 499,
        originalPrice: 3099,
        bestseller: true,
        image: 'path-to-image-1', // Replace with actual image path
    },
    {
        id: 2,
        title: 'The Web Developer Bootcamp 2024',
        instructor: 'Colt Steele',
        rating: 4.7,
        reviews: 275581,
        price: 499,
        originalPrice: 3099,
        bestseller: false,
        image: 'path-to-image-2', // Replace with actual image path
    },
    {
        id: 2,
        title: 'The Web Developer Bootcamp 2024',
        instructor: 'Colt Steele',
        rating: 4.7,
        reviews: 275581,
        price: 499,
        originalPrice: 3099,
        bestseller: false,
        image: 'path-to-image-2',
    }
];

const categories = ['Web Development', 'JavaScript', 'React JS', 'Angular', 'Java', 'Android Development', 'iOS Development', 'CSS'];

const CourseSection = () => {
    return (
        <div className="ml-10 mr-20 course-section">
            {/* Categories (Tabs) */}
            <div className="category-tabs flex overflow-x-auto mb-8 px-4 lg:px-12">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`text-sm md:text-base py-2 px-4 whitespace-nowrap border-b-2 border-transparent hover:border-blue-600 focus:outline-none ${index === 0 ? 'border-blue-600 font-bold' : ''
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseSection;
