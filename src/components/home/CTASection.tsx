'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 bg-cornsilk/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 md:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
                Your child is <span className="text-cornsilk">accepted</span> here
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Take the first step toward empowering your child with the skills they
                need to thrive. Our team is here to answer your questions and guide
                you through the process.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group shadow-lg w-full justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Schedule ABA Consultation</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-emerald-700 border-white hover:bg-white/90 w-full justify-center whitespace-normal sm:whitespace-nowrap"
                  >
                    Learn More About ABA Therapy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
