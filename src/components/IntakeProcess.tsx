'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Phone, ClipboardCheck, FileText, UserCheck, Calendar, ArrowRight, CheckCircle, MessageCircleQuestion, Target } from "lucide-react";
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
      <section className="relative pt-24 md:pt-32 pb-0 md:pb-8">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Floating Icons */}
            <motion.div
              className="absolute top-12 right-0 text-pacific-cyan hidden lg:block"
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <ClipboardCheck className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </motion.div>
            <motion.div
              className="absolute top-4 -left-20 text-yellow-green hidden lg:block"
              animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <Calendar className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 right-20 text-xanthous hidden lg:block"
              animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <FileText className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </motion.div>
            <motion.div
              className="absolute bottom-5 -left-20 text-pacific-cyan hidden lg:block"
              animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <Target className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </motion.div>

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

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
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
                className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm"
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
        </div>
      </section>
      {/* Timeline Section */}
      <Timeline data={intakeData} />
      <Footer />
    </div>
  );
};

export default IntakeProcess;
