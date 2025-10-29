'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const WhatIsInHomeABA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Service Category Label */}
              <div className="text-sm uppercase tracking-wider font-semibold text-pacific-cyan mb-4.5">
                SERVICES
              </div>
              
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-raisin-black leading-tight">
                What is
              </h2>
              
              {/* Paragraph Summary */}
              <div className="space-y-6 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In-home ABA therapy brings evidence-based applied behavior analysis directly to your child's familiar home environment. 
                  This natural approach allows children to learn and practice essential skills in the same setting where they'll use them daily, 
                  promoting better skill generalization and comfort.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our family-centered approach ensures parents, siblings, and caregivers actively participate in therapy sessions, 
                  learning strategies to support their child's development throughout the day. With flexible scheduling offering 
                  20-40 hours per week of personalized support, sessions can be scheduled mornings, afternoons, evenings, or weekends 
                  to fit your family's unique routine.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Therapy sessions can extend beyond the home to include community outings, helping children practice skills in 
                  real-world settings like parks, stores, and social environments for better skill generalization and integration.
                </p>
              </div>
              
              {/* Phone Number */}
              <div className="mb-8">
                <a 
                  href="tel:573-203-3699" 
                  className="text-lg font-semibold text-pacific-cyan hover:text-pacific-cyan/80 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  573-203-3699
                </a>
              </div>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-pacific-cyan/10 hover:bg-pacific-cyan/20 text-raisin-black border border-pacific-cyan/20 rounded-xl"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Organic Shape Background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 bg-pacific-cyan/10 rounded-full transform rotate-12 scale-110"
                />
                
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-10 w-full h-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden"
                >
                  <Image
                    src="/images/therapy-session.jpg"
                    alt="Child engaging in ABA therapy session at home"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInHomeABA;
