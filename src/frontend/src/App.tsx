import React from "react";
import BankFinanceBanner from "./components/BankFinanceBanner";
import BranchesSection from "./components/BranchesSection";
import Contact from "./components/Contact";
import CustomerReview from "./components/CustomerReview";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InquiryForm from "./components/InquiryForm";
import OdishaGuide from "./components/OdishaGuide";
import OfferBanner from "./components/OfferBanner";
import PMSuryaGharGuide from "./components/PMSuryaGharGuide";
import SchemeInfo from "./components/SchemeInfo";
import Services from "./components/Services";
import SolarCalculator from "./components/SolarCalculator";
import SolarPricing from "./components/SolarPricing";
import Testimonials from "./components/Testimonials";
import VisitorPopup from "./components/VisitorPopup";
import WarrantyGuarantee from "./components/WarrantyGuarantee";
import WhatsAppSection from "./components/WhatsAppSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <OfferBanner />
          <SchemeInfo />
          <PMSuryaGharGuide />
          <Services />
          <SolarPricing />
          <SolarCalculator />
          <Testimonials />
          <CustomerReview />
          <BranchesSection />
          <OdishaGuide />
          <BankFinanceBanner />
          <WhyChooseUs />
          <WarrantyGuarantee />
          <WhatsAppSection />
          <InquiryForm />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
        <VisitorPopup />
      </div>
    </LanguageProvider>
  );
}

export default App;
