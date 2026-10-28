import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DiagnosticSection from './components/DiagnosticSection';
import WhyUsSection from './components/WhyUsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [enquiryDetails, setEnquiryDetails] = useState({});

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookRepair = () => scrollTo('contact');

  const selectService = (category, device) => {
    setEnquiryDetails({
      initialCategory: category,
      initialDevice: device,
    });
    bookRepair();
  };

  const bookWithDiagnosis = (category, device, problem) => {
    setEnquiryDetails({
      initialCategory: category,
      initialDevice: device,
      initialProblem: problem,
    });
    bookRepair();
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <HeroSection onBookRepair={bookRepair} />
        <ServicesSection onSelectService={selectService} />
        <DiagnosticSection onBookWithDiagnosis={bookWithDiagnosis} />
        <WhyUsSection />
        <AboutSection onBookRepair={bookRepair} />
        <ContactSection {...enquiryDetails} />
      </main>
      <Footer onScrollTo={scrollTo} />
      <FloatingActions />
    </div>
  );
}
