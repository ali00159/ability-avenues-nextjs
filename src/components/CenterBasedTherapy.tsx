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
import blueHexagonOpaque from "@/assets/blue-hexagon-opaqe.svg";
import blueHexagon from "@/assets/blue-hexagon.svg";
import kidSmilingImage from "@/assets/kid-smiling-hero-center-page.png";

// Lazy load service sections for better performance
const ContactForm = lazy(() => import("@/components/contact/ContactForm"));
const WhatIsCenterBasedABA = lazy(() => import("@/components/services/WhatIsCenterBasedABA"));
const ProgramOverviewSection = lazy(() => import("@/components/services/ProgramOverviewSection"));
const WhyCenterBased = lazy(() => import("@/components/services/WhyCenterBased"));
const DailyScheduleSection = lazy(() => import("@/components/services/DailyScheduleSection"));
const InsuranceCoverage = lazy(() => import("@/components/services/InsuranceCoverage"));
const MinneapolisLocation = lazy(() => import("@/components/services/MinneapolisLocation"));


const Services = () => {
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
              key={`center-left-${pathname}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="center-hero-title text-5xl md:text-6xl font-bold mb-6"
                style={{ lineHeight: '1.5' }}
              >
                <span className="text-pacific-cyan">Center-Based ABA Therapy</span>{" "}
                <span className="text-raisin-black">in Minneapolis for Children & Teens with Autism</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Ability Avenues, we provide evidence-based center-based ABA therapy for children and teens ages 1-18 with autism in Minneapolis. 
                Our BCBA-supervised programs offer four specialized tracks: Early Steps (ages 1-3), Foundations (ages 4-7), Skills Builder (ages 8-12), 
                and Transition (ages 13-18). We accept EIDBI coverage and are committed to helping your child reach their milestone moments in our 
                bright, playful, clinically excellent autism center.
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
                key={`trust-center-${pathname}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 md:gap-10 mt-8"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Insurance Accepted</div>
                    <div className="text-muted-foreground">EIDBI & Major Plans</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Ages 1-18</div>
                    <div className="text-muted-foreground">4 Specialized Tracks</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image - Layered Hexagon Composition */}
            <motion.div
              key={`center-right-${pathname}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md sm:max-w-lg md:max-w-xl mx-auto">
                {/* Layer 1: Background Opaque Blue Hexagon */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1, x: 200, y: '-6%' }}
                  whileInView={{ opacity: 1, scale: 1.1, x: '-5%', y: '-6%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center z-0 scale-110 md:scale-125"
                >
                  <Image
                    src={blueHexagonOpaque}
                    alt=""
                    className="w-full h-full object-contain"
                    width={400}
                    height={400}
                    loading="lazy"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 2: Foreground Solid Blue Hexagon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -200 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center z-10 scale-100 md:scale-110"
                >
                  <Image
                    src={blueHexagon}
                    alt=""
                    className="w-full h-full object-contain"
                    width={400}
                    height={400}
                    loading="lazy"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 3: Kid Smiling Image */}
                <motion.div
                  initial={{ opacity: 0, y: '-2.4%', scale: .70 }}
                  whileInView={{ opacity: 1, y: '-2.4%', scale: .70 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center z-20 scale-90 md:scale-95"
                >
                  <Image
                    src={kidSmilingImage}
                    alt="Happy child at center-based ABA therapy in Minneapolis"
                    className="w-full h-full object-contain"
                    width={400}
                    height={400}
                    priority
                    quality={85}
                  />
                </motion.div>
              </div>
              
              {/* Decorative floating icons */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-secondary"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Puzzle className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 text-primary"
                animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Pencil className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </motion.div>
              <motion.div
                className="absolute top-8 left-1 sm:top-10 sm:left-2 text-xanthous"
                animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14" fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 right-2 sm:-bottom-2 sm:right-4 text-secondary"
                animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Smile className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>
      {/* New Sections Following Design System */}
      <Suspense fallback={<div className="h-screen" />}>
        <ProgramOverviewSection />
        <WhatIsCenterBasedABA />
        <WhyCenterBased />
        <DailyScheduleSection />
        <InsuranceCoverage />
        <MinneapolisLocation />

        {/* Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Services;
