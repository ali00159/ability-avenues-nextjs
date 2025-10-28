'use client';

import Link from 'next/link';
import Image from "next/image";
import { Phone, ClipboardCheck, FileText, UserCheck, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import therapyImage from "@/assets/therapy-session.jpg";
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
      <section className="relative pt-32 pb-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-secondary">Intake Process</span>{" "}
                <span className="text-raisin-black">Made Simple</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Starting your journey with Ability Avenues is easy. Our streamlined intake process 
                is designed to get your child the support they need quickly and efficiently. We're 
                here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-[hsl(var(--yellow-green))] hover:bg-[hsl(79,98%,45%)] text-[hsl(var(--raisin-black))] font-semibold shadow-lg justify-center border-0"
                  >
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Contact Us</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Background circle */}
              <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-xanthous/30 -z-10" />
              
              {/* Main image */}
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full shadow-2xl">
                <Image
                  src={therapyImage}
                  alt="Intake Process"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Static floating icons */}
              <div className="absolute -top-10 -right-10 text-secondary" aria-hidden>
                <ClipboardCheck className="w-16 h-16" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 text-primary" aria-hidden>
                <FileText className="w-20 h-20" />
              </div>
              
              <div className="absolute top-10 -left-8 text-xanthous" aria-hidden>
                <UserCheck className="w-14 h-14" />
              </div>
              
              <div className="absolute -bottom-4 right-10 text-secondary" aria-hidden>
                <Calendar className="w-16 h-16" />
              </div>
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
