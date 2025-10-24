'use client';

import { motion } from "framer-motion";
import { Target, Heart, Users, Smile, Star, HandHeart } from "lucide-react";
import { Card } from "@/components/ui/card";

const promises = [
  {
    icon: Target,
    text: "Celebrate your child's individuality",
  },
  {
    icon: Heart,
    text: "Reach milestone moments together",
  },
  {
    icon: Star,
    text: "Evidence-based education always",
  },
  {
    icon: HandHeart,
    text: "Honor family values and experience",
  },
  {
    icon: Users,
    text: "Collaborate as a team",
  },
  {
    icon: Smile,
    text: "Create joyful learning experiences",
  }
];

const Promises = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-bold mb-16"
          style={{ fontSize: "clamp(36px, 4.5vw, 54px)" }}
        >
          Ability Avenues <span className="text-xanthous">Promises</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-pacific-cyan/30 transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-xanthous/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-xanthous" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-raisin-black leading-snug">
                    {promise.text}
                  </h3>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promises;
