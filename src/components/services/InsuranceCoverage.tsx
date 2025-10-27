'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Logos3 } from "@/components/ui/logos3";

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
    <section className="py-24 bg-[radial-gradient(circle_at_center,white_0%,hsl(var(--xanthous))_100%)] relative overflow-hidden">
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
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, rotate: [0, -10, 10, -10, 10, -5, 5, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image 
                    src="/shield-icon.svg" 
                    alt="Shield Icon" 
                    width={160} 
                    height={160}
                    className="w-40 h-40"
                  />
                </motion.div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-raisin-black">Insurance Coverage for </span>
                <span className="text-yellow-green">ABA Therapy</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We work with most major insurance providers to make ABA therapy accessible for your family. 
                Our dedicated team handles all aspects of insurance verification, billing, and claims processing 
                so you can focus on your child's progress.
              </p>
            </div>

            {/* Comprehensive Insurance Information */}
            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Verification Process */}
                <Card className="p-6 bg-pacific-cyan/5 border-2 border-pacific-cyan/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pacific-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-pacific-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-raisin-black mb-3">Insurance Verification Process</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We conduct comprehensive verification of your benefits before services begin.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Verify coverage details including deductibles and copayments</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Check annual limits and out-of-pocket maximums</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Review prior authorization requirements</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Answer questions about benefits before therapy begins</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Billing & Claims Support */}
                <Card className="p-6 bg-yellow-green/5 border-2 border-yellow-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-yellow-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-raisin-black mb-3">Billing & Claims Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our dedicated billing team handles all insurance coordination and claims processing for you.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-yellow-green mt-0.5 flex-shrink-0" />
                          <span>Submit claims and track payments</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-yellow-green mt-0.5 flex-shrink-0" />
                          <span>Manage prior authorizations and renewals</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-yellow-green mt-0.5 flex-shrink-0" />
                          <span>Proactively resolve any claim issues</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-yellow-green mt-0.5 flex-shrink-0" />
                          <span>Provide detailed billing statements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Network Participation & Coverage */}
                <Card className="p-6 bg-xanthous/5 border-2 border-xanthous/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-xanthous/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-xanthous" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-raisin-black mb-3">Network Participation & Coverage Options</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        In-network with most major providers in Minnesota for lower out-of-pocket costs.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-xanthous mt-0.5 flex-shrink-0" />
                          <span>Accept out-of-network benefits</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-xanthous mt-0.5 flex-shrink-0" />
                          <span>Coverage includes assessments and therapy sessions</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-xanthous mt-0.5 flex-shrink-0" />
                          <span>Minimal or no copayments for in-network services</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-xanthous mt-0.5 flex-shrink-0" />
                          <span>Maximize benefits while minimizing cost</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Ongoing Support */}
                <Card className="p-6 bg-pacific-cyan/5 border-2 border-pacific-cyan/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pacific-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-pacific-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-raisin-black mb-3">Dedicated Insurance Coordinators</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Dedicated coordinators assist throughout your child's therapy journey.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Answer questions and address concerns</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Update insurance information as needed</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Handle documentation for renewals</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-pacific-cyan mt-0.5 flex-shrink-0" />
                          <span>Adapt to coverage changes during treatment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Logo Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <Logos3 />
            </div>

            {/* Coverage Note */}
            <div className="mb-8">
              <Card className="p-6 bg-yellow-green/5 border-2 border-yellow-green/20">
                <p className="text-center text-raisin-black leading-relaxed mb-3">
                  <strong>Coverage varies by plan.</strong> We recommend contacting us to verify your specific insurance benefits. 
                  Our team will help you understand your coverage and work with your insurance provider to ensure you receive the 
                  services your child needs.
                </p>
                <p className="text-center text-muted-foreground leading-relaxed">
                  When contacting your insurance, ask about: ABA therapy coverage, annual hour limits, copayment amounts, 
                  prior authorization requirements, and whether we're in-network with your plan. Our insurance coordinators 
                  are available to help you navigate these questions and coordinate with your provider.
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

export default InsuranceCoverage;
