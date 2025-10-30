'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const EIDBIvsABA = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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
                Understanding the Difference
              </span>
            </div>

            {/* H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-yellow-green">EIDBI</span> vs <span className="text-pacific-cyan">ABA</span>
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                ABA is a clinical approach that applies learning principles to increase helpful behaviors 
                and reduce behaviors that impede learning. Providers deliver ABA across settings, with 
                individualized goals and data-driven methods.
              </p>
              
              <p>
                EIDBI is the Minnesota insurance benefit that pays for early intensive intervention when 
                medically necessary. Within EIDBI, providers use ABA or other approved modalities listed 
                by the state. Think of EIDBI as the coverage framework, and ABA as one of the treatment 
                models delivered inside that framework.
              </p>
              
              <p>
                If your child qualifies for MA through income rules or through TEFRA based on disability, 
                EIDBI services, including ABA when appropriate, receive coverage. This route often 
                eliminates out-of-pocket costs for families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EIDBIvsABA;

