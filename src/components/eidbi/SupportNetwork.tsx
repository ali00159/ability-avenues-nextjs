'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Users, BookOpen, Heart, Headphones, Building2, HandHeart, Phone } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: Building2,
    name: 'Minnesota Autism Resource Portal',
    description:
      'Comprehensive online resource connecting families to autism services, providers, and support throughout Minnesota.',
    link: 'https://mn.gov/autism/',
    phone: '',
    color: 'pacific-cyan',
  },
  {
    icon: BookOpen,
    name: 'PACER Center',
    description:
      'Parent advocacy organization providing information, training, and support to families of children with disabilities.',
    link: 'https://www.pacer.org/',
    phone: { main: '952-838-9000', tollFree: '800-537-2237' },
    color: 'yellow-green',
  },
  {
    icon: Users,
    name: 'The Arc Minnesota',
    description:
      'Advocacy organization promoting and protecting human rights for people with intellectual and developmental disabilities.',
    link: 'https://arcminnesota.org/',
    phone: { main: '952-920-0855', tollFree: '833-450-1494' },
    color: 'xanthous',
  },
  {
    icon: Headphones,
    name: 'Help Me Connect',
    description:
      'Free service helping Minnesota families find early childhood programs, resources, and support for children with special needs.',
    link: 'https://helpmeconnect.web.health.state.mn.us/HelpMeConnect/',
    phone: '866-693-4769',
    color: 'pacific-cyan',
  },
  {
    icon: Heart,
    name: 'MN Association for Children\'s Mental Health',
    description:
      'Family-run organization supporting children with social, emotional, behavioral, and mental health challenges.',
    link: 'https://macmh.org/',
    phone: { main: '651-644-7333', tollFree: '800-528-4511' },
    color: 'yellow-green',
  },
  {
    icon: HandHeart,
    name: 'Family Voices of Minnesota',
    description:
      'Connecting families raising children with disabilities and special health care needs through peer support.',
    link: 'https://familyvoicesofminnesota.org/',
    phone: { main: '612-440-1609', tollFree: '866-334-8444' },
    color: 'xanthous',
  },
];

const SupportNetwork = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You're Not Alone:{' '}
            <span className="text-pacific-cyan">Minnesota's Support Network</span>
          </h2>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;

            return (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white group flex flex-col">
                  {/* Icon */}
                  <div
                    className="mb-4 inline-flex rounded-xl p-3"
                    style={{ backgroundColor: `hsl(var(--${resource.color}) / 0.1)` }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: `hsl(var(--${resource.color}))` }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {resource.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                    {resource.description}
                  </p>

                  {/* Contact Information - Aligned at bottom */}
                  <div className="space-y-2">
                    {/* Phone Number */}
                    {resource.phone && (
                      <div className="space-y-1">
                        {typeof resource.phone === 'string' ? (
                          <a
                            href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                            style={{ color: `hsl(var(--${resource.color}))` }}
                          >
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            {resource.phone} <span className="text-muted-foreground ml-1">(toll-free)</span>
                          </a>
                        ) : (
                          <>
                            {resource.phone.main && (
                              <a
                                href={`tel:${resource.phone.main.replace(/[^0-9]/g, '')}`}
                                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                                style={{ color: `hsl(var(--${resource.color}))` }}
                              >
                                <Phone className="w-4 h-4" aria-hidden="true" />
                                {resource.phone.main} <span className="text-muted-foreground ml-1">(main)</span>
                              </a>
                            )}
                            {resource.phone.tollFree && (
                              <a
                                href={`tel:${resource.phone.tollFree.replace(/[^0-9]/g, '')}`}
                                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                                style={{ color: `hsl(var(--${resource.color}))` }}
                              >
                                <Phone className="w-4 h-4" aria-hidden="true" />
                                {resource.phone.tollFree} <span className="text-muted-foreground ml-1">(toll-free)</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {/* Visit Website Link */}
                    <Link
                      href={resource.link as any}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                      style={{ color: `hsl(var(--${resource.color}))` }}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:shadow-md transition-all group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
            Download Our Complete Minnesota Autism Resources Guide (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportNetwork;

