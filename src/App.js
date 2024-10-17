import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InnoBusiness from './pages/InnoBusiness';
import PersonalPlanPage from './pages/PersonalPlanPage';
import SignupPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route path='/' element={<HomePage />} />
        {/* Business Page Route */}
        <Route path='/innoLearnBusiness' element={<InnoBusiness />} />
        {/* Personal Plan Page Route */}
        <Route path='/personal-plan' element={<PersonalPlanPage />} />
        {/* SignUp Route */}
        <Route path='/signup' element={<SignupPage />} />
        {/* Login Route */}
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
