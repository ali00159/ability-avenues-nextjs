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
  TrendingUp,
  FileCheck,
  HelpCircle,
  Home
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
    answer: (
      <>
        Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. It focuses on teaching meaningful skills and reducing challenging behaviors through evidence-based techniques. ABA therapy is highly individualized and adapts to each child&apos;s unique needs and learning style. We offer both <Link href="/in-home-therapy" className="underline text-primary hover:text-primary/80">in-home therapy</Link> and <Link href="/center-based-therapy" className="underline text-primary hover:text-primary/80">center-based therapy</Link> options to meet your family&apos;s needs.
      </>
    ),
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
    question: "What's the difference between in-home and center-based therapy?",
    answer: (
      <>
        <Link href="/in-home-therapy" className="underline text-primary hover:text-primary/80">In-home therapy</Link> brings ABA services directly to your home, offering flexibility and the ability to practice skills in your child&apos;s natural environment with family involvement. <Link href="/center-based-therapy" className="underline text-primary hover:text-primary/80">Center-based therapy</Link> takes place in our specialized facility and provides structured peer interactions, specialized equipment, and a distraction-free learning environment. Both options offer individualized treatment plans supervised by BCBAs. The choice depends on your child&apos;s needs, family schedule, and learning preferences. Our team can help you determine which option is best for your family during the <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>.
      </>
    ),
    icon: Home,
    iconColor: "text-yellow-green"
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
    answer: (
      <>
        During the first visit, you&apos;ll meet with our clinical team for a comprehensive assessment. We&apos;ll observe your child, gather information about their strengths and challenges, and discuss your family&apos;s goals. This helps us create an individualized treatment plan tailored to your child&apos;s needs. Learn more about our <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link> to understand what to expect.
      </>
    ),
    icon: FileText,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "How long are therapy sessions?",
    answer: "Session length varies based on each child's individualized treatment plan and recommendations from our clinical team. Typical sessions range from 4-8 hours per day, depending on your child's needs, goals, and insurance coverage.",
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
  },
  {
    question: "What does an individualized treatment plan look like?",
    answer: (
      <>
        A Board Certified Behavior Analyst develops a treatment plan that focuses on your child&apos;s goals and needs. It uses information from diagnostic records, any past therapy, the CMDE, a parent interview, and direct observation. The plan sets clear goals for skill building and behavior support. It is updated often as progress happens or needs change. A full review takes place every six months with another observation and parent interview. Families receive updates so you always know what your child is working on and why. Learn more about how we develop these plans during our <Link href="/intake-process" className="underline text-primary hover:text-primary/80">intake process</Link>.
      </>
    ),
    icon: FileText,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "What is a CMDE?",
    answer: (
      <>
        A CMDE is a Comprehensive Multidisciplinary Evaluation used in Minnesota for children receiving <Link href="/eidbi" className="underline text-primary hover:text-primary/80">EIDBI services</Link>. It confirms a diagnosis related to autism or a related condition. A CMDE provider completes the evaluation, such as an LICSW, LPCC, LMFT, or an Advanced Practice Registered Nurse. They complete training to run the assessment and confirm medical necessity for ABA services. The CMDE includes review of records, parent input, and observation of the child. It guides decisions for services and provides the information needed to build an individualized treatment plan.
      </>
    ),
    icon: FileCheck,
    iconColor: "text-yellow-green"
  },
  {
    question: "What are Ability Avenues therapy hour expectations?",
    answer: "Families agree to a weekly schedule of about 20 to 40 hours of ABA therapy based on clinical recommendations from our team. We use a soft minimum of 20 hours. This means we expect an average of at least 20 hours each week over a three month period. Some weeks might fall below that number because of appointments or family needs. That is fine if the quarter still averages at 20 hours. This approach supports steady progress for your child while allowing reasonable flexibility. Parents with questions receive guidance from our clinical leadership and can review Minnesota DHS resources on recommended treatment intensity for children with autism.",
    icon: Clock,
    iconColor: "text-xanthous"
  },
  {
    question: "What is EIDBI versus ABA?",
    answer: (
      <>
        <Link href="/eidbi" className="underline text-primary hover:text-primary/80">EIDBI</Link> is a Minnesota program through Medical Assistance that pays for therapy for children and young people under 21 with autism or related conditions. ABA is one of the approved therapies inside the EIDBI program. Other approaches include DIR, Early Start Denver Model, and Relationship Development Intervention. Families receive a treatment plan based on goals that fit the child, and the provider selects the approach that best supports those goals. EIDBI pays for services when the treatment meets Medical Assistance rules for medical necessity. Minnesota families find more details on the DHS Early Intensive Developmental and Behavioral Intervention webpage and the Minnesota Autism Resource Portal.
      </>
    ),
    icon: HelpCircle,
    iconColor: "text-pacific-cyan"
  },
  {
    question: "How do you get MA-TEFRA coverage for ABA services if your family income is over the limit?",
    answer: "MA-TEFRA allows a child with a qualifying disability to receive Medical Assistance based on the child's income only, which often helps families who do not meet regular MA income limits. Parents start by applying for Medical Assistance through MNsure or with the DHS 6696 form, then request TEFRA if income stops regular approval. The county reviews disability needs through a process called SMRT and once approved, MA-TEFRA pays for covered services including ABA with no parental fees. Families reach out to their county or tribal agency for help and Minnesota DHS provides step-by-step information on its MA-TEFRA webpage.",
    icon: Shield,
    iconColor: "text-yellow-green"
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
