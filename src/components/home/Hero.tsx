'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Puzzle, Star, Pencil, Smile, Award, Users2, ArrowRight, Phone, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Typewriter } from "@/components/ui/typewriter-text";
import heroImage from "@/assets/hero-girl-lollipop.webp";
import yellowCircleOpaque from "@/assets/yellow-circle-opaue.svg";
import yellowSemicircle from "@/assets/yellow-semicircle.svg";

const Hero = () => {
  const pathname = usePathname();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  

  useEffect(() => {
    // Reset elements to ensure clean state on navigation
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.3 });
    
    tl.fromTo(titleRef.current, 
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.4"
      );

    // Cleanup function to reset on unmount
    return () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { clearProps: "all" });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { clearProps: "all" });
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-light overflow-hidden">
      {/* Animated Background Shapes - Optimized for mobile performance */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-xl md:blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="relative z-20 max-w-2xl w-full flex flex-col">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight drop-shadow"
            >
              Where children & their families can{" "}
              <span className="text-yellow-green block mt-2">
                enable{" "}
                <Typewriter
                  text={["potential", "growth", "avenues"]}
                  speed={80}
                  deleteSpeed={50}
                  delay={2000}
                  loop={true}
                  cursor="|"
                />
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-normal"
            >
              Evidence-based Applied Behavior Analysis (ABA). Center-based and in-home therapy for ages 1-18. We accept EIDBI and most insurance plans.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 mt-6 md:mt-8">
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
              <Link href="/center-based-therapy">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-raisin-black font-semibold rounded-full hover:bg-gray-50 hover:shadow-md transition-all duration-300 border-2 border-border"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  About our program
                </Button>
              </Link>
            </div>

            {/* Trust Indicators with Icons */}
            <motion.div 
              key={`trust-${pathname}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 md:gap-10"
            >
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-xanthous flex-shrink-0" fill="currentColor" />
                <div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">4.8</div>
                  <div className="text-xs text-muted-foreground">(150+ reviews)</div>
                </div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">#1 Rated</div>
                  <div className="text-muted-foreground">in Minneapolis</div>
                </div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <Users2 className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Ages 1-18</div>
                  <div className="text-muted-foreground">All levels</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Circle with Image */}
          <motion.div
            key={`hero-image-${pathname}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-secondary"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <Puzzle className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </motion.div>

            <motion.div
              className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 text-primary"
              animate={{
                y: [0, 22, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <Pencil className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </motion.div>

            <motion.div
              className="absolute top-4 left-0 sm:top-6 sm:left-1 text-xanthous"
              animate={{
                y: [0, 18, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14" fill="currentColor" />
            </motion.div>

            <motion.div
              className="absolute -bottom-1 right-2 sm:-bottom-2 sm:right-4 text-secondary"
              animate={{
                y: [0, -18, 0],
                rotate: [0, -6, 0],
              }}
              transition={{
                duration: 6.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <Smile className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </motion.div>

            <div className="relative w-full aspect-square max-w-sm sm:max-w-md md:max-w-md mx-auto overflow-visible">
              {/* Layer 1: Yellow Circle Opaque - Larger, Bottom Layer */}
              <motion.div
                initial={{ opacity: 0, x: 200, scale: 1.5225, y: '-10%' }}
                whileInView={{ opacity: 1, x: '-3%', scale: 1.5225, y: '-10%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={yellowCircleOpaque}
                  alt=""
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                  loading="lazy"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Layer 2: Yellow Semicircle - Larger, Middle Layer */}
              <motion.div
                initial={{ opacity: 0, x: -200, scale: 1.134, y: '25%' }}
                whileInView={{ opacity: 1, x: 0, scale: 1.134, y: '15%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={yellowSemicircle}
                  alt=""
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                  loading="lazy"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Layer 3: Girl Holding Toy - Slightly Smaller, Top Layer */}
              <motion.div
                initial={{ opacity: 0, y: '-8%', scale: 1.1025 }}
                whileInView={{ opacity: 1, y: '-8%', scale: 1.1025 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <Image
                  src={heroImage}
                  alt="Child engaging in creative play therapy"
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                  priority
                  quality={85}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
