'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Award,
    label: '2013',
    value: 'Established',
    color: 'pacific-cyan',
  },
  {
    icon: Heart,
    label: 'Based',
    value: 'Evidence',
    color: 'yellow-green',
  },
  {
    icon: Users,
    label: 'Centered',
    value: 'Family',
    color: 'xanthous',
  },
];

const WhatIsEidbiDuplicate = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 1, y: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(
          contentRef.current,
 করতে {
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
              onEnter: () => setHasAnimated(true),
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
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Decorative Accent Circle */}
              <div
                className="absolute -bottom-8 -right-8 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yellow-green/20 to-pacific-cyan/20 rounded-full blur-2xl"
                aria-hidden="true"
              />
              
              {/* Main Visual */}
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cornsilk to-pacific-cyan/10 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Placeholder image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div ref={contentRef} className="space-y-6">
            {/* Eyebrow Text */}
            <div className="inline-block">
              <span className="text-yellow-green font-semibold uppercase tracking-wider text-sm">
                Understanding EIDBI
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Minnesota's Comprehensive{' '}
              <span className="text-yellow-green">Autism Intervention</span> Program
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                EIDBI (Early Intensive Developmental and Behavioral Intervention) is Minnesota's 
                Medical Assistance benefit designed specifically for children and young adults with 
                autism spectrum disorder and related conditions.
              </p>
              
              <p>
                This comprehensive program provides intensive, evidence-based services including 
                Applied Behavior Analysis (ABA) therapy, developmental interventions, and family 
                training—all coordinated to support your child's growth and development.
              </p>
              
              <p>
                Unlike traditional therapy with session limits, EIDBI provides the hours your child 
                needs based on their individual assessment, ensuring consistent, quality care that 
                makes a real difference.
              </p>
              
              <p>
                Best of all, eligible families pay nothing out-of-pocket. EIDBI is fully covered 
                through Minnesota's Medical Assistance programs, removing financial barriers to 
                essential autism services.
              </p>
            </div страницу

            {/* Three Stat Boxes */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl border-2 border-border bg-white hover:shadow-md transition-shadow"
                  >
                    <IconComponent
                      className="w-8 h-8 mx-auto mb-2"
                      style={{ color: `hsl(var(--${stat.color}))` }}
                      aria-hidden="true"
                    />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Link */}
            <div className="pt-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-pacific-cyan hover:text-pacific-cyan/80 font-medium transition-colors"
              >
                Read the full EIDBI story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEidbiDuplicate;

