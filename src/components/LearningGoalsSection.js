import React, { useState } from 'react';
import HandsOnPractice from '../assets/homePage/HomeSection4/hands-on-practice.png';
import Certificate from '../assets/homePage/HomeSection4/certificate.png';
import Insights from '../assets/homePage/HomeSection4/insights-and-analytics.png';
import CustomContent from '../assets/homePage/HomeSection4/customizable-content.png';
import DesktopHandsOnPractice from '../assets/homePage/HomeSection4/desktop-hands-on-practice.png';
import DesktopCertificate from '../assets/homePage/HomeSection4/desktop-certificate.png';
import DesktopInsights from '../assets/homePage/HomeSection4/desktop-insights-and-analytics.png';
import DesktopCustomContent from '../assets/homePage/HomeSection4/desktop-customizable-content.png';

// Updated learningGoals array with image mapping
const learningGoals = [
    {
        id: 1,
        title: 'Hands-on training',
        description: 'Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.',
        img: HandsOnPractice,
        desktopImg: DesktopHandsOnPractice,
    },
    {
        id: 2,
        title: 'Certification prep',
        description: 'Prep for industry-recognized certifications by solving real-world challenges and earning badges.',
        img: Certificate,
        desktopImg: DesktopCertificate,
    },
    {
        id: 3,
        title: 'Insights and analytics',
        description: 'Fast-track goals with advanced insights plus a dedicated customer success team.',
        img: Insights,
        desktopImg: DesktopInsights,
        plan: 'Enterprise Plan',
    },
    {
        id: 4,
        title: 'Customizable content',
        description: 'Create tailored learning paths for teams and organizations, and host your own content.',
        img: CustomContent,
        desktopImg: DesktopCustomContent,
        plan: 'Enterprise Plan',
    },
];

const LearningGoalsSection = () => {
    // State to track the currently selected goal
    const [selectedGoalId, setSelectedGoalId] = useState(1); // Default to the first goal

    const handleClick = (goal) => {
        // Update the right-side image when a left-side item is clicked
        setSelectedGoalId(goal.id);
    };

    return (
        <div className="ml-10 mr-20 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
            {/* Left Side: Learning Goals */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Learning focused on your goals</h2>
                <div className="space-y-6">
                    {learningGoals.map((goal) => (
                        <div
                            key={goal.id}
                            className={`p-6 rounded-lg border-2 flex items-start cursor-pointer transition duration-300 relative
                                ${goal.id === selectedGoalId ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'}
                                hover:bg-purple-50 hover:bg-gray-300 hover:border-purple-500`}
                            onClick={() => handleClick(goal)}
                            style={{
                                borderLeft: goal.id === selectedGoalId ? '10px solid #7C3AED' : '5px solid transparent', // Purple border for selected item
                            }}
                        >
                            <div className="w-16 h-16 mr-4">
                                <img
                                    src={goal.img}
                                    alt={goal.title}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
                                <p className="text-gray-600 mb-2">{goal.description}</p>
                                {goal.plan && (
                                    <span className="text-purple-600 text-sm bg-gray-100 px-2 py-1 rounded-md mt-2 block">
                                        {goal.plan}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Score Analytics */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={learningGoals.find((goal) => goal.id === selectedGoalId).desktopImg} // Dynamically updated image
                    alt="Selected Goal"
                    className="w-full lg:w-4/5 h-auto object-contain rounded-md shadow-lg"
                />
            </div>
        </div>
    );
};

export default LearningGoalsSection;
