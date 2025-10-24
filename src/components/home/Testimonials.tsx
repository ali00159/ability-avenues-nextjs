'use client';

import Image from "next/image";
import { Testimonial } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";
import testimonialIcon from "@/assets/testimonial-icon.svg";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Parent",
    rating: 5,
    testimonial: "Ability Avenues has been life-changing for our family. The therapists are incredibly skilled and compassionate, and we've seen remarkable progress in our child's development."
  },
  {
    name: "Michael Thompson",
    role: "Parent",
    rating: 5,
    testimonial: "From the initial intake process to ongoing therapy sessions, the team at Ability Avenues has been professional, caring, and results-driven. Our son has made incredible strides."
  },
  {
    name: "Sarah Chen",
    role: "Parent",
    rating: 5,
    testimonial: "The comprehensive evaluation and personalized treatment plan gave us clarity and hope. The staff's dedication and expertise have helped our daughter achieve milestones."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image src={testimonialIcon} alt="" className="w-40 h-40 -rotate-[20deg]" width={160} height={160} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Families Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the families who have experienced the transformative impact of our services
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Testimonial {...testimonial} className="flex flex-col h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
