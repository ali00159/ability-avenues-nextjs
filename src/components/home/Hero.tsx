'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Puzzle, Star, Pencil, Smile, Award, Users2, ArrowRight, Phone, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Typewriter } from "@/components/ui/typewriter-text";
import heroImage from "@/assets/hero-girl-lollipop.webp";

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-light">
      {/* Animated Background Shapes - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <motion.div
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="relative z-20 max-w-2xl">
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
              Personalized ABA therapy for children with autism.
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
                  <div className="text-muted-foreground">ABA therapy</div>
                </div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <Users2 className="w-5 h-5 md:w-6 md:h-6 text-secondary flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Ages 2-18</div>
                  <div className="text-muted-foreground">All levels</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Circle with Image */}
          <motion.div
            key={`hero-image-${pathname}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center relative"
          >
            {/* Floating Icons */}
            <motion.div
              className="absolute top-10 left-10 text-primary"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Pencil className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <motion.div
              className="absolute top-20 right-10 text-secondary"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Puzzle className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-5 text-xanthous"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Star className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-5 text-rose-300"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <Smile className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>

            <div className="relative w-full max-w-4xl">
              <svg 
                viewBox="0 0 396 364" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="heroCircleClip">
                    <path d="M510.037 275.508C643.516 274.468 752.599 381.764 753.764 515.242C754.929 648.72 647.735 757.904 514.259 759.194C380.605 760.486 271.244 653.119 270.077 519.464C268.911 385.808 376.381 276.548 510.037 275.508Z" transform="matrix(0.502616 0 0 0.502616 -61.8218 -91.4761)"/>
                  </clipPath>
                </defs>
                {/* Background yellow circle */}
                <path 
                  fill="#FEEE9C" 
                  d="M510.037 275.508C643.516 274.468 752.599 381.764 753.764 515.242C754.929 648.72 647.735 757.904 514.259 759.194C380.605 760.486 271.244 653.119 270.077 519.464C268.911 385.808 376.381 276.548 510.037 275.508Z" 
                  transform="matrix(0.502616 0 0 0.502616 -61.8218 -91.4761)"
                />
                {/* Semi-circle on bottom half */}
                <g transform="translate(10, 110) scale(0.8)">
                  <path 
                    fill="#F4C537" 
                    d="M499.93 365.774C509.994 364.73 522.911 365.533 533.059 366.025C647.149 371.61 751.609 447.271 788.299 556.166C798.551 584.683 804.416 615.305 804.467 645.617C804.485 655.97 800.581 659.542 791.16 659.802C781.201 660.076 770.524 660.004 760.59 660.007L703.084 660.007L525.25 660.022L331.239 660L267.717 659.985C259.977 659.98 230.306 661.197 224.401 657.492C217.837 653.375 220.765 629.629 221.444 621.231C226.501 562.943 250.089 507.807 288.754 463.898C344.538 401.784 417.23 370.149 499.93 365.774Z" 
                    transform="matrix(0.609669 0 0 0.609669 -73.77 -137.175)"
                  />
                </g>
                {/* Girl image back in yellow circle */}
                <image 
                  href={typeof heroImage === 'string' ? heroImage : heroImage.src}
                  x="50" 
                  y="30"
                  width="300" 
                  height="300"
                  preserveAspectRatio="xMidYMid meet"
                  clipPath="url(#heroCircleClip)"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
