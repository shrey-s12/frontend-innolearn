import React from 'react';
import signUp_img from '../assets/signup/signup_img.webp';

const SignupPage = () => {
  return (
    <div className="flex justify-between items-center min-h-screen p-12 font-sans">
      {/* Left Section with Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={signUp_img}
          alt="Illustration"
          className="w-4/5 h-auto"
        />
      </div>
      
      {/* Right Section with Signup Form */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Sign up and start learning</h2>
        
        <form className="flex flex-col">
          <input 
            type="text" 
            placeholder="Full name" 
            className="p-3 mb-4 text-lg border border-gray-300 rounded-md"
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 mb-4 text-lg border border-gray-300 rounded-md"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 mb-4 text-lg border border-gray-300 rounded-md"
            required 
          />
          
          {/* Checkbox */}
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="offers" 
              className="mr-2"
            />
            <label htmlFor="offers" className="text-sm">
              Send me special offers, personalized recommendations, and learning tips.
            </label>
          </div>
          
          {/* Signup Button */}
          <button 
            type="submit" 
            className="p-3 bg-purple-600 text-white text-lg font-semibold rounded-md hover:bg-purple-700 transition-colors">
            Sign up
          </button>
        </form>
        
        <p className="mt-6 text-sm">
          By signing up, you agree to our{' '}
          <a href="#" className="text-purple-600 underline">Terms of Use</a> and{' '}
          <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
        </p>
        
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <a href="#" className="text-purple-600 underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
