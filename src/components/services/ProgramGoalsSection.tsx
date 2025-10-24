'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, Building2 } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Developmental Milestones",
    description: "Build skills across major developmental milestones necessary to succeed in early elementary classrooms.",
  },
  {
    icon: Users,
    title: "Play-Based Learning",
    description: "Combine play-based group activities and individualized therapy programs to target healthy development.",
  },
  {
    icon: Building2,
    title: "Purpose-Designed Centers",
    description: "Small class sizes with 1:1 support in centers designed to maximize social engagement and relationship building.",
  },
];

const ProgramGoalsSection = () => {
  return (
    <section className="py-24 bg-cornsilk/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="mb-6 text-raisin-black">
            What is the goal of the STEP program?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            The STEP curriculum aims to support children with autism, ages 2 to 6, build skills across major developmental 
            milestones necessary to succeed in early elementary classrooms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white p-8 h-full hover-lift transition-all duration-300 border-none shadow-md">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-pacific-cyan/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-pacific-cyan stroke-[2]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-raisin-black">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {goal.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
            Activities to build skills including: circle time, music, arts and crafts, play, and other group activities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramGoalsSection;
