'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Check, Phone, ArrowRight, ChevronRight, Puzzle, Star, Pencil, Smile, Clock, Target, TrendingUp, Search as SearchIcon, Sparkles, Home, Users, Building2 } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import greenOval from "@/assets/green-oval.svg";
import greenOvalOpaque from "@/assets/green-oval-opaque.svg";
import girlHoldingToy from "@/assets/girl-holding-toy.png";

// Lazy load service sections for better performance
const ContactForm = lazy(() => import("@/components/contact/ContactForm"));
const InHomeProgramOverview = lazy(() => import("@/components/services/InHomeProgramOverview"));
const WhatIsInHomeABA = lazy(() => import("@/components/services/WhatIsInHomeABA"));
const WhyInHome = lazy(() => import("@/components/services/WhyInHome"));
const InHomeScheduleSection = lazy(() => import("@/components/services/InHomeScheduleSection"));
const InHomeTherapyApproach = lazy(() => import("@/components/services/InHomeTherapyApproach"));
const InsuranceCoverage = lazy(() => import("@/components/services/InsuranceCoverage"));

const InHomeTherapy = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("aba-therapy");

  const sections = [
    { id: "aba-therapy", label: "ABA Therapy Overview", icon: HeartHandshake },
    { id: "in-home", label: "In-Home Services", icon: Home },
    { id: "center-based", label: "Center-Based Services", icon: Building2 },
    { id: "eidbi", label: "EIDBI Services", icon: Users },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              key={`home-left-${pathname}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-secondary">In-Home ABA Therapy</span>{" "}
                <span className="text-raisin-black">in Minneapolis & Minnesota</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Personalized one-on-one ABA therapy delivered in the comfort and familiarity of your home environment. 
                Our experienced therapists work with your child in their natural setting, helping them learn and practice 
                essential skills while involving the whole family in the therapeutic process. With flexible scheduling (20-40 hours per week) 
                and individualized treatment plans, we bring evidence-based care directly to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">Get started</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators with Icons */}
              <motion.div 
                key={`trust-inhome-${pathname}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 md:gap-10 mt-8"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Insurance Accepted</div>
                    <div className="text-muted-foreground">EIDBI & Major Plans</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Ages 1-18</div>
                    <div className="text-muted-foreground">Personalized Care</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-xanthous flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Flexible Scheduling</div>
                    <div className="text-muted-foreground">20-40 Hours/Week</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={`home-right-${pathname}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Layer 1: Green Oval Opaque - Smaller, Bottom Layer */}
                <motion.div
                  initial={{ opacity: 0, x: 200, scale: 0.78, y: '-10%' }}
                  animate={{ opacity: 1, x: '-15%', scale: 0.78, y: '-10%' }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={greenOvalOpaque}
                    alt=""
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 2: Green Oval (Non-Opaque) - Larger, Middle Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -200, scale: 1.08, y: '25%' }}
                  animate={{ opacity: 1, x: 0, scale: 1.08, y: '25%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={greenOval}
                    alt=""
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 3: Girl Holding Toy - Enlarged, Top Layer */}
                <motion.div
                  initial={{ opacity: 0, y: '-10%', scale: 1.3 }}
                  animate={{ opacity: 1, y: '-10%', scale: 1.3 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <Image
                    src={girlHoldingToy}
                    alt="Child engaging in creative play therapy"
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                  />
                </motion.div>
              </div>
              
              {/* Decorative floating icons */}
              <motion.div
                className="absolute -top-4 -right-4 text-secondary"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Puzzle className="w-16 h-16" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 text-primary"
                animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Pencil className="w-20 h-20" />
              </motion.div>
              <motion.div
                className="absolute top-10 left-2 text-xanthous"
                animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Star className="w-14 h-14" fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 right-4 text-secondary"
                animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Smile className="w-16 h-16" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>
      {/* New Sections Following Design System */}
      <Suspense fallback={<div className="h-screen" />}>
        <InHomeProgramOverview />
        <WhatIsInHomeABA />
        <WhyInHome />
        <InHomeScheduleSection />
        <InHomeTherapyApproach />
        <InsuranceCoverage />

        {/* Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default InHomeTherapy;

