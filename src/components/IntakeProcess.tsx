'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ClipboardCheck, FileText, UserCheck, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import therapyImage from "@/assets/therapy-session.jpg";
import checkmarkIcon from "@/assets/checkmark-icon.svg";

const IntakeProcess = () => {
  const pathname = usePathname();
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
      <section className="relative pt-32 pb-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              key={`intake-left-${pathname}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                key={`intake-h1-${pathname}`}
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  key={`intake-span-${pathname}`}
                  className="text-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Intake Process
                </motion.span>{" "}
                <motion.span 
                  className="text-raisin-black"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Made Simple
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Starting your journey with Ability Avenues is easy. Our streamlined intake process 
                is designed to get your child the support they need quickly and efficiently. We're 
                here to guide you every step of the way.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      className="group bg-[hsl(var(--yellow-green))] hover:bg-[hsl(79,98%,45%)] text-[hsl(var(--raisin-black))] font-semibold shadow-lg justify-center border-0"
                    >
                      <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="whitespace-nowrap">Contact Us</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Animated background circle */}
              <motion.div 
                className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-xanthous/30 -z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
              
              {/* Main image with enhanced animations */}
              <motion.div 
                className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={therapyImage}
                  alt="Intake Process"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              
              {/* Enhanced floating icons with staggered entrance animations */}
              <motion.div
                className="absolute -top-10 -right-10 text-secondary"
                initial={{ opacity: 0, scale: 0, x: 20, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: 0,
                  rotate: [0, 8, 0],
                  y: [0, -12, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.4, delay: 0.8 },
                  x: { duration: 0.6, delay: 0.8 },
                  y: { duration: 0.6, delay: 0.8 },
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                }}
                aria-hidden
              >
                <ClipboardCheck className="w-16 h-16" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 text-primary"
                initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: 0,
                  rotate: [0, -8, 0],
                  y: [0, 14, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.0 },
                  scale: { duration: 0.4, delay: 1.0 },
                  x: { duration: 0.6, delay: 1.0 },
                  y: { duration: 0.6, delay: 1.0 },
                  rotate: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                  y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                }}
                aria-hidden
              >
                <FileText className="w-20 h-20" />
              </motion.div>
              
              <motion.div
                className="absolute top-10 -left-8 text-xanthous"
                initial={{ opacity: 0, scale: 0, x: -15, y: -15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: 0,
                  rotate: [0, 6, 0],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.2 },
                  scale: { duration: 0.4, delay: 1.2 },
                  x: { duration: 0.6, delay: 1.2 },
                  y: { duration: 0.6, delay: 1.2 },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
                }}
                aria-hidden
              >
                <UserCheck className="w-14 h-14" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 right-10 text-secondary"
                initial={{ opacity: 0, scale: 0, x: 15, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  y: 0,
                  rotate: [0, -6, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.4 },
                  scale: { duration: 0.4, delay: 1.4 },
                  x: { duration: 0.6, delay: 1.4 },
                  y: { duration: 0.6, delay: 1.4 },
                  rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.0 },
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.0 }
                }}
                aria-hidden
              >
                <Calendar className="w-16 h-16" />
              </motion.div>
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
