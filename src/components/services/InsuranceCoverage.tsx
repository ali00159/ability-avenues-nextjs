'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from 'next/link';

const InsuranceCoverage = () => {
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
    <section className="py-24 bg-pacific-cyan relative overflow-hidden">
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
                <div className="w-16 h-16 bg-xanthous/10 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-xanthous" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-raisin-black">Insurance & </span>
                <span className="text-yellow-green">EIDBI Coverage</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We accept EIDBI (Early Intensive Developmental and Behavioral Intervention) coverage and work with most major insurance providers.
              </p>
            </div>

            {/* EIDBI Information */}
            <Card className="p-8 mb-6 bg-yellow-green/5 border-2 border-yellow-green/20">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">EIDBI Coverage</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Ability Avenues accepts EIDBI coverage for children and teens ages 1-18 in our center-based ABA therapy programs. 
                    EIDBI is Minnesota's program for providing early intensive developmental and behavioral intervention services for children with autism.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> While EIDBI in Minnesota covers ages 1-21, Ability Avenues accepts EIDBI for ages 1-18 based on our program capacity.
                  </p>
                </div>
              </div>
            </Card>

            {/* Accepted Insurance */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-raisin-black mb-4">We Accept Most Insurance Plans</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Blue Cross Blue Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Medica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">HealthPartners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Ucare</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Humana</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">UnitedHealthcare</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Coverage may vary by plan. Please contact us to verify your specific insurance coverage.
              </p>
            </div>

            {/* Financial Assistance */}
            <Card className="p-6 mb-8 bg-white border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-pacific-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-raisin-black mb-2">Financial Assistance Available</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand that accessing ABA therapy can be a significant investment. We work with families to explore 
                    all available funding options and payment plans to ensure your child receives the care they need.
                  </p>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={scrollToContact}>
                Verify Insurance Coverage
                <ArrowRight className="w-5 h-5 ml-2" />
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

export default InsuranceCoverage;
