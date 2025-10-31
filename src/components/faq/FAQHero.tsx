'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, HelpCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const FAQHero = () => {
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
    <section className="relative min-h-[90vh] pt-24 md:pt-32 pb-12 md:pb-20">
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
              Frequently Asked{' '}
              <span className="text-pacific-cyan">Questions</span>{' '}
              About Our ABA Therapy Services
            </h1>

            <div ref={subtitleRef} className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Find quick answers to common questions about our ABA therapy services, 
                center-based programs, insurance coverage, and how we support children 
                and families on their developmental journey.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Our friendly team is here to help 
                answer any questions you may have.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-yellow-green hover:bg-yellow-green/90 text-raisin-black font-semibold shadow-lg text-base md:text-lg px-6 md:px-8 py-6"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="group">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-6 bg-white hover:bg-gray-50 border-2"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call →
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
                  <HelpCircle className="w-5 h-5 text-pacific-cyan flex-shrink-0" />
                  <span className="text-muted-foreground">Quick answers to common questions</span>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Expert support when you need it</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Placeholder */}
              <div className="relative z-10 aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pacific-cyan/20 to-yellow-green/20 border-2 border-border/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <HelpCircle className="w-24 h-24 md:w-32 md:h-32 text-pacific-cyan/40 mx-auto mb-4" />
                  <p className="text-sm md:text-base text-muted-foreground">Image placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;

