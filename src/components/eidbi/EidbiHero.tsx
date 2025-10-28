'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Users, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const EidbiHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const accentCircleRef = useRef<HTMLDivElement>(null);

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

    // Parallax effect on accent circle
    if (accentCircleRef.current) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        gsap.to(accentCircleRef.current, {
          y: scrollY * 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

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
    <section className="relative min-h-[90vh] bg-gradient-to-br from-cornsilk/20 via-white to-pacific-cyan/5 overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-yellow-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        />
      </div>

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
              <span className="text-pacific-cyan">Hope, Help & Support</span>{' '}
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

          {/* Right Column - Circular Image with Decorative Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Accent Circle */}
              <div
                ref={accentCircleRef}
                className="absolute -top-8 -right-8 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-xanthous/30 to-yellow-green/20 rounded-full blur-2xl"
                aria-hidden="true"
              />
              
              {/* Main Image Circle */}
              <div className="relative z-10 aspect-square rounded-full overflow-hidden bg-gradient-to-br from-pacific-cyan/20 to-yellow-green/20 shadow-lg">
                <Image
                  src="/images/eidbi-hero-parent-child.jpg"
                  alt="Parent supporting child during therapy session"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>

              {/* Floating Calendar Icon */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Calendar className="w-8 h-8 text-pacific-cyan" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EidbiHero;

