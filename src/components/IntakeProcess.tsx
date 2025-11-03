'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Phone, ClipboardCheck, FileText, UserCheck, Calendar, ArrowRight, CheckCircle, MailQuestion, MessageCircleQuestion } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { gsap } from 'gsap';
import checkmarkIcon from "@/assets/checkmark-icon.svg";

const IntakeProcess = () => {
  const intakeData = [
    {
      title: "Initial Contact",
      icon: <Phone className="w-7 h-7" />,
      iconBgColor: "hsl(186 87% 41%)", // pacific-cyan (teal)
      content: (
        <div className="text-center">
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Reach out to us via phone or email to express your interest in our services. Our intake coordinator will gather basic information about your child and family.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Contact via phone or email
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Discuss your child&apos;s needs
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Receive information about our services
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Insurance & Documentation",
      icon: <FileText className="w-7 h-7" />,
      iconBgColor: "hsl(0 84% 60%)", // coral/salmon red
      content: (
        <div className="text-center">
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            We&apos;ll help you complete necessary paperwork and verify your insurance coverage. Our team will work to ensure all documentation is in order.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Complete intake forms
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Verify insurance benefits
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Submit required medical records
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Provide diagnosis documentation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Assessments",
      icon: <ClipboardCheck className="w-7 h-7" />,
      iconBgColor: "hsl(45 88% 52%)", // xanthous (yellow)
      content: (
        <div className="text-center">
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Our Board Certified Behavior Analysts (BCBAs) will conduct a comprehensive assessment to understand your child&apos;s unique strengths and areas for growth.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Schedule assessment appointment
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Meet with BCBA
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Comprehensive evaluation
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Review assessment results
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Treatment Planning",
      icon: <UserCheck className="w-7 h-7" />,
      iconBgColor: "hsl(345 13% 45%)", // brownish gray
      content: (
        <div className="text-center">
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Based on the assessment, we&apos;ll create a personalized treatment plan with specific, measurable goals tailored to your child&apos;s needs.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Develop individualized treatment plan
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Set specific goals
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Review plan with family
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Obtain necessary approvals
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Starting!",
      icon: <Calendar className="w-7 h-7" />,
      iconBgColor: "hsl(79 75% 48%)", // yellow-green
      content: (
        <div className="text-center">
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Begin your child&apos;s therapy journey! We&apos;ll schedule sessions and match your child with the right therapist team.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Schedule therapy sessions
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Meet your therapy team
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Begin treatment sessions
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Ongoing progress monitoring
            </div>
          </div>
        </div>
      ),
    },
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset elements to ensure clean state
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 });
    
    tl.fromTo(
      titleRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }
    ).fromTo(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      '-=0.4'
    );

    // Cleanup function to reset on unmount
    return () => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { clearProps: 'all' });
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { clearProps: 'all' });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] pt-24 md:pt-32 pb-0 md:pb-8">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-yellow-green/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-20 max-w-2xl w-full">
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              >
                Intake Process{' '}
                <span className="text-yellow-green">Made Simple</span>
              </h1>

              <div ref={subtitleRef} className="space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Starting your journey with Ability Avenues is easy. Our streamlined intake process 
                  is designed to get your child the support they need quickly and efficiently. We're 
                  here to guide you every step of the way.
                </p>

                {/* Two CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="group bg-yellow-green hover:bg-yellow-green/90 text-raisin-black font-semibold shadow-lg text-base md:text-lg px-6 md:px-8 py-6"
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/faq" className="group">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-8 py-6 bg-white hover:bg-gray-50 border-2"
                    >
                      <MessageCircleQuestion className="w-5 h-5 mr-2" />
                      More Questions?
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Trust Line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="pt-8 flex flex-wrap items-center gap-6 md:gap-8 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-green flex-shrink-0" />
                    <span className="text-muted-foreground">Streamlined 5-step process</span>
                  </div>
                  <div className="h-6 w-px bg-border hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-yellow-green flex-shrink-0" />
                    <span className="text-muted-foreground">Support every step of the way</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Placeholder */}
                <div className="relative z-10 aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-yellow-green/20 to-yellow-green/10 border-2 border-border/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ClipboardCheck className="w-24 h-24 md:w-32 md:h-32 text-yellow-green/40 mx-auto mb-4" />
                    <p className="text-sm md:text-base text-muted-foreground">Image placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <Timeline data={intakeData} />
      <Footer />
    </div>
  );
};

export default IntakeProcess;
