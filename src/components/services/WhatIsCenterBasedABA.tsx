'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Target, Heart } from "lucide-react";

const WhatIsCenterBasedABA = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Applied Behavior Analysis (ABA)",
      description: "ABA is the gold-standard, evidence-based therapy for autism that uses positive reinforcement and data-driven interventions to help children develop communication, social, and adaptive skills.",
    },
    {
      icon: Users,
      title: "BCBA Supervision",
      description: "All programs are supervised by Board Certified Behavior Analysts (BCBAs) who develop individualized treatment plans and oversee clinical excellence for each child's unique needs.",
    },
    {
      icon: Target,
      title: "Center-Based vs In-Home",
      description: "Center-based therapy provides structured peer interactions, specialized equipment, consistent routines, and a distraction-free environment that may accelerate skill development compared to in-home services.",
    },
    {
      icon: Heart,
      title: "Early Intervention Matters",
      description: "For children ages 1-7, early intervention during critical developmental windows can significantly improve long-term outcomes for communication, social skills, and independence.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-raisin-black">What is </span>
              <span className="text-secondary">Center-Based ABA Therapy?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Center-based ABA therapy takes place in our specialized autism center in Minneapolis, 
              providing structured learning environments designed to maximize your child's developmental progress.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-pacific-cyan/30 transition-all duration-300">
                    <div className="flex flex-col items-start h-full">
                      <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-yellow-green" />
                      </div>
                      <h3 className="text-xl font-bold text-raisin-black mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-pacific-cyan/5 border-2 border-pacific-cyan/20">
              <p className="text-base md:text-lg text-raisin-black leading-relaxed text-center">
                <strong>Our autism center in Minneapolis</strong> serves children and teens with autism spectrum disorder 
                ages 1-18, offering evidence-based applied behavior analysis in a supportive, 
                clinically excellent environment that honors each child's unique way of learning and communicating.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCenterBasedABA;
