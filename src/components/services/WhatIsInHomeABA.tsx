'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Home, Users, Clock, MapPin } from "lucide-react";

const WhatIsInHomeABA = () => {
  const benefits = [
    {
      icon: Home,
      title: "Natural Environment Learning",
      description: "In-home ABA therapy takes place in your child's familiar home environment, allowing them to learn and practice skills in the same setting where they'll use them daily. This natural approach promotes better skill generalization and comfort.",
    },
    {
      icon: Users,
      title: "Family Involvement & Training",
      description: "Parents, siblings, and caregivers actively participate in therapy sessions, learning strategies to support their child's development throughout the day. This family-centered approach ensures consistent support and skill reinforcement.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Our in-home ABA therapy offers flexible scheduling with 20-40 hours per week of personalized support. Sessions can be scheduled mornings, afternoons, evenings, or weekends to fit your family's unique routine and preferences.",
    },
    {
      icon: MapPin,
      title: "Community Integration",
      description: "Therapy sessions can extend beyond the home to include community outings, helping children practice skills in real-world settings like parks, stores, and social environments for better skill generalization.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-raisin-black">What is </span>
              <span className="text-xanthous">In-Home ABA Therapy?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              In-home ABA therapy brings evidence-based applied behavior analysis directly to your home, 
              providing personalized support in your child's natural environment with flexible scheduling and family involvement.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-pacific-cyan/30 transition-all duration-300">
                    <div className="flex flex-col items-start h-full">
                      <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-xanthous" />
                      </div>
                      <h3 className="text-xl font-bold text-raisin-black mb-4">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-pacific-cyan/5 border-2 border-pacific-cyan/20">
              <p className="text-base md:text-lg text-raisin-black leading-relaxed text-center">
                <strong>Our in-home ABA therapy in Minneapolis, Minnesota</strong> serves children and teens with autism spectrum disorder 
                ages 1-18, offering evidence-based applied behavior analysis in the comfort of your home, 
                with BCBA supervision and flexible scheduling that honors each family's unique needs and preferences.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsInHomeABA;
