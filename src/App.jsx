// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup'; 
import FindLockers from './pages/Lockers';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-lockers" element={<FindLockers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
