'use client';

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Our highly skilled ABA staff is dedicated to delivering exceptional services through evidence-based practices, individualized care, and ongoing professional development to ensure the highest quality support."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work hand-in-hand with parents, teachers, and community providers to create a comprehensive support network, ensuring consistency and alignment across all settings where your child learns and grows."
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "We empower families with training, resources, and support to continue their child's progress at home. Our goal is to equip both children and families with the tools they need for lasting success."
  }
];

const CoreValues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      // Reset elements to ensure clean state on navigation
      gsap.set(cardsRef.current.children, { opacity: 1, x: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(cardsRef.current.children,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            }
          }
        );
      });

      // Cleanup function to kill ScrollTriggers and reset
      return () => {
        ctx.revert();
        if (cardsRef.current) {
          gsap.set(cardsRef.current.children, { clearProps: "all" });
        }
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          Built on Excellence, Collaboration & Empowerment
        </h2>
        
        <div ref={cardsRef} className="flex flex-col gap-6" id="team">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-gray-200 hover:border-blue-500 transition-colors duration-300">
                  <CardContent className="flex items-start gap-5 p-7">
                    <div 
                      className="flex-shrink-0 p-3 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                        boxShadow: "0 4px 12px rgba(37,99,235,0.25)"
                      }}
                    >
                      <Icon className="w-11 h-11 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
