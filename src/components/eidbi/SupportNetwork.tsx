'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Users, BookOpen, Heart, Headphones, Building2, HandHeart } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: Building2,
    name: 'Minnesota Autism Resource Portal',
    description:
      'Comprehensive online resource connecting families to autism services, providers, and support throughout Minnesota.',
    link: '#',
    phone: '',
    color: 'pacific-cyan',
  },
  {
    icon: BookOpen,
    name: 'PACER Center',
    description:
      'Parent advocacy organization providing information, training, and support to families of children with disabilities.',
    link: '#',
    phone: '952-838-9000',
    color: 'yellow-green',
  },
  {
    icon: Users,
    name: 'The Arc Minnesota',
    description:
      'Advocacy organization promoting and protecting human rights for people with intellectual and developmental disabilities.',
    link: '#',
    phone: '833-450-1494',
    color: 'xanthous',
  },
  {
    icon: Headphones,
    name: 'Help Me Connect',
    description:
      'Free service helping Minnesota families find early childhood programs, resources, and support for children with special needs.',
    link: '#',
    phone: '866-693-4663',
    color: 'pacific-cyan',
  },
  {
    icon: Heart,
    name: 'MN Association for Children\'s Mental Health',
    description:
      'Family-run organization supporting children with social, emotional, behavioral, and mental health challenges.',
    link: '#',
    phone: '800-528-4511',
    color: 'yellow-green',
  },
  {
    icon: HandHeart,
    name: 'Family to Family Network',
    description:
      'Connecting families raising children with disabilities and special health care needs through peer support.',
    link: '#',
    phone: '651-644-3663',
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
          transition={{ duration: 0.9 }}
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
                transition={{ duration: 0.85, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-lift hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white group">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 inline-flex rounded-xl p-3"
                    style={{ backgroundColor: `hsl(var(--${resource.color}) / 0.1)` }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: `hsl(var(--${resource.color}))` }}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {resource.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {resource.description}
                  </p>

                  {/* Phone Number */}
                  {resource.phone && (
                    <div className="mb-3">
                      <a
                        href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                        className="text-sm font-medium hover:underline"
                        style={{ color: `hsl(var(--${resource.color}))` }}
                      >
                        {resource.phone}
                      </a>
                    </div>
                  )}

                  {/* Visit Website Link */}
                  <Link
                    href={resource.link as any}
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: `hsl(var(--${resource.color}))` }}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Link>
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
          transition={{ duration: 0.8, delay: 0.4 }}
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

