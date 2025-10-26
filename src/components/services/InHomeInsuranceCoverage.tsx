'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const InHomeInsuranceCoverage = () => {
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
    <section className="py-24 bg-yellow-green relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/shield-icon.svg" 
                  alt="Shield Icon" 
                  width={160} 
                  height={160}
                  className="w-40 h-40"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-raisin-black">Insurance Coverage for </span>
                <span className="text-yellow-green">In-Home ABA Therapy</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We accept EIDBI (Early Intensive Developmental and Behavioral Intervention) coverage and work with most major insurance providers for our in-home ABA therapy services.
              </p>
            </div>

            {/* EIDBI Information */}
            <div className="mb-10">
              <Card className="p-6 bg-pacific-cyan/5 border-2 border-pacific-cyan/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pacific-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-pacific-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-raisin-black mb-2">EIDBI Coverage for In-Home Services</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      EIDBI coverage is available for in-home ABA therapy for children ages 1-18 in Minnesota. 
                      This program provides comprehensive coverage for evidence-based interventions delivered in your home environment, 
                      ensuring your family has access to the support you need without financial burden.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Insurance Providers */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-raisin-black mb-6 text-center">Accepted Insurance Providers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Blue Cross Blue Shield",
                  "Medica",
                  "HealthPartners",
                  "Ucare",
                  "Humana",
                  "UnitedHealthcare"
                ].map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-4 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                      <p className="font-medium text-raisin-black">{provider}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coverage Note */}
            <div className="mb-8">
              <Card className="p-6 bg-yellow-green/5 border-2 border-yellow-green/20">
                <p className="text-center text-raisin-black leading-relaxed">
                  <strong>Coverage varies by plan.</strong> We recommend contacting us to verify your specific insurance benefits 
                  for in-home ABA therapy services. Our team will help you understand your coverage and work with your insurance provider.
                </p>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={scrollToContact} size="lg" className="text-lg px-8 bg-cornsilk hover:bg-cornsilk/90 text-raisin-black">
                Verify Your Coverage
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InHomeInsuranceCoverage;
