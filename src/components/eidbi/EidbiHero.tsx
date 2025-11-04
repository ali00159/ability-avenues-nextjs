'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Puzzle, Pencil, Star, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import blueTriangle from '@/assets/blue-triangle-icon.svg';
import blueTriangleOpaque from '@/assets/blue-triangle-opaue-icon.svg';
import girlWithSunglasses from '@/assets/girl-big-sunglasses-eidbi.png';

const EidbiHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset elements to ensure clean state
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 });
    
    tl.fromTo(
      titleRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }
    ).fromTo(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      '-=0.4'
    );

    // Cleanup function to reset on unmount
    return () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { clearProps: 'all' });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { clearProps: 'all' });
      }
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-20 max-w-2xl w-full">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              EIDBI Services in Minnesota:{' '}
              <span className="text-yellow-green">Hope, Help & Support</span>{' '}
              for Your Child with Autism
            </h1>

            <div ref={subtitleRef} className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Early Intensive Developmental and Behavioral Intervention (EIDBI) provides comprehensive, 
                evidence-based autism services at no cost to eligible Minnesota families through Medical Assistance.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our EIDBI program combines Applied Behavior Analysis (ABA) therapy, developmental services, 
                and family support to help children with autism reach their full potential.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-yellow-green hover:bg-yellow-green/90 text-raisin-black font-semibold shadow-lg text-base md:text-lg px-6 md:px-8 py-6"
                  >
                    Check Your Eligibility Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="group">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-6 bg-white hover:bg-gray-50 border-2"
                  >
                    Speak to a Specialist →
                  </Button>
                </Link>
              </div>

              {/* Trust Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pt-8 flex flex-wrap items-center gap-6 md:gap-8 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-pacific-cyan flex-shrink-0" />
                  <span className="text-muted-foreground">Helping Minnesota families since 2013</span>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">10,000+ children served</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Animated Images */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md sm:max-w-lg md:max-w-xl mx-auto">
              {/* Layer 1: Opaque Blue Triangle - Bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -200, y: '-1%' }}
                whileInView={{ opacity: 1, scale: 0.9, x: '-1%', y: '-1%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-0 scale-90 md:scale-100"
              >
                <Image
                  src={blueTriangleOpaque}
                  alt=""
                  className="w-full h-full object-contain"
                  width={550}
                  height={550}
                  loading="lazy"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Layer 2: Solid Blue Triangle - Middle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 200 }}
                whileInView={{ opacity: 1, scale: 0.8, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-[5] scale-80 md:scale-90"
              >
                <Image
                  src={blueTriangle}
                  alt=""
                  className="w-full h-full object-contain"
                  width={450}
                  height={450}
                  loading="lazy"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Layer 3: Girl with Sunglasses Image - Top */}
              <motion.div
                initial={{ opacity: 0, x: '20%', y: '5.5%', scale: 1.0 }}
                whileInView={{ opacity: 1, x: '20%', y: '5.5%', scale: 1.0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-10 scale-115 md:scale-125"
              >
                <Image
                  src={girlWithSunglasses}
                  alt="Child with sunglasses during EIDBI therapy session"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EidbiHero;

