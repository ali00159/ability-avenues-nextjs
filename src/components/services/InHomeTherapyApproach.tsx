'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, GraduationCap, ArrowRight } from "lucide-react";

const InHomeTherapyApproach = () => {
  const approaches = [
    {
      icon: Heart,
      title: "Parent Training & Support",
      description: "We provide comprehensive parent training to help you implement ABA strategies throughout your child's day. Learn how to reinforce positive behaviors, manage challenging situations, and support your child's development at home.",
    },
    {
      icon: Users,
      title: "Sibling Participation",
      description: "Siblings are welcome to participate in therapy sessions, learning how to play and interact with their brother or sister in supportive ways. This promotes family bonding and helps all children develop social skills together.",
    },
    {
      icon: Target,
      title: "Daily Living Skills",
      description: "Focus on essential daily living skills like toileting, eating, dressing, and personal hygiene. These skills are practiced in your child's natural environment with real materials and routines they'll use every day.",
    },
    {
      icon: GraduationCap,
      title: "Communication & Social Goals",
      description: "Develop communication skills, play abilities, and social interactions through play-based learning. Goals are tailored to your child's needs and practiced in natural settings with family members and community interactions.",
    },
  ];

  return (
    <section className="py-24 bg-pacific-cyan/5 relative overflow-hidden">
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
              <span className="text-raisin-black">Our In-Home </span>
              <span className="text-secondary">Therapy Approach</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our in-home ABA therapy approach focuses on family involvement, natural learning environments, 
              and practical skill development that integrates seamlessly into your daily routine.
            </p>
          </motion.div>

          {/* Approaches Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
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
                      <h3 className="text-xl font-bold text-raisin-black mb-4">{approach.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {approach.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Community Integration Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-pacific-cyan/30 hover:border-pacific-cyan text-raisin-black" asChild>
              <Link href="/contact" className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InHomeTherapyApproach;
