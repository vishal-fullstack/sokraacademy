import React from 'react';
import Navbar from './Navbar';
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import SocialMedia from './SocialMedia';
import Footer from './Footer';

function Home() {
  return (
  <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
