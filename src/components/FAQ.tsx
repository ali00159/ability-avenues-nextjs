'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { lazy, Suspense } from "react";
import Header from "@/components/shared/Header";
import { FaqSection } from "@/components/ui/faq-section";
import FAQCTASection from "@/components/faq/FAQCTASection";
import { motion } from "framer-motion";

const Footer = lazy(() => import("@/components/shared/Footer"));

const FAQ_ITEMS = [
  {
    question: "What is ABA therapy?",
    answer: "Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. It focuses on teaching meaningful skills and reducing challenging behaviors through evidence-based techniques. ABA therapy is highly individualized and adapts to each child's unique needs and learning style."
  },
  {
    question: "What ages do you serve?",
    answer: "We provide services for children of all ages, from early intervention (as young as 18 months) through adolescence. Our programs are tailored to meet the developmental needs of each age group, ensuring age-appropriate goals and activities."
  },
  {
    question: "Do you accept insurance?",
    answer: (
      <>
        Yes, we accept most major insurance plans. We work directly with insurance companies to verify benefits and handle billing. Our team will help you understand your coverage and any potential out-of-pocket costs during the <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>.
      </>
    )
  },
  {
    question: "What is center-based therapy?",
    answer: (
      <>
        <Link href="/center-based-therapy" className="underline text-primary hover:text-primary/80">Center-based therapy</Link> takes place in our specialized facility designed specifically for ABA services. It provides a structured learning environment with access to specialized equipment, peer interaction opportunities, and a team of professionals working together to support your child&apos;s development.
      </>
    )
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        Getting started is easy! Contact us to schedule an initial consultation. We&apos;ll discuss your child&apos;s needs, answer your questions, and guide you through our <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>. This includes insurance verification, assessment scheduling, and creating a customized treatment plan.
      </>
    )
  },
  {
    question: "What should I expect during the first visit?",
    answer: "During the first visit, you'll meet with our clinical team for a comprehensive assessment. We'll observe your child, gather information about their strengths and challenges, and discuss your family's goals. This helps us create an individualized treatment plan tailored to your child's needs."
  },
  {
    question: "How long are therapy sessions?",
    answer: "Session length varies based on each child's individualized treatment plan and recommendations from our clinical team. Typical sessions range from 2-6 hours per day, depending on your child's needs, goals, and insurance coverage."
  },
  {
    question: "Can parents observe therapy sessions?",
    answer: "Yes! Family involvement is crucial to our approach. Parents are welcome to observe sessions and will receive regular updates on their child's progress. We also provide parent training to help you implement strategies at home and support your child's continued development."
  },
  {
    question: "What qualifications do your therapists have?",
    answer: "Our team includes Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs). All staff members undergo rigorous training and maintain current certifications. We're committed to ongoing professional development to provide the highest quality care."
  },
  {
    question: "How do you measure progress?",
    answer: "We use data-driven methods to continuously track progress toward individualized goals. Regular assessments, behavioral data collection, and progress reports keep families informed. Our team reviews data regularly to adjust treatment plans and ensure your child is making meaningful progress."
  }
];

const FAQ = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              key={`faq-hero-${pathname}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Decorative Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-pacific-cyan/30 rounded-2xl rotate-12"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-12 bg-yellow-green/40 rounded-2xl -rotate-6"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-14 bg-secondary/30 rounded-2xl rotate-3"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6">
                Frequently Asked{" "}
                <span className="text-xanthous">Questions</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                Find answers to common questions about our ABA therapy services, center-based programs, and how we support children and families on their developmental journey.
              </p>
            </motion.div>
          </div>
        </section>

        <FaqSection
          title=""
          items={FAQ_ITEMS}
          className="py-4 pb-20"
        />

        <FAQCTASection />
      </main>
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default FAQ;
