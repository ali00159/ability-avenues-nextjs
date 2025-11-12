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
      title: "Step 1: Eligibility Review",
      icon: <ClipboardCheck className="w-7 h-7" />,
      iconBgColor: "hsl(186 87% 41%)", // pacific-cyan (teal)
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-pacific-cyan/10 text-pacific-cyan px-4 py-1 text-sm font-semibold">
              1 day
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            We gather everything needed to verify insurance eligibility and begin enrollment right away.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Share your child&apos;s full name
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Provide their date of birth
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Upload a copy of their insurance card
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              We confirm eligibility and start enrollment
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: Intake Meeting",
      icon: <Phone className="w-7 h-7" />,
      iconBgColor: "hsl(0 84% 60%)", // coral/salmon red
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-red-100 text-red-500 px-4 py-1 text-sm font-semibold">
              30 minutes
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Meet with us via video to complete paperwork, understand our policies, and align on how we will partner together.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Complete intake paperwork together
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Review policies and expectations
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Sign a Release of Information for collaboration
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3: Document Collection",
      icon: <FileText className="w-7 h-7" />,
      iconBgColor: "hsl(45 88% 52%)", // xanthous (yellow)
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-600 px-4 py-1 text-sm font-semibold">
              1–2 weeks
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Collect the documents that help our team understand your child&apos;s history, services, and strengths.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Medical records and physician notes
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              IEP or school-based assessments
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Prior evaluations or treatment summaries
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Ongoing check-ins to support your progress
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4: Comprehensive Multidisciplinary Evaluation (CMDE)",
      icon: <Target className="w-7 h-7" />,
      iconBgColor: "hsl(345 13% 45%)", // brownish gray
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-slate-200 text-slate-700 px-4 py-1 text-sm font-semibold">
              1 week
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Our Qualified Supervising Professional (QSP) leads a holistic evaluation to map out your child&apos;s needs.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Telehealth caregiver interview
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Observation in a familiar setting (can align with interview)
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Review of collected documents
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Use of standardized assessment tools
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 5: Individualized Treatment Plan (ITP)",
      icon: <UserCheck className="w-7 h-7" />,
      iconBgColor: "hsl(79 75% 48%)", // yellow-green
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-lime-100 text-lime-600 px-4 py-1 text-sm font-semibold">
              1 week
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Your BCBA designs a plan that reflects your child&apos;s goals and the CMDE findings, with your input at every step.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Telehealth caregiver interview to finalize goals
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Follow-up observation (can align with interview)
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Integration of CMDE insights and your input
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              A clear plan shared for your review
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 6: Insurance Authorization & Start of Services",
      icon: <Calendar className="w-7 h-7" />,
      iconBgColor: "hsl(210 70% 45%)", // calming blue
      content: (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-600 px-4 py-1 text-sm font-semibold">
              1 week
            </span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-semibold">
            Once the plan is approved, we schedule ABA sessions so your child can begin with a trusted team.
          </p>
          <div className="mb-4 flex flex-col items-center">
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Submit the treatment plan for authorization
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Confirm insurance approval
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg mb-3">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              Schedule ABA sessions with a Behavior Technician
            </div>
            <div className="flex gap-3 items-center text-muted-foreground text-base md:text-lg">
              <Image src={checkmarkIcon} alt="" className="w-8 h-8" width={32} height={32} />
              BCBA supervision via our secure Passage Health platform
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
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Floating Icons */}
            <motion.div
              className="absolute top-12 -right-4 text-pacific-cyan hidden lg:block"
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
              Our Intake Process{' '}
              <span className="text-yellow-green">Tailored from the Start</span>
            </h1>

            <div ref={subtitleRef} className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We follow a clear, supportive process to ensure services are tailored to your child
                right from the beginning. Our team walks alongside your family so you always know
                what comes next.
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
                  <span className="text-muted-foreground">Supportive 6-step process</span>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-yellow-green flex-shrink-0" />
                  <span className="text-muted-foreground">Personalized guidance throughout intake</span>
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
