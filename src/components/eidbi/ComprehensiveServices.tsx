'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, ClipboardList, FileText, Users, Heart, GitBranch } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: ClipboardList,
    title: 'Comprehensive Multi-Disciplinary Evaluation (CMDE)',
    points: [
      'In-depth assessment by qualified professionals',
      'Evaluates developmental, behavioral, and medical needs',
      'Creates baseline for personalized treatment planning',
      'Determines service eligibility and intensity',
    ],
    bgColor: 'from-pacific-cyan/10 to-pacific-cyan/5',
    iconColor: 'pacific-cyan',
  },
  {
    icon: FileText,
    title: 'Individualized Treatment Plan (ITP)',
    points: [
      'Customized goals based on assessment results',
      'Evidence-based intervention strategies',
      'Regular progress monitoring and updates',
      'Collaborative input from families and providers',
    ],
    bgColor: 'from-yellow-green/10 to-yellow-green/5',
    iconColor: 'yellow-green',
  },
  {
    icon: Users,
    title: 'One-on-One & Group Therapy',
    points: [
      'Individual ABA therapy sessions tailored to needs',
      'Small group sessions for social skills development',
      'Natural environment teaching opportunities',
      'Skill generalization across multiple settings',
    ],
    bgColor: 'from-xanthous/10 to-xanthous/5',
    iconColor: 'xanthous',
  },
  {
    icon: Heart,
    title: 'Family Training & Support',
    points: [
      'Parent coaching and skill-building workshops',
      'Home implementation strategies',
      'Sibling support and education',
      'Community resource connections',
    ],
    bgColor: 'from-pacific-cyan/10 to-pacific-cyan/5',
    iconColor: 'pacific-cyan',
  },
  {
    icon: GitBranch,
    title: 'Care Coordination',
    points: [
      'Seamless communication between providers',
      'School and community integration support',
      'Transition planning and services',
      'Ongoing case management and advocacy',
    ],
    bgColor: 'from-yellow-green/10 to-yellow-green/5',
    iconColor: 'yellow-green',
  },
];

const ComprehensiveServices = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Services Designed for{' '}
            <span className="text-pacific-cyan">Your Child's Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            EIDBI provides everything your family needs in one coordinated program
          </p>
        </motion.div>

        {/* Services Bento Grid - 2 rows: first row 2 large cards, second row 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            // Determine grid positioning for bento layout
            let gridClasses = '';
            if (index < 2) {
              // First row: 2 large cards (each spans 3 columns)
              gridClasses = 'lg:col-span-3';
            } else {
              // Second row: 3 smaller cards (each spans 2 columns)
              gridClasses = 'lg:col-span-2';
            }
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={gridClasses}
              >
                <Card
                  className={`p-8 h-full hover-lift hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm flex flex-col justify-between`}
                >
                  <div>
                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-flex rounded-2xl p-4 bg-white shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent
                        className="w-12 h-12"
                        style={{ color: `hsl(var(--${service.iconColor}))` }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: `hsl(var(--${service.iconColor}))` }}
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link - Positioned at bottom */}
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300"
                      style={{ color: `hsl(var(--${service.iconColor}))` }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;

