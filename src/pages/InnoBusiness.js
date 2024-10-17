import React, { useState } from 'react';

function InnoBusiness() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        companyName: '',
        companySize: '',
        numberOfLearners: '',
        jobTitle: '',
        jobLevel: '',
        trainingNeeds: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left section */}
                <div>
                    <header className="bg-cover bg-center text-black py-16 px-8 border border-purple-900 bg-white rounded-lg shadow-lg">
                        <h1 className="text-5xl font-extrabold mb-6">Get Your Custom Demo</h1>
                        <p className="text-lg mb-8 font-light">
                            Tell us your needs, and we’ll start on a custom plan to drive results.
                        </p>
                        <ul className="pl-6 space-y-3 text-lg font-medium">
                            <li>✔️ Train your entire workforce with 27,000+ courses</li>
                            <li>✔️ Prep employees for 200+ industry-recognized certification exams</li>
                            <li>✔️ Develop skilled tech teams with practice environments</li>
                            <li>✔️ Identify emerging skills gaps & learning trends</li>
                            <li>✔️ Integrate content with your existing LMS</li>
                        </ul>
                    </header>
                    <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
                        <p className="text-center text-xl font-semibold mb-8">Trusted by over 16,000 companies and millions of learners worldwide</p>
                        <div className="flex justify-center space-x-8">
                            <img src="samsung-logo.png" alt="Samsung" className="h-12" />
                            <img src="cisco-logo.png" alt="Cisco" className="h-12" />
                            <img src="vimeo-logo.png" alt="Vimeo" className="h-12" />
                            {/* Add more logos */}
                        </div>
                    </div>
                </div>

                {/* Right section (Form) */}
                <div className="bg-white shadow-lg rounded-lg p-10">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Request a Demo</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name *"
                                className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name *"
                                className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Work Email *"
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number *"
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Where are you located? *</option>
                            <option value="US">US</option>
                            <option value="India">India</option>
                            {/* Add more options */}
                        </select>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Company Name *"
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                        <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Company Size *</option>
                            <option value="1-50">1-50</option>
                            <option value="51-200">51-200</option>
                            {/* Add more options */}
                        </select>
                        <select
                            name="numberOfLearners"
                            value={formData.numberOfLearners}
                            onChange={handleChange}
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Number of Learners *</option>
                            <option value="1-50">1-50</option>
                            <option value="51-200">51-200</option>
                            {/* Add more options */}
                        </select>
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="Job Title *"
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        />
                        <select
                            name="jobLevel"
                            value={formData.jobLevel}
                            onChange={handleChange}
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">Job Level *</option>
                            <option value="Entry">Entry</option>
                            <option value="Manager">Manager</option>
                            {/* Add more options */}
                        </select>
                        <textarea
                            name="trainingNeeds"
                            value={formData.trainingNeeds}
                            onChange={handleChange}
                            placeholder="What are your organization's training needs? (Optional)"
                            className="border-gray-300 p-3 rounded-lg shadow-sm w-full focus:border-blue-500 focus:ring focus:ring-blue-200"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 w-full transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InnoBusiness;
