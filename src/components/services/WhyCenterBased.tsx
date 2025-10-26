'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import centerBasedIcon from "@/assets/center-based-icon.svg";
import { Badge } from "@/components/ui/badge";

const WhyCenterBased = () => {
  return (
    <section className="py-24 bg-pacific-cyan">
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
              <Image 
                src={centerBasedIcon} 
                alt="Center-Based Program" 
                className="w-40 h-40 md:w-52 md:h-52"
                width={208}
                height={208}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-12 leading-relaxed px-4">
              <span className="text-raisin-black">Why Choose a </span>
              <span className="text-yellow-green">Center-Based </span>
              <span className="text-raisin-black">ABA Program?</span>
            </h3>
            
            <p className="text-base md:text-lg text-center mb-8 md:mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
              At Ability Avenues, we customize our curriculum to the unique learning needs of every child. 
              We use a variety of evidence-based techniques based on principles of behavior and developmental science. 
              Center-based therapy vs in-home offers structured peer interactions, specialized equipment, and research-backed 
              benefits for children with autism spectrum disorder.
            </p>

            {/* Badge Container with Border Bottom - Atlas Style - Desktop Only */}
            <div className="hidden md:block relative w-full border-b border-[#3d527b33] h-32 mb-12">
              {/* Badge 1 - Purpose-Built */}
              <Badge 
                variant="feature" 
                colorScheme="orange" 
                className="absolute bottom-0 left-4 rotate-[-8deg] z-30"
              >
                Purpose-Built
              </Badge>

              {/* Badge 2 - Peer Learning */}
              <Badge 
                variant="feature" 
                colorScheme="lime" 
                className="absolute bottom-3 left-40 rotate-[4deg] z-20"
              >
                Peer Learning
              </Badge>

              {/* Badge 3 - Structured */}
              <Badge 
                variant="feature" 
                colorScheme="indigo" 
                className="absolute bottom-5 left-80 rotate-[-3deg] z-40"
              >
                Structured
              </Badge>

              {/* Badge 4 - Evidence-based */}
              <Badge 
                variant="feature" 
                colorScheme="cyan" 
                className="absolute bottom-7 right-40 rotate-[6deg] z-10"
              >
                Evidence-based
              </Badge>

              {/* Badge 5 - Specialized */}
              <Badge 
                variant="feature" 
                colorScheme="pink" 
                className="absolute bottom-10 right-4 rotate-[-5deg] z-50"
              >
                Specialized
              </Badge>
            </div>

            {/* Mobile Badge View - Simplified Grid */}
            <div className="block md:hidden mb-12">
              <div className="flex flex-wrap justify-center gap-3 px-4">
                <Badge variant="feature" colorScheme="orange">Purpose-Built</Badge>
                <Badge variant="feature" colorScheme="lime">Peer Learning</Badge>
                <Badge variant="feature" colorScheme="indigo">Structured</Badge>
                <Badge variant="feature" colorScheme="cyan">Evidence-based</Badge>
                <Badge variant="feature" colorScheme="pink">Specialized</Badge>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-3xl mx-auto px-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                Our specialized environments are designed to maximize learning potential through structured peer interactions, 
                consistent routines, and access to professional-grade therapeutic equipment. Research shows that center-based 
                ABA therapy can accelerate social skill development and communication milestones compared to in-home therapy alone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCenterBased;
