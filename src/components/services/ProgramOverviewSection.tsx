'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ClipboardCheck } from "lucide-react";
import abaIcon from "@/assets/aba-icon.svg";
import graduationCapIcon from "@/assets/graduation-cap-icon.svg";

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
          <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Image src={abaIcon} alt="ABA Therapy" className="w-32 h-32 md:w-40 md:h-40" width={160} height={160} />
          </div>
          </div>

          {/* Large Headline with Color */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
            <span className="text-raisin-black">Reach </span>
            <span className="text-raisin-black">milestone moments</span>
            <br />
            <span className="text-raisin-black">with our </span>
            <span className="text-yellow-green">ABA center</span>
          </h2>

          {/* Body Text */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Ability Avenues, children with autism benefit from one-on-one support from energetic and highly-trained
              clinicians. Together with families, these professionals set individual goals that honor each child's
              unique way of learning and communicating.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether you're researching autism, already have an autism diagnosis, or are looking to start applied
              behavior analysis (ABA) therapy, we're here to help. We provide no-cost diagnostic support online or in
              person at one of our joyful and welcoming autism care centers.
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
                  <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-yellow-green" />
                  </div>
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
                  <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                    <Image src={graduationCapIcon} alt="Graduation Cap" className="w-10 h-10" width={40} height={40} />
                  </div>
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
