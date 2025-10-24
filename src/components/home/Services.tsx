'use client';

import Link from 'next/link';
import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import houseIcon from "@/assets/icon-house.svg";
import socialSkillsIcon from "@/assets/icon-social-skills.svg";
import assessmentIcon from "@/assets/icon-assessment.svg";

const services = [
  {
    icon: houseIcon,
    title: "Center-Based ABA Therapy",
    description:
      "Our preschool-like setting provides comprehensive, play-based therapy that helps children develop essential skills for school readiness and social success.",
    features: ["1:1 Support", "Small Groups", "Daily Programming"],
  },
  {
    icon: socialSkillsIcon,
    title: "In-Home ABA Therapy",
    description:
      "Personalized one-on-one ABA therapy delivered in the comfort and familiarity of your home environment, helping children learn and practice skills in their natural setting.",
    features: ["Flexible Scheduling", "Family Training", "Natural Environment Teaching"],
  },
  {
    icon: assessmentIcon,
    title: "Early Intensive Developmental & Behavioral Intervention",
    description:
      "Comprehensive early intervention services designed to support young children with developmental delays and autism spectrum disorder through intensive, evidence-based behavioral therapy.",
    features: ["Ages 0-7", "Intensive Support", "Family Collaboration"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cornsilk/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
          </div>
          <h2 className="mt-4 mb-6">
            Comprehensive Care Tailored to Your Child
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer evidence-based ABA therapy and support services designed to
            help children with autism reach their developmental goals through
            play, learning, and positive relationships.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white flex flex-col">
                <div className="mb-6">
                  <Image
                    src={service.icon}
                    alt=""
                    className="w-24 h-24 object-contain"
                    width={96}
                    height={96}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="ghost" className="group p-0 h-auto mt-auto text-foreground hover:text-foreground font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
