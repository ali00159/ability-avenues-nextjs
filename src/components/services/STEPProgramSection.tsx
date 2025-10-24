'use client';

import { motion } from "framer-motion";
import { Check, Users, Building2, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  "Learning new words",
  "Simple communication",
  "Interacting socially with peers",
  "Imitation skills",
  "Understanding social cues",
  "Working independently",
  "Increasing attention and focus",
  "Taking turns",
  "Transitioning between activities",
  "Following group directions",
];

const centerBenefits = [
  {
    icon: Building2,
    title: "Purpose-Built Environment",
    description: "Our centers are specifically designed for early childhood learning with sensory-friendly spaces, specialized therapy rooms, and engaging play areas that promote exploration and development.",
  },
  {
    icon: Users,
    title: "Peer Learning Opportunities",
    description: "Children benefit from structured group activities where they learn alongside peers, developing critical social skills, turn-taking, and collaborative play in a supportive environment.",
  },
  {
    icon: Heart,
    title: "Consistent Routine & Structure",
    description: "A predictable daily schedule helps children feel secure and confident. Our structured environment promotes better focus, reduces anxiety, and accelerates skill acquisition.",
  },
  {
    icon: Sparkles,
    title: "Specialized Resources",
    description: "Access to professional-grade therapeutic equipment, educational materials, and sensory tools that may not be available in home settings, maximizing learning potential.",
  },
];

const STEPProgramSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Benefits of ABA Centers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-raisin-black text-center">
              Why Choose a Center-Based ABA Program?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {centerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full bg-white hover-lift transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                      <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-pacific-cyan/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-pacific-cyan stroke-[2]" />
                        </div>
                      </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-raisin-black">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground font-light leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default STEPProgramSection;
