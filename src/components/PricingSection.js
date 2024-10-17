import React from 'react';
import { MdPerson } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 1,
    title: 'Personal Plan',
    description: 'For you',
    for: 'Individual',
    img: <MdPerson size={24} />,
    price: 'Starting at ₹850 per month',
    features: [
      '✔ Access to 11,000+ top courses',
      '✔ Certification prep',
      '✔ Goal-focused recommendations',
      '✔ AI-powered coding exercises'
    ]
  },
  {
    id: 2,
    title: 'Team Plan',
    description: 'For your team',
    for: '2 to 20 people',
    img: <FaUserGroup size={24} />,
    price: '₹1,167 a month per user',
    features: [
      '✔ Access to 11,000+ top courses',
      '✔ Certification prep',
      '✔ Goal-focused recommendations',
      '✔ AI-powered coding exercises',
      '✔ Analytics and adoption reports'
    ]
  },
  {
    id: 3,
    title: 'Enterprise Plan',
    description: 'For your organization',
    for: 'More than 20 people',
    img: <MdGroups size={24} />,
    price: 'Contact sales for pricing',
    features: [
      '✔ Access to 25,000+ top courses',
      '✔ Certification prep',
      '✔ Goal-focused recommendations',
      '✔ AI-powered coding exercises',
      '✔ Advanced analytics and insights',
      '✔ Dedicated customer success team',
      '✔ International course collection featuring 15 languages',
      '✔ Customizable content'
    ]
  }
];

const PricingSection = () => {

  const navigate = useNavigate();

  return (
    <div className="container px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Accelerate growth — for you or your organization
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border-t-8 border-purple-900 bg-white border rounded-lg shadow-lg p-6 flex flex-col w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            {/* Top border and upper part with light background */}
            <div className="bg-gray-100 rounded-t-lg p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{plan.description}</p>
              <div className="flex items-center mb-2">
                <div className="mr-2">{plan.img}</div>
                <p className="text-gray-500 text-sm">{plan.for}</p>
              </div>
            </div>

            {/* Pricing and action button */}
            <p className="text-xl font-bold text-gray-900 mt-4">{plan.price}</p>
            <button onClick={() => {
              window.scrollTo(0, 0);
              navigate("/personal-plan");
            }}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300 mt-4 flex items-center justify-center gap-2"
            >
              {plan.title === 'Enterprise Plan' ? 'Request a demo' : 'Start subscription'}
              <FaArrowRightLong />
            </button>

            {/* Features list */}
            <ul className="text-left text-gray-600 mt-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
