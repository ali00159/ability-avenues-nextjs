'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, User, Stethoscope, FileCheck, MapPin } from 'lucide-react';

const eligibilityCriteria = [
  {
    icon: User,
    title: 'Under 21 Years',
    description: 'Services can start as early as 18 months and continue through age 20',
    color: 'pacific-cyan',
  },
  {
    icon: Stethoscope,
    title: 'ASD Diagnosis',
    description: 'Autism spectrum disorder or related developmental condition diagnosis',
    color: 'yellow-green',
  },
  {
    icon: FileCheck,
    title: 'CMDE Evaluation',
    description: 'Complete comprehensive multidisciplinary evaluation by qualified team',
    color: 'xanthous',
  },
  {
    icon: MapPin,
    title: 'Minnesota Coverage',
    description: 'MA (Medical Assistance), MinnesotaCare, or MA-TEFRA eligibility',
    color: 'pacific-cyan',
  },
];

const EligibilityChecker = () => {
  return (
    <section id="eligibility" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick Eligibility Check
          </h2>
          <p className="text-lg text-muted-foreground">
            Your child may qualify if they meet these criteria
          </p>
        </motion.div>

        {/* Four-Column Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {eligibilityCriteria.map((criteria, index) => {
            const IconComponent = criteria.icon;
            
            return (
              <motion.div
                key={criteria.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white">
                  {/* Icon with Background */}
                  <motion.div
                    className="mb-6 inline-flex rounded-2xl p-4"
                    style={{ backgroundColor: `hsl(var(--${criteria.color}) / 0.1)` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent
                      className="w-12 h-12"
                      style={{ color: `hsl(var(--${criteria.color}))` }}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {criteria.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {criteria.description}
                  </p>

                  {/* Checkmark Indicator */}
                  <div className="flex items-center gap-2 text-yellow-green">
                    <div className="rounded-full bg-yellow-green/10 p-1">
                      <Check className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">Required</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-pacific-cyan hover:bg-pacific-cyan/90 text-white font-semibold shadow-lg text-lg px-10 py-7"
            >
              Start Your Application Today
            </Button>
          </Link>
          
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Not sure if your child qualifies? Our team can help you determine eligibility.{' '}
            <Link href="/contact" className="text-pacific-cyan hover:underline font-medium">
              Call 651-431-2670
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;

