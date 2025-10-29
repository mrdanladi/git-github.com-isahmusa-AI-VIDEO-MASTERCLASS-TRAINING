
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import Testimonials from './components/Testimonials';
import CourseBenefits from './components/CourseBenefits';
import BonusSection from './components/BonusSection';
import CtaSection from './components/CtaSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const enrollmentRef = React.useRef<HTMLDivElement>(null);

  const scrollToEnrollment = () => {
    enrollmentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-deep-gray overflow-x-hidden">
      <Header onEnrollClick={scrollToEnrollment} />
      <main>
        <Hero onEnrollClick={scrollToEnrollment} />
        <CountdownSection />
        <CourseBenefits />
        <Testimonials />
        <BonusSection />
        <div ref={enrollmentRef}>
          <CtaSection />
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
