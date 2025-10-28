'use client';

import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpenText } from "lucide-react";
import iconEvidence from "@/assets/icon-evidence.svg";
import iconIndividualized from "@/assets/icon-individualized.svg";
import iconSchool from "@/assets/icon-school.svg";
import iconFamily from "@/assets/icon-family.png";
import iconPlay from "@/assets/icon-play.svg";
import iconFlexible from "@/assets/icon-flexible-new.svg";

const highlights = [
  {
    icon: iconEvidence,
    title: "Evidence-Based",
    description:
      "Our programs utilize proven Applied Behavior Analysis techniques backed by clinical evidence and overseen by Board Certified Behavior Analysts (BCBAs).",
    bgColor: "",
    iconColor: "text-white",
  },
  {
    icon: iconIndividualized,
    title: "Individualized Plans",
    description:
      "Every child is unique. We create customized learning plans that meet each child developmentally and support their specific goals.",
    bgColor: "bg-primary",
    iconColor: "text-white",
  },
  {
    icon: iconSchool,
    title: "School Readiness",
    description:
      "Our comprehensive program prepares children with autism spectrum disorder with the fundamental cognitive, social, and emotional skills needed for mainstream classrooms.",
    bgColor: "bg-xanthous",
    iconColor: "text-white",
  },
  {
    icon: iconFamily,
    title: "Family-Centered",
    description:
      "Parents and caregivers are essential team members. We provide parent coaching and collaboration to reinforce learning at home and in the community.",
    bgColor: "bg-destructive/80",
    iconColor: "text-white",
  },
  {
    icon: iconPlay,
    title: "Play-Based Learning",
    description:
      "Children learn best through play. Our naturalistic approach combines ABA principles with engaging, developmentally appropriate activities.",
    bgColor: "bg-secondary",
    iconColor: "text-white",
  },
  {
    icon: iconFlexible,
    title: "Flexible Settings",
    description:
      "We offer both in-home and center-based services to meet your family's needs. Quality care delivered in the environment that works best for you.",
    bgColor: "bg-pacific-cyan",
    iconColor: "text-white",
  },
];

const ProgramHighlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="mt-4 mb-6">Built for Kids, Designed for Success</h2>
          <p className="text-lg text-muted-foreground">
            At Ability Avenues, we're committed to meeting each child where they are and helping them grow through
            individualized, evidence-based care by Board Certified Behavior Analysts (BCBAs) for Minnesota families.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.85, delay: index * 0.1 }}
                className="flex"
              >
                <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-cornsilk/50 to-transparent border border-border hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden mb-4">
                    <Image src={highlight.icon} alt="" className="w-full h-full object-cover" width={80} height={80} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link href="/about">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-pacific-cyan text-cornsilk font-semibold rounded-full hover:bg-pacific-cyan/90 hover:shadow-lg transition-all duration-300 border-2 border-pacific-cyan/20 hover:border-pacific-cyan/30"
            >
              <BookOpenText className="w-6 h-6 mr-2" />
              About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
