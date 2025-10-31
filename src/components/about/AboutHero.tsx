'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const AboutHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset elements to ensure clean state on navigation
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    if (contentRef.current) {
      gsap.set(contentRef.current.children, { opacity: 1, y: 0 });
    }

    const tl = gsap.timeline();
    
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }

    if (contentRef.current) {
      tl.fromTo(contentRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        },
        "-=0.4"
      );
    }

    // Cleanup function to reset on unmount
    return () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { clearProps: "all" });
      }
      if (contentRef.current) {
        gsap.set(contentRef.current.children, { clearProps: "all" });
      }
    };
  }, []);

  return (
    <section 
      className="relative overflow-hidden bg-white"
      style={{
        padding: "clamp(80px, 12vh, 120px) 0 clamp(64px, 10vh, 96px)"
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-[1fr_0.8fr] gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 
              ref={titleRef}
              className="mb-8"
              style={{
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              <span style={{ color: "#1F2937" }}>Our </span>
              <span style={{ color: "#84cc16" }}>story</span>
            </h1>
            
            <div ref={contentRef} className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600 max-w-[600px]">
                Founded in 2024, Ability Avenues was created to address the growing need for high-quality ABA therapy services in the Minneapolis area. The center was established out of a passion for helping children reach their full potential and is grounded in a strong commitment to improving the lives of individuals with developmental needs.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600 max-w-[600px]">
                We offer personalized, evidence-based care tailored to each family's unique needs. Our goal is to create meaningful change and provide support within our community through exceptional ABA therapy services.
              </p>
              
              <div className="flex gap-4 mt-8">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="group bg-[hsl(var(--yellow-green))] hover:bg-[hsl(79,98%,45%)] text-[hsl(var(--raisin-black))] font-semibold shadow-lg justify-center border-0"
                  >
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Contact Us</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt=""
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
