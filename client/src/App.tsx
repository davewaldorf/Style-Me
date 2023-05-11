import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

//Components
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import LandingPage from './components/LandingPage/LandingPage';
import Explore from './components/Explore/Explore';


function App() {
  const authorized  = localStorage.getItem('authentificated');
  

  return (
    <Router>
      <Routes>
        {authorized ? (
          <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} /> */}
          </>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}



export default App;
