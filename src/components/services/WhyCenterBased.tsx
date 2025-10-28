'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import centerBasedIcon from "@/assets/center-based-icon.svg";
import { Badge } from "@/components/ui/badge";

const WhyCenterBased = () => {
  return (
    <section className="py-24 bg-[radial-gradient(circle_at_center,white_0%,hsl(var(--pacific-cyan))_100%)] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            {/* Icon - Custom SVG */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 60, x: 0, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, x: [-20, 0], rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              >
                <Image 
                  src={centerBasedIcon} 
                  alt="Center-Based Program" 
                  className="w-40 h-40 md:w-52 md:h-52"
                  width={208}
                  height={208}
                />
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-12 leading-relaxed px-4">
              <span className="text-raisin-black">Why Choose a </span>
              <span className="text-pacific-cyan">Center-Based </span>
              <span className="text-raisin-black">ABA Program?</span>
            </h3>
            
            <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
              While in-home ABA therapy offers convenience, center-based programs provide critical advantages for many children with autism. 
              At Ability Avenues, your child benefits from structured peer interactions, specialized therapeutic spaces, and consistent routines 
              across four age-specific programs: Early Steps (1-3), Foundations (4-7), Skills Builder (8-12), and Transition (13-18). 
              Our BCBA-supervised Minneapolis autism center uses evidence-based techniques proven effective in clinical settings.
            </p>

            {/* Badge Container with Border Bottom - Atlas Style - Desktop Only */}
            <div className="hidden md:block relative w-full border-b border-[#3d527b33] h-32 mb-12">
              {/* Badge 1 - BCBA-Supervised */}
              <Badge 
                variant="feature" 
                colorScheme="cyan" 
                className="absolute bottom-2 left-4 rotate-[-8deg] z-30"
              >
                BCBA-Supervised
              </Badge>

              {/* Badge 2 - Age-Specific */}
              <Badge 
                variant="feature" 
                colorScheme="lime" 
                className="absolute bottom-0 left-52 rotate-[4deg] z-20"
              >
                Age-Specific
              </Badge>

              {/* Badge 3 - Peer Learning */}
              <Badge 
                variant="feature" 
                colorScheme="indigo" 
                className="absolute bottom-2 left-96 rotate-[-3deg] z-40"
              >
                Peer Learning
              </Badge>

              {/* Badge 4 - Sensory Rooms */}
              <Badge 
                variant="feature" 
                colorScheme="pink" 
                className="absolute bottom-0 right-40 rotate-[6deg] z-10"
              >
                Sensory Rooms
              </Badge>

              {/* Badge 5 - School-Ready */}
              <Badge 
                variant="feature" 
                colorScheme="orange" 
                className="absolute bottom-2 right-4 rotate-[-5deg] z-50"
              >
                School-Ready
              </Badge>
            </div>

            {/* Mobile Badge View - Simplified Grid */}
            <div className="block md:hidden mb-12">
              <div className="flex flex-wrap justify-center gap-3 px-4">
                <Badge variant="feature" colorScheme="cyan">BCBA-Supervised</Badge>
                <Badge variant="feature" colorScheme="lime">Age-Specific</Badge>
                <Badge variant="feature" colorScheme="indigo">Peer Learning</Badge>
                <Badge variant="feature" colorScheme="pink">Sensory Rooms</Badge>
                <Badge variant="feature" colorScheme="orange">School-Ready</Badge>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-3xl mx-auto px-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                Center-based therapy eliminates home distractions, provides peer learning opportunities unavailable in one-on-one settings, 
                and offers professional-grade resources like sensory rooms, adaptive equipment, and structured group activities. Research shows 
                children in center-based programs often achieve faster progress in social communication, school-readiness skills, and adaptive 
                behaviors—preparing them for success in school and community environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCenterBased;
