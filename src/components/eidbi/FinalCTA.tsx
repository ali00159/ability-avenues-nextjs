'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="cta" className="pt-6 md:pt-12 pb-12 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-pacific-cyan via-pacific-cyan/90 to-yellow-green/80 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 md:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
                Ready to Take the <span className="text-cornsilk">Next Step?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Early intervention can make a life-changing difference for your child. 
                Don't wait—start your EIDBI services today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group shadow-lg w-full justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Schedule An Evaluation</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-pacific-cyan border-white hover:bg-white/90 w-full justify-center whitespace-normal sm:whitespace-nowrap"
                  >
                    Speak to a Specialist
                  </Button>
                </Link>
              </div>

              {/* Simplified Trust Line */}
              <div className="text-white/80 text-sm sm:text-base">
                <p className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                  <span className="hidden sm:inline">Helping Minnesota families since 2013</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">10,000+ children served</span>
                </p>
                {/* Mobile-only second line */}
                <p className="mt-2 sm:hidden text-xs text-white/70">
                  Helping Minnesota families since 2013 • 10,000+ children served
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
