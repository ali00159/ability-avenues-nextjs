'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const JoinTeamCTA = () => {
  return (
    <section className="py-12 md:py-24 bg-cornsilk/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary via-primary to-[hsl(186,87%,35%)] rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 md:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
                Join us!
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Are you compassionate, creative, and energized by the idea of making a positive impact in the lives of children? We're seeking talented BCBAs, RBTs, and administrative professionals to join our growing team. Together, we can pave the way for brighter futures, one step at a time.
              </p>

              <div className="flex justify-center">
                <Link href="/careers" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group bg-[hsl(var(--raisin-black))] hover:bg-[hsl(345,13%,25%)] text-[hsl(var(--cornsilk))] font-semibold shadow-lg w-full justify-center border-0"
                  >
                    <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">View career opportunities</span>
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

export default JoinTeamCTA;
