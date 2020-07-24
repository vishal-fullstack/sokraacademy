import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <AboutUs />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
