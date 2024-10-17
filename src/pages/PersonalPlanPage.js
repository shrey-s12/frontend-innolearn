import React from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalPlanPage() {

    const navigate = useNavigate();
    return (
        <div>
            {/* Header Section */}
            <header className="bg-cover bg-center text-white py-20 px-8 bg-gradient-to-b from-purple-700 to-blue-900">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Unlock your potential with a personalized plan</h1>
                    <p className="text-lg mb-8">Unlimited learning, tailored to your needs.</p>
                    <button onClick={() => navigate("/signup")} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600">Get Started</button>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why choose a personal plan?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <img src="path_to_icon" alt="Feature 1" className="h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Unlimited Access</h3>
                            <p>Explore thousands of courses in various categories, with no limits.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <img src="path_to_icon" alt="Feature 2" className="h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                            <p>Get tailored course suggestions to help you meet your learning goals.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <img src="path_to_icon" alt="Feature 3" className="h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                            <p>Learn from top-rated instructors and industry experts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan Comparison Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Compare our plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
                            <ul className="space-y-3">
                                <li>Access to free courses</li>
                                <li>Limited features</li>
                                <li>Basic support</li>
                            </ul>
                            <button onClick={() => navigate("/signup")} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full mt-6 hover:bg-blue-700">Select Free Plan</button>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-semibold mb-4">Personal Plan</h3>
                            <ul className="space-y-3">
                                <li>Unlimited course access</li>
                                <li>Personalized learning recommendations</li>
                                <li>Advanced support</li>
                                <li>Certificates of completion</li>
                            </ul>
                            <button onClick={() => navigate("/signup")} className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full mt-6 hover:bg-yellow-600">Select Personal Plan</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos/Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Trusted by leading companies</h2>
                    <div className="flex justify-center space-x-8">
                        <img src="samsung-logo.png" alt="Samsung" className="h-12" />
                        <img src="cisco-logo.png" alt="Cisco" className="h-12" />
                        <img src="vimeo-logo.png" alt="Vimeo" className="h-12" />
                        {/* Add more logos */}
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-16 bg-blue-900 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
                <p className="mb-8">Join millions of learners and unlock your potential today.</p>
                <button onClick={() => navigate("/signup")} className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600">Get Started</button>
            </section>
        </div>  
    );
}

export default PersonalPlanPage;
