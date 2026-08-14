'use client';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Logos from './components/Logos/Logos';
import Process from './components/Process/Process';
import Features from './components/Features/Features';
import Roadmap from './components/Roadmap/Roadmap';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AnimatedSection from './components/AnimatedSection/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnimatedSection id="hero">
          <Hero />
        </AnimatedSection>
        <AnimatedSection id="logos">
          <Logos />
        </AnimatedSection>
        <AnimatedSection id="process">
          <Process />
        </AnimatedSection>
        <AnimatedSection id="features">
          <Features />
        </AnimatedSection>
        <AnimatedSection id="roadmap">
          <Roadmap />
        </AnimatedSection>
        <AnimatedSection id="faq">
          <FAQ />
        </AnimatedSection>
        <AnimatedSection id="cta">
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
