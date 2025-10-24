'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home, Users } from "lucide-react";

const therapyTypes = [
  {
    icon: Building2,
    title: "Center-based therapy",
    description: "Children ages 18 months–8 years old build communication, social, and school-readiness skills through fun and interactive sessions with trained clinicians in an early-childhood environment.",
    features: ["1:1 Support", "Small Groups", "Daily Programming"],
    bgColor: "bg-pacific-cyan",
  },
  {
    icon: Home,
    title: "In-Home Services",
    description: "In-home services bring play-based learning into your home. Children ages 18 months–13 years old work 1:1 with a therapist to learn how to apply their lessons to real-life situations.",
    features: ["Flexible Scheduling", "Natural Environment", "Family Training"],
    bgColor: "bg-xanthous",
  },
  {
    icon: Users,
    title: "EIDBI Services",
    description: "Early intensive developmental and behavioral intervention provides ABA therapy for school-age children with autism, ages 5–12, covered by Minnesota Medical Assistance.",
    features: ["Expert Testing", "Individualized Plans", "Family Support"],
    bgColor: "bg-secondary",
  },
];

const TherapyTypesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="mb-6 text-raisin-black">
            Ability Avenues offers several types of ABA therapy for autism
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {therapyTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white flex flex-col">
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-3xl ${type.bgColor} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-raisin-black">{type.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                    {type.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="ghost" className="group p-0 h-auto mt-auto text-foreground hover:text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TherapyTypesSection;
