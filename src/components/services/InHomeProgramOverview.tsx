'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ClipboardCheck } from "lucide-react";
import graduationCapIcon from "@/assets/graduation-cap-icon.svg";
import abstractShape1 from "@/assets/abstact shape 1.svg";
import abstractShape2 from "@/assets/abstact shape 2.svg";
import abstractShape3 from "@/assets/abstact shape 3.svg";
import abstractShape4 from "@/assets/abstact shape 4.svg";
import abstractShape5 from "@/assets/abstact shape 5.svg";

const InHomeProgramOverview = () => {
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
          {/* Header with Abstract Shapes */}
          <div className="text-center mb-8">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-8 mb-3">
              {/* Shape 1 - Clockwise, 2.0s */}
              <motion.div
                initial={{ opacity: 0, rotate: 340 }}
                whileInView={{ opacity: 1, rotate: -20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.0 }}
              >
                <Image src={abstractShape1} alt="" className="w-20 h-20 md:w-48 md:h-48" width={192} height={192} />
              </motion.div>

              {/* Shape 2 - Counter-clockwise, 2.5s */}
              <motion.div
                initial={{ opacity: 0, rotate: -340 }}
                whileInView={{ opacity: 1, rotate: 20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.5 }}
              >
                <Image src={abstractShape2} alt="" className="w-20 h-20 md:w-48 md:h-48" width={192} height={192} />
              </motion.div>

              {/* Shape 3 - Clockwise, 1.8s */}
              <motion.div
                initial={{ opacity: 0, rotate: 340 }}
                whileInView={{ opacity: 1, rotate: -20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.8 }}
              >
                <Image src={abstractShape3} alt="" className="w-20 h-20 md:w-48 md:h-48" width={192} height={192} />
              </motion.div>

              {/* Shape 4 - Counter-clockwise, 2.2s */}
              <motion.div
                initial={{ opacity: 0, rotate: -340 }}
                whileInView={{ opacity: 1, rotate: 20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.2 }}
              >
                <Image src={abstractShape4} alt="" className="w-20 h-20 md:w-48 md:h-48" width={192} height={192} />
              </motion.div>

              {/* Shape 5 - Clockwise, 2.8s */}
              <motion.div
                initial={{ opacity: 0, rotate: 340 }}
                whileInView={{ opacity: 1, rotate: -20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2.8 }}
              >
                <Image src={abstractShape5} alt="" className="w-20 h-20 md:w-48 md:h-48" width={192} height={192} />
              </motion.div>
            </div>
          </div>

          {/* Large Headline with Color */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
            <span className="text-raisin-black">Personalized </span>
            <span className="text-raisin-black">In-Home ABA Therapy</span>
            <br />
            <span className="text-raisin-black">in Your </span>
            <span className="text-yellow-green">Natural Environment</span>
          </h2>

          {/* Body Text */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Ability Avenues, children ages 1-18 with autism benefit from BCBA-supervised one-on-one support from energetic and highly-trained
              clinicians in our evidence-based in-home ABA programs. Together with families, these professionals set individual goals that honor each child's
              unique way of learning and communicating in their natural home environment.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether you're researching autism, already have an autism diagnosis, or are looking to start applied
              behavior analysis (ABA) therapy, we're here to help. Our in-home ABA therapy provides BCBA-supervised, evidence-based care
              in the comfort and familiarity of your home, with flexible scheduling to fit your family's needs.
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
                  <h3 className="text-xl font-bold text-raisin-black mb-4">Schedule an Assessment</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    Securely submit your information using our brief interest form. We'll then contact you to answer
                    your questions, discuss your family's needs, and help you schedule an in-home assessment. No waitlist!
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
                  <h3 className="text-xl font-bold text-raisin-black mb-4">In-Home ABA at Ability Avenues</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    In-home ABA therapy uses positive reinforcement and play-based activities to help children with autism reach
                    milestones and reduce target behaviors. Our programming is tailored to each child's needs and includes parent training and skill generalization in natural settings.
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

export default InHomeProgramOverview;
