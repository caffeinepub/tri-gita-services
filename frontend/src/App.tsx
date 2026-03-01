import Header from './components/Header';
import Hero from './components/Hero';
import SchemeInfo from './components/SchemeInfo';
import OdishaGuide from './components/OdishaGuide';
import WhyChooseUs from './components/WhyChooseUs';
import WarrantyGuarantee from './components/WarrantyGuarantee';
import Services from './components/Services';
import BankFinanceBanner from './components/BankFinanceBanner';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <SchemeInfo />
                <OdishaGuide />
                <WhyChooseUs />
                <WarrantyGuarantee />
                <Services />
                <BankFinanceBanner />
                <WhatsAppSection />
            </main>
            <Footer />
            <FloatingWhatsAppButton />
        </div>
    );
}
