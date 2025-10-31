'use client';

import Link from 'next/link';
import { lazy, Suspense } from "react";
import Header from "@/components/shared/Header";
import FAQHero from "@/components/faq/FAQHero";
import FAQCTASection from "@/components/faq/FAQCTASection";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Shield, 
  Building2, 
  ArrowRightCircle, 
  FileText, 
  Clock, 
  Eye, 
  Award, 
  TrendingUp 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = lazy(() => import("@/components/shared/Footer"));

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is ABA therapy?",
    answer: "Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. It focuses on teaching meaningful skills and reducing challenging behaviors through evidence-based techniques. ABA therapy is highly individualized and adapts to each child's unique needs and learning style.",
    icon: BookOpen,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "What ages do you serve?",
    answer: "We provide services for children of all ages, from early intervention (as young as 18 months) through adolescence. Our programs are tailored to meet the developmental needs of each age group, ensuring age-appropriate goals and activities.",
    icon: Users,
    iconColor: "text-yellow-green"
  },
  {
    question: "Do you accept insurance?",
    answer: (
      <>
        Yes, we accept most major insurance plans. We work directly with insurance companies to verify benefits and handle billing. Our team will help you understand your coverage and any potential out-of-pocket costs during the <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>.
      </>
    ),
    icon: Shield,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "What is center-based therapy?",
    answer: (
      <>
        <Link href="/center-based-therapy" className="underline text-primary hover:text-primary/80">Center-based therapy</Link> takes place in our specialized facility designed specifically for ABA services. It provides a structured learning environment with access to specialized equipment, peer interaction opportunities, and a team of professionals working together to support your child&apos;s development.
      </>
    ),
    icon: Building2,
    iconColor: "text-xanthous"
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        Getting started is easy! Contact us to schedule an initial consultation. We&apos;ll discuss your child&apos;s needs, answer your questions, and guide you through our <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>. This includes insurance verification, assessment scheduling, and creating a customized treatment plan.
      </>
    ),
    icon: ArrowRightCircle,
    iconColor: "text-yellow-green"
  },
  {
    question: "What should I expect during the first visit?",
    answer: "During the first visit, you'll meet with our clinical team for a comprehensive assessment. We'll observe your child, gather information about their strengths and challenges, and discuss your family's goals. This helps us create an individualized treatment plan tailored to your child's needs.",
    icon: FileText,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "How long are therapy sessions?",
    answer: "Session length varies based on each child's individualized treatment plan and recommendations from our clinical team. Typical sessions range from 2-6 hours per day, depending on your child's needs, goals, and insurance coverage.",
    icon: Clock,
    iconColor: "text-xanthous"
  },
  {
    question: "Can parents observe therapy sessions?",
    answer: "Yes! Family involvement is crucial to our approach. Parents are welcome to observe sessions and will receive regular updates on their child's progress. We also provide parent training to help you implement strategies at home and support your child's continued development.",
    icon: Eye,
    iconColor: "text-yellow-green"
  },
  {
    question: "What qualifications do your therapists have?",
    answer: "Our team includes Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs). All staff members undergo rigorous training and maintain current certifications. We're committed to ongoing professional development to provide the highest quality care.",
    icon: Award,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "How do you measure progress?",
    answer: "We use data-driven methods to continuously track progress toward individualized goals. Regular assessments, behavioral data collection, and progress reports keep families informed. Our team reviews data regularly to adjust treatment plans and ensure your child is making meaningful progress.",
    icon: TrendingUp,
    iconColor: "text-xanthous"
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative bg-gradient-to-br from-cornsilk/20 via-white to-pacific-cyan/5 overflow-hidden">
        <FAQHero />

        {/* FAQ Items Grid */}
        <section className="pb-16 md:pb-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {FAQ_ITEMS.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4 md:gap-5"
                    >
                      {/* Icon Container */}
                      <div className={cn(
                        "flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-muted/50 flex items-center justify-center",
                        "border border-border/30"
                      )}>
                        <IconComponent className={cn("w-6 h-6 md:w-7 md:h-7", item.iconColor)} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold text-raisin-black mb-2 md:mb-3">
                          {item.question}
                        </h3>
                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <FAQCTASection />
      </main>
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default FAQ;
