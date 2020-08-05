import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
  <>
   <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/terms" component={App} />
  </Router>
  <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </div>
    </>
  );
}

export default App;
