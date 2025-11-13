'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import type { FAQ } from '@/lib/locations';

interface FAQsSectionProps {
  faqs: FAQ[];
  cityName: string;
}

const FAQsSection = ({ faqs, cityName }: FAQsSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: [0, -10, 10, -10, 10, -5, 5, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-20 h-20 bg-gradient-to-br from-pacific-cyan/20 to-yellow-green/20 rounded-full flex items-center justify-center"
            >
              <HelpCircle className="w-10 h-10 text-pacific-cyan" />
            </motion.div>
          </div>
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold text-raisin-black">
            ABA Therapy FAQs for <span className="text-pacific-cyan">{cityName}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about ABA therapy, EIDBI, insurance, and getting started with services in {cityName}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-2 border-border/40 rounded-2xl px-6 bg-white hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-raisin-black pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA after FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-muted/30 to-primary/5 rounded-3xl p-8 md:p-10">
            <p className="text-lg text-raisin-black mb-4">
              <strong>Have more questions?</strong> Our team is here to help!
            </p>
            <p className="text-muted-foreground">
              Call us at{' '}
              <a href="tel:9529002344" className="text-primary hover:underline font-semibold">
                (952) 900-2344
              </a>{' '}
              or fill out our contact form below and we'll answer any questions about ABA therapy, EIDBI, insurance, or getting started in {cityName}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;

