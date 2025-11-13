'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Users,
  BookOpen,
  Heart,
  Headphones,
  Building2,
  HandHeart,
  Phone,
  ArrowRight,
} from 'lucide-react';

type ResourceContact = {
  label: string;
  number: string;
  note?: string;
};

type Resource = {
  icon: typeof Building2;
  name: string;
  description: string;
  link: string;
  supportType: string;
  ctaLabel: string;
  color: 'pacific-cyan' | 'yellow-green' | 'xanthous' | 'primary';
  contacts?: ResourceContact[];
};

const resources: Resource[] = [
  {
    icon: Building2,
    name: 'Minnesota Autism Resource Portal',
    description:
      'Comprehensive online resource connecting families to autism services, providers, and support throughout Minnesota.',
    link: 'https://mn.gov/autism/',
    supportType: 'State Resource',
    ctaLabel: 'Explore the Portal',
    color: 'pacific-cyan',
    contacts: [
      {
        label: 'General',
        number: '651-431-2000',
        note: 'Minnesota DHS',
      },
    ],
  },
  {
    icon: BookOpen,
    name: 'PACER Center',
    description:
      'Parent advocacy organization providing information, training, and support to families of children with disabilities.',
    link: 'https://www.pacer.org/',
    supportType: 'Family Advocacy',
    ctaLabel: 'Visit PACER.org',
    color: 'yellow-green',
    contacts: [
      {
        label: 'Main',
        number: '952-838-9000',
      },
      {
        label: 'Toll-Free',
        number: '800-537-2237',
      },
    ],
  },
  {
    icon: Users,
    name: 'The Arc Minnesota',
    description:
      'Advocacy organization promoting and protecting human rights for people with intellectual and developmental disabilities.',
    link: 'https://arcminnesota.org/',
    supportType: 'Advocacy & Support',
    ctaLabel: 'Connect with The Arc',
    color: 'xanthous',
    contacts: [
      {
        label: 'Main',
        number: '952-920-0855',
      },
      {
        label: 'Toll-Free',
        number: '833-450-1494',
      },
    ],
  },
  {
    icon: Headphones,
    name: 'Help Me Connect',
    description:
      'Free service helping Minnesota families find early childhood programs, resources, and support for children with special needs.',
    link: 'https://helpmeconnect.web.health.state.mn.us/HelpMeConnect/',
    supportType: 'Early Childhood',
    ctaLabel: 'Find Support',
    color: 'pacific-cyan',
    contacts: [
      {
        label: 'Toll-Free',
        number: '866-693-4769',
      },
    ],
  },
  {
    icon: Heart,
    name: "MN Association for Children's Mental Health",
    description:
      'Family-run organization supporting children with social, emotional, behavioral, and mental health challenges.',
    link: 'https://macmh.org/',
    supportType: 'Mental Health',
    ctaLabel: 'Learn about MACMH',
    color: 'yellow-green',
    contacts: [
      {
        label: 'Main',
        number: '651-644-7333',
      },
      {
        label: 'Toll-Free',
        number: '800-528-4511',
      },
    ],
  },
  {
    icon: HandHeart,
    name: 'Family Voices of Minnesota',
    description:
      'Connecting families raising children with disabilities and special health care needs through peer support.',
    link: 'https://familyvoicesofminnesota.org/',
    supportType: 'Peer Support',
    ctaLabel: 'Connect with Family Voices',
    color: 'xanthous',
    contacts: [
      {
        label: 'Main',
        number: '612-440-1609',
      },
      {
        label: 'Toll-Free',
        number: '866-334-8444',
      },
    ],
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
          <Badge variant="outline" className="mx-auto mb-4 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-pacific-cyan border-pacific-cyan/30 bg-pacific-cyan/5">
            Community Resources
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-raisin-black">
            You're Not Alone: <span className="text-pacific-cyan">Minnesota's Support Network</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Partner organizations across Minnesota are ready to help your family navigate services, advocate for support, and build lasting connections.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const accentColor = `hsl(var(--${resource.color}))`;
            const accentSoft = `hsl(var(--${resource.color}) / 0.08)`;
            const accentBorder = `hsl(var(--${resource.color}) / 0.25)`;

            return (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="group flex h-full flex-col rounded-3xl border-2 border-transparent bg-white p-8 transition-all duration-300 hover-lift hover:shadow-lg hover:border-primary/20"
                  style={{ borderColor: accentSoft }}
                >
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:shadow-md" style={{ backgroundColor: accentSoft }}>
                    <IconComponent
                      className="h-7 w-7 transition-colors duration-300"
                      style={{ color: accentColor }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Support Type */}
                  <Badge
                    variant="outline"
                    className="mb-3 inline-flex w-fit items-center gap-2 border-2 px-4 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ borderColor: accentBorder, backgroundColor: accentSoft, color: accentColor }}
                  >
                    {resource.supportType}
                  </Badge>

                  {/* Name */}
                  <h3 className="text-2xl font-semibold mb-3 text-raisin-black">
                    {resource.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base flex-grow">
                    {resource.description}
                  </p>

                  {/* Contact Information - Aligned at bottom */}
                  <div className="space-y-4">
                    {/* Phone Numbers */}
                    {resource.contacts && resource.contacts.length > 0 && (
                      <div className="space-y-2">
                        {resource.contacts.map((contact) => (
                          <a
                            key={`${resource.name}-${contact.label}-${contact.number}`}
                            href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                            className="flex items-center justify-between rounded-2xl border border-transparent bg-muted/40 px-4 py-2 text-sm font-medium transition-colors hover:border-muted hover:bg-white"
                            style={{ color: accentColor }}
                          >
                            <span className="flex items-center gap-2">
                              <Phone className="h-4 w-4" aria-hidden="true" />
                              {contact.number}
                            </span>
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              {contact.note ?? contact.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Visit Website Link */}
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: accentColor }}
                    >
                      {resource.ctaLabel}
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="inline-flex items-center gap-2 rounded-full border-2 border-raisin-black/10 bg-raisin-black px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-raisin-black/90 hover:shadow-lg"
            >
              Connect with Our Team
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportNetwork;

