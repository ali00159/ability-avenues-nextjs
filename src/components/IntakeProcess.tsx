'use client';

import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ClipboardCheck, FileText, UserCheck, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto relative"
          >
            {/* Floating Icons */}
            <motion.div
              className="absolute top-5 right-5 text-pacific-cyan hidden lg:block"
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <Phone className="w-16 h-16" />
            </motion.div>
            <motion.div
              className="absolute top-5 -left-8 text-yellow-green hidden lg:block"
              animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <ClipboardCheck className="w-20 h-20" />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 right-20 text-xanthous hidden lg:block"
              animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <UserCheck className="w-14 h-14" />
            </motion.div>
            <motion.div
              className="absolute bottom-5 -left-20 text-pacific-cyan hidden lg:block"
              animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <Calendar className="w-16 h-16" />
            </motion.div>

            {/* Text Content - with top margin to push down without affecting icons */}
            <div className="mt-20">
              {/* Large Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              <span className="text-raisin-black">Intake Process</span>
              {" "}
              <span className="text-yellow-green">Made Simple</span>
            </h1>

            {/* Description Text */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Starting your journey with Ability Avenues is easy. Our streamlined intake process 
                is designed to get your child the support they need quickly and efficiently. We're 
                here to guide you every step of the way.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-[hsl(var(--yellow-green))] hover:bg-[hsl(79,98%,45%)] text-[hsl(var(--raisin-black))] font-semibold shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Timeline Section */}
      <Timeline data={intakeData} />
      <Footer />
    </div>
  );
};

export default IntakeProcess;
