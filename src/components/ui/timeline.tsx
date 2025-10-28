"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  iconBgColor?: string;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Create timeline for line drawing animation
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const lineHeight = containerRef.current?.offsetHeight || 0;
          gsap.set(lineRef.current, {
            height: `${lineHeight * progress}px`,
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-background font-sans px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto pt-10 pb-20">
        {/* Animated connecting line */}
        <div className="absolute left-8 top-12 md:top-20 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent">
          <div
            ref={lineRef}
            className="w-full bg-gradient-to-t from-pacific-cyan via-secondary to-transparent rounded-full"
            style={{ height: "0px" }}
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start md:gap-10 ${index === 0 ? 'pt-10 md:pt-20' : 'pt-10 md:pt-40'}`}
          >
            {/* Icon and Title Section */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Icon Circle */}
              <div
                className="timeline-icon h-14 w-14 absolute left-2 md:left-2 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: item.iconBgColor || "hsl(186 87% 41%)" }}
              >
                <div className="text-white">
                  {item.icon}
                </div>
              </div>

              {/* Desktop Title */}
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-raisin-black">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full" style={{ perspective: '1000px' }}>
              {/* Mobile Title */}
              <h3 className="md:hidden block text-2xl mb-4 text-center font-bold text-raisin-black">
                {item.title}
              </h3>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, rotate: -8, x: -60, scale: 0.95 }}
                whileInView={{ opacity: 1, rotate: 0, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.5 },
                }}
              >
                <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white">
                  <CardContent className="p-0">
                    {item.content}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
