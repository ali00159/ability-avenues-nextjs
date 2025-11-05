'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';
import greenSquareIcon from '@/assets/green-sqaure-icon.svg';
import girlGlasses from '@/assets/girl-glasses-eidbi.png';

const WhatIsEidbi = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cornsilk/20 via-white to-pacific-cyan/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
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
          </motion.div>

          {/* Right Column - Animated Images */}
          <div className="relative w-full aspect-square max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {/* Green Square Background */}
            <motion.div
              initial={{ opacity: 0, scale: 1.2, x: '-20%', y: '-6%' }}
              whileInView={{ opacity: 1, scale: 1.2, x: '-5%', y: '-6%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-0 scale-110 md:scale-125"
            >
              <Image
                src={greenSquareIcon}
                alt=""
                className="w-full h-full object-contain"
                width={550}
                height={550}
                loading="lazy"
                aria-hidden="true"
              />
            </motion.div>

            {/* Girl with Glasses Image - On Top */}
            <motion.div
              initial={{ opacity: 0, x: '-20%', y: '-11.3%', scale: 1.5 }}
              whileInView={{ opacity: 1, x: '-40%', y: '-11.3%', scale: 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-10 scale-90 md:scale-95"
            >
              <Image
                src={girlGlasses}
                alt="Child with glasses during EIDBI therapy session"
                className="w-full h-full object-contain"
                width={500}
                height={500}
                priority
                quality={85}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEidbi;

