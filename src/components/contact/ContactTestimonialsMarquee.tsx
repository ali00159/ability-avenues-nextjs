"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import greenTrophyIcon from "@/assets/green-trophy-icon.svg";
import { TestimonialsWithMarquee, type Testimonial } from "@/components/ui/testimonials-with-marquee";
import type { LocationTestimonial } from "@/lib/locations";

interface ContactTestimonialsMarqueeProps {
  cityName: string;
  testimonials: LocationTestimonial[];
}

const ContactTestimonialsMarquee = ({ cityName, testimonials }: ContactTestimonialsMarqueeProps) => {
  const marqueeTestimonials: Testimonial[] = testimonials.map((testimonial) => ({
    name: testimonial.name,
    role: "Parent",
    testimonial: testimonial.quote,
    rating: 5,
    location: `Parent in ${testimonial.city}`,
    outcome: testimonial.outcome,
  }));

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: [0, -10, 10, -10, 10, -5, 5, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image src={greenTrophyIcon} alt="" className="w-40 h-40" width={160} height={160} />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Families in <span className="text-yellow-green">{cityName}</span> Love Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from families who have experienced the transformative impact of our Applied Behavior Analysis
              services in {cityName} and surrounding communities.
            </p>
          </motion.div>
        </div>

        <div className="py-8">
          <TestimonialsWithMarquee testimonials={marqueeTestimonials} />
        </div>
      </div>
    </section>
  );
};

export default ContactTestimonialsMarquee;

