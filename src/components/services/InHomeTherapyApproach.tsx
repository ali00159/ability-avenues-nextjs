'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, ArrowRight } from "lucide-react";
import ApproachCard from "./ApproachCard";

const InHomeTherapyApproach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const approaches = [
    {
      icon: Heart,
      title: "Parent Training & Support",
      description: "We provide comprehensive parent training to help you implement ABA strategies throughout your child's day. Learn how to reinforce positive behaviors, manage challenging situations, and support your child's development at home.",
      bgColor: "bg-pacific-cyan/10",
      borderColor: "border-pacific-cyan/30",
      iconBgColor: "bg-pacific-cyan/10",
      iconColor: "text-pacific-cyan",
    },
    {
      icon: Users,
      title: "Sibling Participation",
      description: "Siblings are welcome to participate in therapy sessions, learning how to play and interact with their brother or sister in supportive ways. This promotes family bonding and helps all children develop social skills together.",
      bgColor: "bg-yellow-green/10",
      borderColor: "border-yellow-green/30",
      iconBgColor: "bg-yellow-green/10",
      iconColor: "text-yellow-green",
    },
    {
      icon: Target,
      title: "Daily Living Skills",
      description: "Focus on essential daily living skills like toileting, eating, dressing, and personal hygiene. These skills are practiced in your child's natural environment with real materials and routines they'll use every day.",
      bgColor: "bg-xanthous/10",
      borderColor: "border-xanthous/30",
      iconBgColor: "bg-xanthous/10",
      iconColor: "text-xanthous",
    },
  ];

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Transform to control opacity and position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section ref={sectionRef} className="py-24 bg-pacific-cyan/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 2-Column Layout: Left Header (Sticky), Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Sticky Header */}
            <motion.div
              style={{ opacity, y }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 text-left">
                <span className="text-raisin-black">Our In-Home </span>
                <span className="text-secondary">Therapy Approach</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our in-home ABA therapy approach focuses on family involvement, natural learning environments, 
                and practical skill development that integrates seamlessly into your daily routine.
              </p>
            </motion.div>

            {/* Right Column: Cards */}
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <ApproachCard
                  key={index}
                  icon={approach.icon}
                  title={approach.title}
                  description={approach.description}
                  bgColor={approach.bgColor}
                  borderColor={approach.borderColor}
                  iconBgColor={approach.iconBgColor}
                  iconColor={approach.iconColor}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Community Integration Button */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
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
