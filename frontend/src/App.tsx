import Header from './components/Header';
import Hero from './components/Hero';
import SchemeInfo from './components/SchemeInfo';
import OdishaGuide from './components/OdishaGuide';
import WhyChooseUs from './components/WhyChooseUs';
import WarrantyGuarantee from './components/WarrantyGuarantee';
import Services from './components/Services';
import InquiryForm from './components/InquiryForm';
import BankFinanceBanner from './components/BankFinanceBanner';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <SchemeInfo />
          <OdishaGuide />
          <WhyChooseUs />
          <WarrantyGuarantee />
          <Services />
          <InquiryForm />
          <BankFinanceBanner />
          <WhatsAppSection />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
