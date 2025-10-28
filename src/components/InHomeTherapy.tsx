'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Puzzle, Star, Pencil, Smile, Clock, Users } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import greenOval from "@/assets/green-oval.svg";
import greenOvalOpaque from "@/assets/green-oval-opaque.svg";
import girlHoldingToy from "@/assets/girl-holding-toy.png";
import ContactForm from "@/components/contact/ContactForm";
import InHomeProgramOverview from "@/components/services/InHomeProgramOverview";
import WhatIsInHomeABA from "@/components/services/WhatIsInHomeABA";
import WhyInHome from "@/components/services/WhyInHome";
import InHomeScheduleSection from "@/components/services/InHomeScheduleSection";
import InHomeTherapyApproach from "@/components/services/InHomeTherapyApproach";
import InsuranceCoverage from "@/components/services/InsuranceCoverage";

const InHomeTherapy = () => {
  const pathname = usePathname();

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
                <span className="text-xanthous">In-Home ABA Therapy</span>{" "}
                <span className="text-raisin-black">in Minneapolis, MN</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Personalized one-on-one ABA therapy delivered in the comfort and familiarity of your home environment. 
                Our experienced therapists work with your child in their natural setting, helping them learn and practice 
                essential skills while involving the whole family in the therapeutic process. With flexible scheduling (20-40 hours per week) 
                and individualized treatment plans, we bring evidence-based care directly to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 bg-xanthous hover:bg-xanthous/90 text-raisin-black" asChild>
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md md:max-w-md mx-auto">
                {/* Layer 1: Green Oval Opaque - Smaller, Bottom Layer */}
                <motion.div
                  initial={{ opacity: 0, x: 200, scale: 0.78, y: '-10%' }}
                  whileInView={{ opacity: 1, x: '-15%', scale: 0.78, y: '-10%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={greenOvalOpaque}
                    alt=""
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                    loading="lazy"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 2: Green Oval (Non-Opaque) - Larger, Middle Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -200, scale: 1.08, y: '25%' }}
                  whileInView={{ opacity: 1, x: 0, scale: 1.08, y: '25%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={greenOval}
                    alt=""
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                    loading="lazy"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Layer 3: Girl Holding Toy - Enlarged, Top Layer */}
                <motion.div
                  initial={{ opacity: 0, y: '-10%', scale: 1.3 }}
                  whileInView={{ opacity: 1, y: '-10%', scale: 1.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <Image
                    src={girlHoldingToy}
                    alt="Child engaging in creative play therapy"
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
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
      <Footer />
    </div>
  );
};

export default InHomeTherapy;

