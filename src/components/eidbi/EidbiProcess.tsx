'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, Calendar, ClipboardCheck, FileEdit, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: 1,
    icon: CreditCard,
    title: 'Ensure Healthcare Coverage',
    description:
      'First, make sure your child has Minnesota Medical Assistance (MA), MinnesotaCare, or MA-TEFRA coverage. Our team can guide you through the application process if you need assistance getting enrolled.',
    ctaText: 'Apply for MA/MinnesotaCare',
    ctaHref: '#',
    imagePath: '/images/eidbi-step1-insurance.jpg',
    accentColor: 'pacific-cyan',
    imagePosition: 'right', // content left, image right
  },
  {
    number: 2,
    icon: Calendar,
    title: 'Schedule Your CMDE',
    description:
      'Once coverage is confirmed, schedule a Comprehensive Multidisciplinary Evaluation (CMDE) with qualified providers. This in-depth assessment evaluates your child\'s developmental, behavioral, and medical needs to determine EIDBI eligibility.',
    ctaText: 'Find Providers Near You',
    ctaHref: '#',
    imagePath: '/images/eidbi-step2-schedule.jpg',
    accentColor: 'yellow-green',
    imagePosition: 'left', // image left, content right
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Complete the Evaluation',
    description:
      'During the CMDE, a team of professionals will assess your child across multiple domains including communication, social skills, adaptive behavior, and challenging behaviors. The evaluation typically takes 2-3 sessions and includes parent interviews.',
    ctaText: '',
    ctaHref: '',
    imagePath: '/images/eidbi-step3-evaluation.jpg',
    accentColor: 'xanthous',
    imagePosition: 'right', // content left, image right
  },
  {
    number: 4,
    icon: FileEdit,
    title: 'Develop Treatment Plan',
    description:
      'Based on evaluation results, our Board Certified Behavior Analysts (BCBAs) will create an Individualized Treatment Plan (ITP) with specific, measurable goals tailored to your child\'s unique needs and your family\'s priorities.',
    ctaText: '',
    ctaHref: '',
    imagePath: '/images/eidbi-step4-planning.jpg',
    accentColor: 'pacific-cyan',
    imagePosition: 'left', // image left, content right
  },
  {
    number: 5,
    icon: Sparkles,
    title: 'Begin Services',
    description:
      'Welcome to your EIDBI journey! Services begin with intensive one-on-one therapy sessions, family training, and coordinated care. Our team will work closely with you to ensure your child receives consistent, quality intervention.',
    ctaText: '',
    ctaHref: '',
    imagePath: '/images/eidbi-step5-therapy.jpg',
    accentColor: 'yellow-green',
    imagePosition: 'right', // content left, image right
    highlightText: 'Most families start therapy within 2-4 weeks',
  },
];

const EidbiProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const accentCircles = sectionRef.current.querySelectorAll('.accent-circle');
      
      accentCircles.forEach((circle) => {
        gsap.to(circle, {
          y: -30,
          scrollTrigger: {
            trigger: circle,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-cornsilk/20 via-white to-pacific-cyan/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Journey to EIDBI Services:{' '}
            <span className="text-yellow-green">5 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We'll guide you through every step of the process
          </p>
        </motion.div>

        {/* Process Steps - Alternating Layout */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isImageLeft = step.imagePosition === 'left';

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative">
                      {/* Decorative Accent Circle */}
                      <div
                        className={`accent-circle absolute ${
                          isImageLeft ? '-top-8 -right-8' : '-top-8 -left-8'
                        } w-64 h-64 md:w-80 md:h-80 rounded-full blur-2xl`}
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--${step.accentColor}) / 0.3), hsl(var(--${step.accentColor}) / 0.1))`,
                        }}
                        aria-hidden="true"
                      />

                      {/* Main Circular Image */}
                      <div className="relative z-10 aspect-square rounded-full overflow-hidden shadow-xl">
                        <Image
                          src={step.imagePath}
                          alt={`Step ${step.number}: ${step.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Number Badge */}
                      <motion.div
                        className={`absolute ${
                          isImageLeft ? '-bottom-6 -left-6' : '-bottom-6 -right-6'
                        } w-20 h-20 rounded-full shadow-xl flex items-center justify-center text-3xl font-bold text-white z-20`}
                        style={{ backgroundColor: `hsl(var(--${step.accentColor}))` }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                      >
                        {step.number}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Icon */}
                    <div
                      className="inline-flex rounded-2xl p-4"
                      style={{ backgroundColor: `hsl(var(--${step.accentColor}) / 0.1)` }}
                    >
                      <IconComponent
                        className="w-12 h-12"
                        style={{ color: `hsl(var(--${step.accentColor}))` }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlight Text */}
                    {step.highlightText && (
                      <div
                        className="p-4 rounded-lg border-l-4"
                        style={{
                          backgroundColor: `hsl(var(--${step.accentColor}) / 0.1)`,
                          borderColor: `hsl(var(--${step.accentColor}))`,
                        }}
                      >
                        <p className="font-semibold text-foreground">{step.highlightText}</p>
                      </div>
                    )}

                    {/* CTA */}
                    {step.ctaText && step.ctaHref && (
                      <Link href={step.ctaHref as any}>
                        <Button
                          variant="outline"
                          className="border-2 hover:shadow-md transition-all"
                          style={{
                            borderColor: `hsl(var(--${step.accentColor}))`,
                            color: `hsl(var(--${step.accentColor}))`,
                          }}
                        >
                          {step.ctaText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EidbiProcess;

