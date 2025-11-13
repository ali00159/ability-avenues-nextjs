'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Home, Building2, Users, School } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Program } from '@/lib/locations';

interface ProgramsSectionProps {
  programs: Program[];
  cityName: string;
}

const iconMap = {
  'In-Home ABA Therapy': Home,
  'Center-Based ABA Therapy': Building2,
  'Caregiver Coaching': Users,
  'School Collaboration': School,
};

const ProgramsSection = ({ programs, cityName }: ProgramsSectionProps) => {
  const layoutClasses = [
    'lg:col-span-7 lg:row-start-1',
    'lg:col-span-5 lg:row-start-1',
    'lg:col-span-5 lg:row-start-2',
    'lg:col-span-7 lg:row-start-2',
  ];

  const accentGradients = [
    'from-pacific-cyan/25 via-primary/5 to-transparent',
    'from-primary/20 via-white/70 to-pacific-cyan/10',
    'from-primary/15 via-white/80 to-transparent',
    'from-pacific-cyan/30 via-primary/10 to-transparent',
  ];

  const glassBackgrounds = [
    'bg-white/80',
    'bg-white/75',
    'bg-white/70',
    'bg-white/80',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold text-raisin-black">
            ABA Therapy Programs in <span className="text-pacific-cyan">{cityName}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer flexible, evidence-based ABA therapy options tailored to your child's needs and your family's lifestyle in {cityName}.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[minmax(240px,1fr)] lg:grid-rows-2 lg:auto-rows-[minmax(260px,1fr)] gap-6 lg:gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = iconMap[program.title as keyof typeof iconMap] || Home;
            const layoutClass =
              layoutClasses[index] ?? 'lg:col-span-6 lg:row-auto';
            const gradientClass = accentGradients[index % accentGradients.length];
            const glassClass = glassBackgrounds[index % glassBackgrounds.length];
            
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn('group relative h-full', layoutClass, 'md:col-span-1')}
              >
                <Card
                  className={cn(
                    'relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/40 p-8 shadow-lg transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-xl hover:border-primary/20',
                    glassClass
                  )}
                >
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-80 transition duration-300 group-hover:opacity-100',
                      gradientClass
                    )}
                  />

                  <div className="absolute -top-24 -right-20 h-48 w-48 rounded-full bg-pacific-cyan/10 blur-3xl transition duration-300 group-hover:bg-pacific-cyan/20" />
                  <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition duration-300 group-hover:bg-primary/20" />

                  {/* Icon */}
                  <div className="mb-8">
                    <div className="relative inline-flex items-center justify-center rounded-3xl bg-white/70 p-4 shadow-inner ring-1 ring-white/50 transition duration-300 group-hover:shadow-lg group-hover:ring-white/70">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 to-white/40 blur-sm" />
                      <IconComponent className="relative z-10 h-10 w-10 text-pacific-cyan group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title & Age Range */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-raisin-black md:text-3xl">
                      {program.title}
                    </h3>
                    <p className="inline-flex items-center rounded-full bg-pacific-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pacific-cyan">
                      Ages {program.ageRange}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-8 space-y-3">
                    {program.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-muted-foreground transition duration-300 group-hover:text-raisin-black/80"
                      >
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pacific-cyan/80 ring-4 ring-pacific-cyan/10 transition duration-300 group-hover:bg-primary group-hover:ring-primary/20" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

