import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LowerNavbar from './components/LowerNavbar/LowerNavbar';
import HomeSection from './pages/home/HomeSection';
import Footer from './components/Footer';
import ApplyAsTeacher from './pages/home/ApplyAsTeacher';
import Testimonials from './pages/home/testimonials/Testimonials';
import FAQSection from './pages/home/FAQSection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Maps from './components/Maps';
import Gallery from './pages/home/Gallery';
import SquareCardContainer from './components/SquareCardContainer';
import FeaturesSection from './pages/home/FeaturesSection';
import Navs from './components/LowerNavbar/Navs';
import Test from './assets/Test';


const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
    <Navbar />
    <Navs />
    <HomeSection />
    <SquareCardContainer />
    <FeaturesSection />
    <Gallery />
    <Testimonials />
    <Maps />
    <ApplyAsTeacher />
    <FAQSection />
    <Footer />

    
    </>
  );
};

export default App;
