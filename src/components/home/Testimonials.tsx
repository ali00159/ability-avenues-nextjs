'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import testimonialIcon from "@/assets/testimonial-icon.svg";
import { TestimonialsWithMarquee } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Parent",
    rating: 5,
    testimonial: "After searching for quality ABA therapy in Minneapolis, we found Ability Avenues. The Board Certified Behavior Analysts created a personalized program that helped our 5-year-old with autism develop social skills and communication."
  },
  {
    name: "Michael Thompson",
    role: "Parent",
    rating: 5,
    testimonial: "The center-based therapy at Ability Avenues exceeded our expectations. Our daughter's early intervention program focuses on natural environment learning, and we've seen incredible progress in just 6 months."
  },
  {
    name: "Sarah Chen",
    role: "Parent",
    rating: 5,
    testimonial: "We appreciate how Ability Avenues accepts our insurance and works with EIDBI coverage. The in-home therapy program allows our family to be involved in the applied behavior analysis process, and our BCBA supervisor is always available."
  },
  {
    name: "David Rodriguez",
    role: "Parent",
    rating: 5,
    testimonial: "As someone new to autism therapy, I was impressed by how Ability Avenues explained the ABA therapy process. The center-based approach helped our 7-year-old son build peer relationships and develop age-appropriate behaviors."
  },
  {
    name: "Amanda Williams",
    role: "Parent",
    rating: 5,
    testimonial: "The Minneapolis clinic offers excellent ABA services for children aged 2-10. Our daughter's developmental progress has been remarkable under the guidance of experienced Board Certified Behavior Analysts who truly understand autism spectrum disorder."
  },
  {
    name: "Robert Kim",
    role: "Parent",
    rating: 5,
    testimonial: "We chose Ability Avenues for their expertise in both in-home and center-based therapy. The flexible scheduling works perfectly with our busy lives, and the team's knowledge of insurance coverage made the process seamless."
  },
  {
    name: "Lisa Anderson",
    role: "Parent",
    rating: 5,
    testimonial: "The ABA therapy program at Ability Avenues helped our toddler learn essential skills through play-based interventions. The BCBA supervision ensures quality care, and we value the family-focused approach in Minnesota."
  },
  {
    name: "James Parker",
    role: "Parent",
    rating: 5,
    testimonial: "Our experience with Ability Avenues has been exceptional. The applied behavior analysis techniques have transformed how we approach challenging behaviors, and the center-based program provides the social skills practice our child needs."
  }
];

const Testimonials = () => {
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
                initial={{ opacity: 0, rotate: 340 }}
                whileInView={{ opacity: 1, rotate: -20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.0 }}
              >
                <Image src={testimonialIcon} alt="" className="w-40 h-40" width={160} height={160} />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Families Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from families who have experienced the transformative impact of our Applied Behavior Analysis services for children with autism spectrum disorder
            </p>
          </motion.div>
        </div>

        <div className="py-8">
          <TestimonialsWithMarquee testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
