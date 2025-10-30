'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhatIsEidbi = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 1, y: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              onEnter: () => {},
            },
          }
        );
      });

      return () => {
        ctx.revert();
        if (contentRef.current) {
          gsap.set(contentRef.current, { clearProps: 'all' });
        }
      };
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-cornsilk/20 via-white to-pacific-cyan/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div ref={contentRef} className="space-y-6">
            {/* Eyebrow Text */}
            <div className="inline-block">
              <span className="text-yellow-green font-semibold uppercase tracking-wider text-sm">
                Understanding EIDBI
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What is Minnesota's <span className="text-yellow-green">Early Intensive Developmental and Behavioral Intervention </span> 
              <span className="text-raisin-black">(EIDBI) Program</span>?
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                EIDBI is a Minnesota Health Care Programs benefit for children and youth with autism 
                or a related condition, up to age 21. The benefit funds medically necessary, early 
                and intensive intervention.
              </p>
              
              <p>
                Eligibility ties to a confirmed diagnosis, a comprehensive multi-disciplinary evaluation, 
                enrollment in a qualifying health program, and age. Qualifying coverage includes Medical 
                Assistance and MinnesotaCare.
              </p>
              
              <p>
                Families reach EIDBI in different ways. Some qualify for Medical Assistance based on 
                income. Others use MA under the TEFRA option, which looks at the child's income and 
                disability status, not the full household income. TEFRA routes children with disabilities 
                into MA to cover EIDBI services. Apply through your county or tribal agency.
              </p>
              
              <p>
                EIDBI supports several treatment modalities. Minnesota lists Applied Behavior Analysis, 
                DIR or Floortime, Early Start Denver Model, and Relationship Development Intervention 
                as approved approaches. Play Project and Early Social Interaction were removed effective 
                July 1, 2025.
              </p>
            </div>

            {/* Compact trust row (keeps same icons and text) */}
            <motion.div 
              ref={statsRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 md:gap-10 pt-6"
            >
              {/* Established 2013 */}
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6" style={{ color: 'hsl(var(--pacific-cyan))' }} aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold text-foreground">Established</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">2013</div>
                </div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              {/* Evidence Based */}
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6" style={{ color: 'hsl(var(--yellow-green))' }} aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold text-foreground">Evidence</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Based</div>
                </div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              {/* Family Centered */}
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" style={{ color: 'hsl(var(--xanthous))' }} aria-hidden="true" />
                <div>
                  <div className="text-xl font-bold text-foreground">Family</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Centered</div>
                </div>
              </div>
            </motion.div>

            {/* Link */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-pacific-cyan hover:text-pacific-cyan/80 font-medium transition-colors"
              >
                Learn More About EIDBI →
              </Link>
            </div>
          </div>

          {/* Right Column - Decorative Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Decorative Accent Circle */}
              <div
                className="absolute -bottom-8 -left-8 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yellow-green/20 to-pacific-cyan/20 rounded-full blur-2xl"
                aria-hidden="true"
              />
              
              {/* Main Visual */}
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cornsilk to-pacific-cyan/10 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Placeholder image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEidbi;

