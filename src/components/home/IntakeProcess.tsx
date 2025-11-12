'use client';

import Link from 'next/link';
import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ClipboardCheck, FileText, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IntakeProcess = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Eligibility Review",
      description:
        "We gather your child’s full name, date of birth, and insurance card so we can verify insurance eligibility and begin enrollment.",
      duration: "1 day",
      icon: ClipboardCheck,
      color: "primary",
      bgColor: "bg-primary",
      highlights: [
        "Share your child’s full name",
        "Provide their date of birth",
        "Upload a copy of the insurance card",
        "We verify insurance eligibility",
      ],
    },
    {
      number: 2,
      title: "Intake Meeting",
      description:
        "We schedule a video intake meeting to complete paperwork, review policies, and sign a Release of Information for coordinated support.",
      duration: "30 minutes",
      icon: Phone,
      color: "secondary",
      bgColor: "bg-secondary",
      highlights: [
        "Video meeting with our intake coordinator",
        "Complete intake paperwork together",
        "Review policies and expectations",
        "Sign a Release of Information for collaboration",
      ],
    },
    {
      number: 3,
      title: "Document Collection",
      description:
        "You gather key documents, such as medical records, IEP or school-based assessments, and prior evaluations or treatment summaries.",
      duration: "1–2 weeks",
      icon: FileText,
      color: "accent",
      bgColor: "bg-accent",
      highlights: [
        "Medical records or physician notes",
        "IEP or school-based assessments",
        "Prior evaluations or treatment summaries",
        "Guidance from our team as you gather documents",
      ],
    },
    {
      number: 4,
      title: "Comprehensive Multidisciplinary Evaluation (CMDE)",
      description:
        "Our QSP leads a comprehensive evaluation to understand your child’s strengths through interviews, observation, document review, and standardized tools.",
      highlights: [
        "Telehealth caregiver interview",
        "Observation in a familiar setting (can align with interview)",
        "Review of collected documents",
        "Use of standardized tools",
      ],
      duration: "1 week",
      icon: ClipboardCheck,
      color: "pacific-cyan",
      bgColor: "bg-pacific-cyan",
    },
    {
      number: 5,
      title: "Individualized Treatment Plan (ITP)",
      description:
        "Your BCBA integrates CMDE findings and your priorities to design a personalized treatment plan grounded in meaningful goals.",
      highlights: [
        "Telehealth caregiver interview to finalize goals",
        "Follow-up observation (can align with interview)",
        "Integration of CMDE findings and caregiver input",
      ],
      duration: "1 week",
      icon: FileText,
      color: "yellow-green",
      bgColor: "bg-yellow-green",
    },
    {
      number: 6,
      title: "Insurance Authorization & Start of Services",
      description:
        "Once the plan is approved, we schedule ABA sessions with a Behavior Technician and BCBA oversight delivered through our secure Passage Health platform.",
      highlights: [
        "Submit the treatment plan for authorization",
        "Confirm insurance approval",
        "Schedule ABA sessions with a Behavior Technician",
        "BCBA supervision via Passage Health platform",
      ],
      duration: "1 week",
      icon: Rocket,
      color: "xanthous",
      bgColor: "bg-xanthous",
    },
  ];

  // Auto-advance carousel every 4 seconds with infinite loop
  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section id="intake-process" className="py-24 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Intake Process
            </span>
          </div>
          <h2 className="mt-4 mb-6">
            Get Started
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a clear, supportive process so services are tailored to your child from the very first conversation. Our team keeps you informed every step of the way.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center">
              <div className={`${step.bgColor} rounded-full w-3 h-3 shadow-sm`} title={`Step ${step.number}: ${step.title}`} />
              {step.number < steps.length && (
                <div className="w-8 h-0.5 bg-muted-foreground/30 mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <CarouselItem key={step.number} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="p-8 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white flex flex-col">
                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`${step.bgColor} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md`}>
                          {step.number}
                        </div>
                        <div 
                          className="rounded-2xl px-3 py-1 text-xs font-medium"
                          style={{ 
                            backgroundColor: `hsl(var(--${step.color}) / 0.1)`,
                            color: `hsl(var(--${step.color}))`
                          }}
                        >
                          Step {step.number} of {steps.length}
                        </div>
                      </div>

                      {/* Duration */}
                      {step.duration && (
                        <div className="mb-4">
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground"
                          >
                            {step.duration}
                          </span>
                        </div>
                      )}

                      {/* Icon */}
                      <div className="mb-6">
                        <div 
                          className="inline-flex rounded-2xl p-4"
                          style={{ backgroundColor: `hsl(var(--${step.color}) / 0.1)` }}
                        >
                          <IconComponent 
                            className="w-12 h-12 stroke-[2]"
                            style={{ color: `hsl(var(--${step.color}))` }}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      {step.highlights && (
                        <ul className="mt-6 space-y-3 text-left text-sm text-muted-foreground">
                          {step.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={`mt-1 h-2 w-2 rounded-full ${step.bgColor}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12 lg:-left-16 shadow-lg" />
          <CarouselNext className="-right-4 md:-right-12 lg:-right-16 shadow-lg" />
        </Carousel>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-cornsilk text-raisin-black font-semibold rounded-full hover:bg-cornsilk/90 hover:shadow-lg transition-all duration-300 border-2 border-raisin-black/10 hover:border-raisin-black/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </Link>
          <Link href="/intake-process">
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white text-raisin-black font-semibold rounded-full hover:bg-gray-50 hover:shadow-md transition-all duration-300 border-2 border-border"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(IntakeProcess);
