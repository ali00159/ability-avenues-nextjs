'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import yellowSquare from "@/assets/yellow-square.svg";
import kidsLearning from "@/assets/kids-learning-in-home-page.png";

const WhatIsCenterBasedABA = () => {
  return (
    <section className="py-24 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Service Category Label */}
            <div className="text-sm uppercase tracking-wider font-semibold text-xanthous">
              UNDERSTANDING CENTER-BASED
            </div>
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black leading-tight">
              What is Center-Based ABA Therapy?
            </h2>

            {/* Paragraph Summary */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Center-based ABA therapy takes place in our specialized autism center in Minneapolis, 
                providing structured learning environments designed to maximize your child's developmental progress. 
                Applied Behavior Analysis (ABA) is the gold-standard, evidence-based therapy for autism that uses 
                positive reinforcement and data-driven interventions to help children develop communication, social, 
                and adaptive skills.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                All programs are supervised by Board Certified Behavior Analysts (BCBAs) who develop individualized 
                treatment plans and oversee clinical excellence for each child's unique needs. Center-based therapy 
                provides structured peer interactions, specialized equipment, consistent routines, and a distraction-free 
                environment that may accelerate skill development compared to in-home services.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For children ages 1-7, early intervention during critical developmental windows can significantly improve 
                long-term outcomes for communication, social skills, and independence. Our autism center in Minneapolis 
                serves children and teens with autism spectrum disorder ages 1-18, offering evidence-based applied behavior 
                analysis in a supportive, clinically excellent environment that honors each child's unique way of learning 
                and communicating.
              </p>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold shadow-lg"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          {/* Right Column - Animated Images */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            {/* Yellow Square Background */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={yellowSquare}
                alt=""
                className="w-[110%] h-[110%] object-contain"
                width={550}
                height={550}
                loading="lazy"
                aria-hidden="true"
              />
            </motion.div>

            {/* Kids Learning Image - On Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{ transform: 'translateY(-20%)' }}
            >
              <Image
                src={kidsLearning}
                alt="Children learning during center-based ABA therapy session"
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

export default WhatIsCenterBasedABA;
