import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Components
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import LandingPage from './components/LandingPage/LandingPage';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const authenticated  = localStorage.getItem('authenticated');

  return (
    <Router>
      <Routes>
        {!authenticated ? (
          <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactForm />} />
          </>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}



export default App;
