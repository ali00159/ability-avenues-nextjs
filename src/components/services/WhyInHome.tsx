'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import greenBalloonIcon from "@/assets/green-ballon-icon.svg";
import { Badge } from "@/components/ui/badge";

const WhyInHome = () => {
  return (
    <section className="py-24 bg-[radial-gradient(circle_at_center,white_0%,hsl(var(--yellow-green))_100%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            {/* Icon - Custom SVG */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              >
                <Image 
                  src={greenBalloonIcon} 
                  alt="Why Choose In-Home Therapy" 
                  className="w-40 h-40 md:w-52 md:h-52"
                  width={208}
                  height={208}
                />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-12 leading-relaxed px-4">
              <span className="text-raisin-black">Why Choose </span>
              <span className="text-yellow-green">In-Home </span>
              <span className="text-raisin-black">ABA Therapy?</span>
            </h3>
            
            <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
              In-home ABA therapy provides a comfortable, familiar environment where children with autism can learn and grow naturally. 
              At Ability Avenues, your child benefits from personalized one-on-one attention, flexible scheduling that fits your family's routine, 
              and the opportunity to practice skills in their natural environment. Our BCBA-supervised in-home programs serve children ages 1-18 
              with evidence-based techniques tailored to each family's unique needs and preferences.
            </p>

            {/* Badge Container with Border Bottom - Atlas Style - Desktop Only */}
            <div className="hidden md:block relative w-full border-b border-[#3d527b33] h-32 mb-12">
              {/* Badge 1 - Family-Centered */}
              <Badge 
                variant="feature" 
                colorScheme="cyan" 
                className="absolute bottom-2 left-4 rotate-[-8deg] z-30"
              >
                Family-Centered
              </Badge>

              {/* Badge 2 - Flexible Hours */}
              <Badge 
                variant="feature" 
                colorScheme="lime" 
                className="absolute bottom-0 left-52 rotate-[4deg] z-20"
              >
                Flexible Hours
              </Badge>

              {/* Badge 3 - Natural Learning */}
              <Badge 
                variant="feature" 
                colorScheme="indigo" 
                className="absolute bottom-2 left-96 rotate-[-3deg] z-40"
              >
                Natural Learning
              </Badge>

              {/* Badge 4 - Parent Training */}
              <Badge 
                variant="feature" 
                colorScheme="pink" 
                className="absolute bottom-0 right-40 rotate-[6deg] z-10"
              >
                Parent Training
              </Badge>

              {/* Badge 5 - 1:1 Attention */}
              <Badge 
                variant="feature" 
                colorScheme="orange" 
                className="absolute bottom-2 right-4 rotate-[-5deg] z-50"
              >
                1:1 Attention
              </Badge>
            </div>

            {/* Mobile Badge View - Simplified Grid */}
            <div className="block md:hidden mb-12">
              <div className="flex flex-wrap justify-center gap-3 px-4">
                <Badge variant="feature" colorScheme="cyan">Family-Centered</Badge>
                <Badge variant="feature" colorScheme="lime">Flexible Hours</Badge>
                <Badge variant="feature" colorScheme="indigo">Natural Learning</Badge>
                <Badge variant="feature" colorScheme="pink">Parent Training</Badge>
                <Badge variant="feature" colorScheme="orange">1:1 Attention</Badge>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-3xl mx-auto px-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                In-home therapy provides a comfortable, familiar environment where children can learn and practice skills naturally. 
                Family members can participate in sessions, learning strategies to support their child's development throughout the day. 
                Research shows that children in in-home programs often achieve better skill generalization, as they learn and practice 
                new abilities in the same environment where they'll use them daily—preparing them for success in their natural home and community settings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyInHome;
