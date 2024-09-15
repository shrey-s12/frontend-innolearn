import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Stack from '../assets/homePage/HomeSection6/stackOverFlow.png';
import Alvin from '../assets/homePage/HomeSection6/Alvin_Lim.jpeg';
import William from '../assets/homePage/HomeSection6/William_A_Wachlin.jpeg';
import Ian from '../assets/homePage/HomeSection6/Ian_Stevens.png';

const testimonials = [
    {
        id: 1,
        quote: "InnoLearn was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
        author: "StackOverflow",
        authorRole: "",
        stats: "37,076 responses collected",
        courseLink: "View Web Development courses",
        image: Stack
    },
    {
        id: 2,
        quote: "InnoLearn was truly a game-changer and a great guide for me as we brought Dimensional to life.",
        author: "Alvin Lim",
        authorRole: "Technical Co-Founder, CTO at Dimensional",
        courseLink: "View this iOS & Swift course",
        image: Alvin
    },
    {
        id: 3,
        quote: "InnoLearn gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
        author: "William A. Wachlin",
        authorRole: "Partner Account Manager at Amazon Web Services",
        courseLink: "View this AWS course",
        image: William
    },
    {
        id: 4,
        quote: "With InnoLearn Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
        author: "Ian Stevens",
        authorRole: "Head of Capability Development, North America at Publicis Sapient",
        courseLink: "Read full story",
        image: Ian
    }
];

const TestimonialSection = () => {
    return (
        <div className="ml-5 mr-8 py-4 px-0 bg-gray-50 md:px-20">
            <div className="mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    See what others are achieving through learning
                </h2>
                <p className="text-gray-600 text-lg">
                    Discover stories from people who transformed their careers through learning on our platform.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                    >
                        <BiSolidQuoteAltLeft className="text-3xl" />
                        <div className="flex items-start min-h-40">
                            <p className="text-gray-800">
                                {testimonial.quote}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            {testimonial.image && (
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <p className="font-semibold text-gray-900">
                                    {testimonial.author}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {testimonial.authorRole}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs">
                            {testimonial.stats}
                        </p>
                        <a
                            href="/"
                            className="text-purple-600 hover:underline mt-4 block text-sm"
                        >
                            {testimonial.courseLink} &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSection;
