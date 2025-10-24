'use client';

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, GraduationCap, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    role: "Parents",
    icon: Home,
    approach: "We ensure strategies are applied at home through regular training and feedback, empowering families to support their child's development consistently."
  },
  {
    role: "Teachers",
    icon: GraduationCap,
    approach: "We align on shared goals to maintain consistency between school and home environments, ensuring seamless support across settings."
  },
  {
    role: "Community Providers",
    icon: Building2,
    approach: "We coordinate with speech and occupational therapists for a comprehensive approach to each child's development, creating an integrated care network."
  }
];

const Collaboration = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Reset element to ensure clean state on navigation
      gsap.set(cardRef.current, { opacity: 1, y: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(cardRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
            }
          }
        );
      });

      // Cleanup function to kill ScrollTriggers and reset
      return () => {
        ctx.revert();
        if (cardRef.current) {
          gsap.set(cardRef.current, { clearProps: "all" });
        }
      };
    }
  }, []);

  return (
    <section className="py-20 px-4">
      <Card 
        ref={cardRef}
        className="max-w-[1100px] mx-auto p-16 shadow-lg border-0"
        style={{ borderRadius: "20px" }}
      >
        <h2 className="text-center font-bold mb-6"
          style={{ fontSize: "clamp(32px, 4vw, 42px)" }}
        >
          Collaboration at our Core
        </h2>
        
        <p className="text-center text-lg text-gray-600 max-w-[700px] mx-auto mb-12">
          At Ability Avenues, collaboration is essential to delivering effective ABA services. We work hand-in-hand with multiple stakeholders to create a comprehensive support network for each child.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-gray-200 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-14 h-14 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {partner.role}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.approach}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-600 leading-relaxed mt-8 max-w-[800px] mx-auto">
          With a child-centered focus, we use personalized, engaging methods that motivate progress. Together, these partnerships create a supportive network that helps children develop essential skills and reach their full potential.
        </p>
      </Card>
    </section>
  );
};

export default Collaboration;
