import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SchemeInfo from './components/SchemeInfo';
import OdishaGuide from './components/OdishaGuide';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BankFinanceBanner from './components/BankFinanceBanner';
import WarrantyGuarantee from './components/WarrantyGuarantee';
import InquiryForm from './components/InquiryForm';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-outfit">
        <Header />
        <main>
          <Hero />
          <SchemeInfo />
          <OdishaGuide />
          <Services />
          <WhyChooseUs />
          <BankFinanceBanner />
          <WarrantyGuarantee />
          <InquiryForm />
          <WhatsAppSection />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
