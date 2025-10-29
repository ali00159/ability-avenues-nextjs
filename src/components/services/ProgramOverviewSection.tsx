'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import yellowGreenPencilIcon from "@/assets/yellow-green-pencil-icon.svg";
import greenMapPinIcon from "@/assets/green-map-pin-icon.svg";
import greenGradCapIcon from "@/assets/green-grad-cap-icon.svg";

const ProgramOverviewSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header with ABA Icon */}
          <div className="text-center mb-4">
          <div className="flex justify-center mb-2">
            <motion.div
              initial={{ opacity: 0, x: -150, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
              animate={{
                rotate: [0, -8, 8, -8, 8, 0],
                x: [0, -5, 5, -5, 5, 0]
              }}
              transition={{
                rotate: {
                  delay: 1.1,
                  duration: 0.6,
                  ease: "easeInOut"
                },
                x: {
                  delay: 1.1,
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }}
            >
              <Image src={yellowGreenPencilIcon} alt="ABA Therapy" className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64" width={256} height={256} />
            </motion.div>
          </div>
          </div>

          {/* Large Headline with Color */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
            <span className="text-raisin-black">Reach </span>
            <span className="text-raisin-black">milestone moments</span>
            <br />
            <span className="text-raisin-black">with our </span>
            <span className="text-yellow-green">Evidence-Based ABA center</span>
          </h2>

          {/* Body Text */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Ability Avenues, children ages 1-18 with autism benefit from BCBA-supervised one-on-one support from energetic and highly-trained
              clinicians in our evidence-based ABA programs. Together with families, these professionals set individual goals that honor each child's
              unique way of learning and communicating.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether you're researching autism, already have an autism diagnosis, or are looking to start applied
              behavior analysis (ABA) therapy, we're here to help. Our Minneapolis autism center provides BCBA-supervised, evidence-based ABA therapy in
              our joyful and welcoming center environment.
            </p>
          </div>

          {/* Bold Statement */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl font-bold text-raisin-black leading-relaxed">
              Here, your child is in capable hands. Your voice matters to us, and we seek to advocate for your family in
              everything we do.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Card 1 - Schedule a Tour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-pacific-cyan/30 transition-all duration-300">
                <div className="flex flex-col items-start h-full">
                  <Image src={greenMapPinIcon} alt="Map Pin" className="w-12 h-12 mb-6" width={48} height={48} />
                  <h3 className="text-xl font-bold text-raisin-black mb-4">Schedule a tour</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    Securely submit your information using our brief interest form. We'll then contact you to answer
                    your questions, discuss your family's needs, and help you schedule a tour.
                  </p>
                  <Button onClick={scrollToContact} variant="outline" className="w-full mt-auto">
                    Get started
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Card 2 - ABA at Ability Avenues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-white border-2 border-gray-100 hover:border-pacific-cyan/30 transition-all duration-300">
                <div className="flex flex-col items-start h-full">
                  <Image src={greenGradCapIcon} alt="Graduation Cap" className="w-12 h-12 mb-6" width={48} height={48} />
                  <h3 className="text-xl font-bold text-raisin-black mb-4">ABA at Ability Avenues</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    ABA therapy uses positive reinforcement and play-based activities to help children with autism reach
                    milestones and reduce target behaviors. Our programming is tailored to each child's needs.
                  </p>
                  <Button onClick={scrollToContact} variant="outline" className="w-full mt-auto">
                    Learn more
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
