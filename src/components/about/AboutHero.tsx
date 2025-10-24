'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Pencil, Smile, Heart, Sparkles, CircleDot, Zap, Phone } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import puzzleIcon from "@/assets/icon-play.svg";
import circleDecorator from "@/assets/circle-decorator.svg";

const AboutHero = () => {
  const pathname = usePathname();
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
      {/* Decorative floating icons - concentrated around right side image */}
      <motion.div
        className="hidden lg:block absolute top-32 right-24"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-24 right-1/3"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <Sparkles className="w-9 h-9 text-yellow-500" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-1/3 right-12"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute bottom-32 right-1/4"
        animate={{ 
          y: [0, -12, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <CircleDot className="w-10 h-10 text-cyan-400" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-1/2 right-1/3"
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Image src={puzzleIcon} alt="" className="w-10 h-10 opacity-50" width={40} height={40} />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute bottom-24 right-16"
        animate={{ 
          x: [0, 10, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <Smile className="w-11 h-11 text-lime-500 fill-lime-500" />
      </motion.div>
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
            key={`about-hero-${pathname}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Circle decorator behind image - same size and position */}
            <Image 
              src={circleDecorator}
              alt=""
              className="absolute -top-24 -left-24 w-[400px] h-[400px] -z-10 object-contain"
              width={400}
              height={400}
            />
            
            <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl">
              <Image
                src="/images/hero-family-therapy.jpg"
                alt="Family receiving ABA therapy support at Ability Avenues"
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
