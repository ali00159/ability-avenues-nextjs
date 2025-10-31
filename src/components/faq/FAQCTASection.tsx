'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from 'next/image';

const FAQCTASection = () => {
  return (
    <section className="py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 bg-white flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 flex items-center justify-center border-2 border-border overflow-hidden">
                {/* Using a placeholder - you can replace with actual team photo */}
                <div className="w-full h-full bg-gradient-to-br from-pacific-cyan/20 to-yellow-green/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-pacific-cyan" />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-raisin-black mb-2 md:mb-3">
                Still have questions?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Please{' '}
                <Link href="/contact" className="underline text-primary hover:text-primary/80">
                  chat to our friendly team
                </Link>.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="whitespace-nowrap w-full sm:w-auto justify-center"
                disabled
              >
                Documentation
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-raisin-black text-white hover:bg-raisin-black/90 w-full sm:w-auto justify-center"
                >
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQCTASection;
