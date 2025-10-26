'use client';

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What age ranges do you serve in center-based ABA therapy?",
    answer: "We serve children and teens ages 1-18 in our Minneapolis center. We offer four specialized programs: Early Steps for ages 1-3, Foundations for ages 4-7, Skills Builder for ages 8-12, and Transition for ages 13-18. Each program is designed to meet the unique developmental needs of different age groups.",
  },
  {
    question: "What are your hours of operation?",
    answer: "Our center-based programs operate Monday through Friday from 8:30 AM to 4:30 PM. We follow a structured daily schedule that balances individual therapy, group activities, and age-appropriate learning opportunities.",
  },
  {
    question: "What is BCBA supervision and why is it important?",
    answer: "BCBA (Board Certified Behavior Analyst) supervision ensures clinical excellence in your child's ABA therapy. Our BCBAs develop individualized treatment plans, train and oversee therapy staff, analyze progress data, and adjust interventions to ensure your child makes meaningful progress toward their goals.",
  },
  {
    question: "Do you accept insurance and EIDBI coverage?",
    answer: "Yes! We accept EIDBI coverage for ages 1-18 and work with most major insurance providers including Blue Cross Blue Shield, Medica, HealthPartners, Ucare, Humana, and UnitedHealthcare. Coverage varies by plan, so we recommend contacting us to verify your specific insurance benefits.",
  },
  {
    question: "Is there a waitlist for center-based ABA therapy?",
    answer: "Waitlist availability varies based on current program capacity and your child's age group. We recommend scheduling an assessment as soon as possible to secure a spot. We'll discuss current availability and estimated start dates during your intake consultation.",
  },
  {
    question: "What does a typical day look like in center-based ABA therapy?",
    answer: "Each day is structured to balance individual therapy sessions (1:1 with a therapist), small group learning activities, circle time, playground/recess, meal times, and quiet independent play. Activities are tailored to your child's individual goals and developmental level. The structured routine helps build predictability and learning readiness.",
  },
  {
    question: "How are parents involved in their child's therapy?",
    answer: "Parent involvement is essential to your child's success! We provide regular parent training sessions, daily communication about your child's progress, and opportunities to observe and participate in therapy. We also collaborate with you to set meaningful goals and ensure therapy strategies align with your family's values and daily routines.",
  },
  {
    question: "What is the assessment process for new families?",
    answer: "The assessment process begins with an intake consultation where we learn about your child and family. We then conduct a comprehensive evaluation using standardized assessments and observations. Our BCBA develops an individualized treatment plan with specific goals, and we discuss program recommendations and schedule options. The entire process typically takes 2-4 weeks before therapy begins.",
  },
  {
    question: "How is center-based therapy different from in-home ABA therapy?",
    answer: "Center-based therapy offers structured peer interactions, specialized therapeutic equipment, consistent routines in a distraction-free environment, and opportunities to practice social skills with other children. In-home therapy focuses on generalization to your home environment. Many families benefit from a combination of both, and we offer both service delivery models.",
  },
  {
    question: "Do you provide transportation services?",
    answer: "Transportation services vary by location and insurance coverage. Please contact us to discuss transportation options available in your area and whether your insurance plan covers transportation to and from our center-based programs.",
  },
];

const CenterBasedFAQ = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-pacific-cyan/10 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-pacific-cyan" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-raisin-black">Frequently Asked </span>
              <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Common questions about center-based ABA therapy at Ability Avenues in Minneapolis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-raisin-black hover:text-secondary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Still have questions? <a href="/contact" className="text-secondary font-semibold hover:underline">Contact us</a> or visit our <a href="/faq" className="text-secondary font-semibold hover:underline">general FAQ page</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CenterBasedFAQ;
