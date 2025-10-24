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
import therapyImage from "@/assets/therapy-session.jpg";

// Lazy load service sections for better performance
const ContactForm = lazy(() => import("@/components/contact/ContactForm"));
const ProgramOverviewSection = lazy(() => import("@/components/services/ProgramOverviewSection"));
const WhyCenterBased = lazy(() => import("@/components/services/WhyCenterBased"));
const DailyScheduleSection = lazy(() => import("@/components/services/DailyScheduleSection"));

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-secondary">ABA therapy</span>{" "}
                <span className="text-raisin-black">at Ability Avenues</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Ability Avenues, we provide applied behavior analysis (ABA) therapy, a gold-standard, 
                evidence-based approach for helping children with autism reach milestone moments. Our clinically 
                excellent ABA therapy takes place in bright, playful environments designed to encourage growth, 
                play, and learning.
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
            </motion.div>

            {/* Right Image */}
            <motion.div
              key={`center-right-${pathname}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-xanthous/30 -z-10" />
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={therapyImage}
                  alt="ABA Therapy Session"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                  width={500}
                  height={500}
                />
              </div>
              
              {/* Decorative floating icons */}
              <motion.div
                className="absolute -top-10 -right-10 text-secondary"
                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Puzzle className="w-16 h-16" />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 text-primary"
                animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Pencil className="w-20 h-20" />
              </motion.div>
              <motion.div
                className="absolute top-10 -left-8 text-xanthous"
                animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Star className="w-14 h-14" fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 right-10 text-secondary"
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
        <ProgramOverviewSection />
        <WhyCenterBased />
        <DailyScheduleSection />

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
