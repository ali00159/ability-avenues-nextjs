'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, HelpCircle, MessageCircle, BookOpen, Lightbulb, Users, Target } from 'lucide-react';
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
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Floating Icons */}
          <motion.div
            className="absolute top-5 right-5 text-pacific-cyan hidden lg:block"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <BookOpen className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute top-10 -left-4 text-yellow-green hidden lg:block"
            animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Lightbulb className="w-20 h-20" />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 right-20 text-xanthous hidden lg:block"
            animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Users className="w-14 h-14" />
          </motion.div>
          <motion.div
            className="absolute bottom-5 -left-20 text-pacific-cyan hidden lg:block"
            animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Target className="w-16 h-16" />
          </motion.div>
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
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
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
              className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm"
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
      </div>
    </section>
  );
};

export default FAQHero;

