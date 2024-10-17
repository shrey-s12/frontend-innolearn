import React from 'react';
import img from '../assets/img.jpeg';
import CourseSection from '../components/CourseSection';
import LearningGoalsSection from '../components/LearningGoalsSection';
import PricingSection from '../components/PricingSection'; // Import the new Pricing Section
import TestimonialSection from '../components/TestimonialSection'; // Import Testimonial Section
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div className='home'>
      {/* Hero Section 1 */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-gray-50 relative">
        <div className="w-full md:w-1/2 lg:w-1/2 p-6 md:pl-12 lg:pl-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Skills that drive you forward
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.
          </p>
          <button onClick={()=> navigate("/personal-plan")} className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            View Plans
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Students learning"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="bg-gray-100 py-12 flex flex-col items-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            All the skills you need in one place
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            From critical skills to technical topics, InnoLearn supports your professional development.
          </p>
        </div>
      </section>

      {/* Hero Section 3 Course Section */}
      <section className="bg-white py-12">
        <CourseSection />
      </section>

      {/* Hero Section 4 Learning Goals Section */}
      <section className="bg-gray-50 py-12">
        <LearningGoalsSection />
      </section>

      {/* Hero Section 5 Pricing Section */}
      <section className="ml-20 mr-20 py-12">
        <PricingSection />  {/* New Pricing Section added here */}
      </section>

      {/* Hero Section 6 Testimonial Section */}
      <section className="bg-gray-50 py-12">
        <TestimonialSection /> {/* Testimonial Section */}
      </section>
      
    </div>
  );
};

export default HomePage;
