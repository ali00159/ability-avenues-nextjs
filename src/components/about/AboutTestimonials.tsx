'use client';

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, GraduationCap, Smile, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    icon: Heart,
    quote: "Words cannot express how grateful I am for the incredible impact of ABA therapy. My child has blossomed in ways I never thought possible. He has gained vital social and communication skills, and his confidence has soared. The dedicated team of Ability Avenues has truly been a blessing in our lives.",
    role: "Parent of Client"
  },
  {
    icon: GraduationCap,
    quote: "ABA therapy has greatly supported the inclusion of students with special needs in our school. The strategies and interventions implemented by Ability Avenues have had a significant impact on the academic and social success of our students.",
    role: "Elementary School Teacher"
  },
  {
    icon: Smile,
    quote: "I've learned so many awesome things, like how to talk to my friends and how to handle big feelings. The therapists are sweet and fun, and I love all the games we play together.",
    role: "Child in Program"
  },
  {
    icon: Building2,
    quote: "Collaborating with Ability Avenues has been instrumental in providing comprehensive care to individuals with developmental needs. Their dedication to evidence-based practices and strong interdisciplinary collaboration has significantly benefited the clients we serve.",
    role: "Speech Therapist"
  }
];

const AboutTestimonials = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      // Reset elements to ensure clean state on navigation
      gsap.set(cardsRef.current.children, { opacity: 1, y: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(cardsRef.current.children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
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
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-bold mb-16"
          style={{ fontSize: "clamp(36px, 4.5vw, 48px)" }}
        >
          What People Are Saying
        </h2>
        
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 16px 32px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="h-full bg-white border-gray-200 min-h-[280px]"
                  style={{ borderRadius: "20px" }}
                >
                  <CardContent className="p-10">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "rgba(6,182,212,0.1)" }}
                    >
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <p className="text-gray-700 italic leading-relaxed mb-5">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      {testimonial.role}
                    </p>
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

export default AboutTestimonials;
