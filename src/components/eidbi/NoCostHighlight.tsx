'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import yellowCoinIcon from '@/assets/yellow-coin-icon.svg';

const eidbiFeatures = [
  'Unlimited therapy hours based on need',
  'No copays or deductibles',
  'Comprehensive evaluations included',
  'Family training covered',
  'All services coordinated',
  'No out-of-pocket expenses',
];

const insuranceLimitations = [
  'Often capped at 25-40 hours/year',
  'High deductibles ($2,000+)',
  'Separate evaluation costs',
  'Limited family support',
  'Fragmented care',
  'Significant out-of-pocket costs',
];

const NoCostHighlight = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-green/5 via-white to-cornsilk/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image 
              src={yellowCoinIcon} 
              alt="" 
              className="w-24 h-24" 
              width={96} 
              height={96}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-1 bg-red-500 rotate-45" aria-hidden="true" />
            </div>
          </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-4">
            No Out-of-Pocket Costs for Eligible Families
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            EIDBI services are fully covered under Minnesota Health Care Programs
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* With EIDBI Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-yellow-green/10 to-yellow-green/5 border-2 border-yellow-green/30 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-green/20 rounded-full">
                  <Check className="w-5 h-5 text-yellow-green" aria-hidden="true" />
                  <span className="font-bold text-yellow-green">With EIDBI</span>
                </div>
              </div>

              <ul className="space-y-4">
                {eidbiFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-green/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-yellow-green" aria-hidden="true" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Private Insurance Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full">
                  <X className="w-5 h-5 text-gray-600" aria-hidden="true" />
                  <span className="font-bold text-gray-700">Private Insurance Limits</span>
                </div>
              </div>

              <ul className="space-y-4">
                {insuranceLimitations.map((limitation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-gray-600" aria-hidden="true" />
                    </div>
                    <span className="text-muted-foreground">{limitation}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Questions about coverage? Our insurance specialists can help.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-pacific-cyan hover:bg-pacific-cyan/90 text-white font-semibold shadow-lg text-lg px-10 py-7"
            >
              Speak to a Coverage Specialist
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NoCostHighlight;

