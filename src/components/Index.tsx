'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/shared/Header";
import Hero from "@/components/home/Hero";
// Lazy load below-the-fold components for better initial load performance
const Services = lazy(() => import("@/components/home/Services"));
const ProgramHighlights = lazy(() => import("@/components/home/ProgramHighlights"));
const IntakeProcess = lazy(() => import("@/components/home/IntakeProcess"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const ContactForm = lazy(() => import("@/components/contact/ContactForm"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const Footer = lazy(() => import("@/components/shared/Footer"));

const Index = () => {
  const windowHash = typeof window !== 'undefined' ? window.location.hash : '';

  useEffect(() => {
    if (!windowHash) return;
    const id = windowHash.slice(1);
    let attempts = 0;
    const maxAttempts = 20; // retry up to ~2s to wait for lazy components
    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(interval);
      } else if (++attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [windowHash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <Services />
          <ProgramHighlights />
          <IntakeProcess />
          <Testimonials />
          <ContactForm />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
